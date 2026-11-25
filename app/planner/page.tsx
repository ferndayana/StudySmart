
"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  dueDate: string;
  completed: boolean;
};

export default function PlannerPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Study Task");
  const [dueDate, setDueDate] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTasks = localStorage.getItem("studysmart-tasks");

    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        if (Array.isArray(parsed)) setTasks(parsed);
      } catch {
        setTasks([]);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("studysmart-tasks", JSON.stringify(tasks));
    }
  }, [tasks, loaded]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingId !== null) {
      setTasks((previous) =>
        previous.map((task) =>
          task.id === editingId
            ? { ...task, title, description, category, dueDate }
            : task
        )
      );
      setEditingId(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        category,
        dueDate,
        completed: false,
      };

      setTasks((previous) => [...previous, newTask]);
    }

    resetForm();
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setCategory("Study Task");
    setDueDate("");
    setEditingId(null);
  }

  function editTask(task: Task) {
    setTitle(task.title);
    setDescription(task.description);
    setCategory(task.category);
    setDueDate(task.dueDate);
    setEditingId(task.id);
  }

  function deleteTask(id: number) {
    if (confirm("Are you sure you want to delete this item?")) {
      setTasks((previous) => previous.filter((task) => task.id !== id));

      if (editingId === id) resetForm();
    }
  }

  function toggleComplete(id: number) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return task.category === filter;
  });

  const completedCount = tasks.filter((task) => task.completed).length;

  if (!loaded) return null;

  return (
    <main className="planner-page">
      <section className="page-hero planner-hero">
        <p className="eyebrow">PLAN • ORGANIZE • ACHIEVE</p>
        <h1>My Planner</h1>
        <p>Manage your study tasks, personal goals, and daily activities.</p>
      </section>

      <section className="planner-content">
        <div className="planner-stats">
          <div className="planner-stat">
            <span>Total Items</span>
            <h2>{tasks.length}</h2>
          </div>
          <div className="planner-stat">
            <span>Completed</span>
            <h2>{completedCount}</h2>
          </div>
          <div className="planner-stat">
            <span>Pending</span>
            <h2>{tasks.length - completedCount}</h2>
          </div>
        </div>

        <div className="planner-layout">
          <form className="planner-form" onSubmit={handleSubmit}>
            <h2>{editingId !== null ? "Edit Item" : "Add New Item"}</h2>

            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a task or goal"
              required
            />

            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add some details..."
              rows={3}
            />

            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Study Task</option>
              <option>Personal Goal</option>
              <option>Daily Activity</option>
            </select>

            <label>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <button className="planner-submit" type="submit">
              {editingId !== null ? "Save Changes" : "+ Add to Planner"}
            </button>

            {editingId !== null && (
              <button
                className="planner-cancel"
                type="button"
                onClick={resetForm}
              >
                Cancel Editing
              </button>
            )}
          </form>

          <div className="planner-list">
            <div className="planner-list-heading">
              <h2>My Activities</h2>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter activities"
              >
                <option>All</option>
                <option>Study Task</option>
                <option>Personal Goal</option>
                <option>Daily Activity</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>

            {filteredTasks.length === 0 ? (
              <div className="planner-empty">
                <h3>No activities yet</h3>
                <p>Add your first task, personal goal, or daily activity!</p>
              </div>
            ) : (
              <div className="planner-items">
                {filteredTasks.map((task) => (
                  <article className="planner-item" key={task.id}>
                    <div className="planner-item-top">
                      <div>
                        <span className="planner-category">
                          {task.category}
                        </span>
                        <h3 className={task.completed ? "completed-task" : ""}>
                          {task.title}
                        </h3>
                      </div>

                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task.id)}
                        aria-label={`Mark ${task.title} as completed`}
                      />
                    </div>

                    {task.description && <p>{task.description}</p>}

                    {task.dueDate && (
                      <span className="planner-date">
                        Due: {task.dueDate}
                      </span>
                    )}

                    <div className="planner-actions">
                      <button type="button" onClick={() => editTask(task)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
