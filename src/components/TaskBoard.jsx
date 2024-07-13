import { useState } from "react";
import AddTaskModal from "./task/AddTaskModal";
import SearchTask from "./task/SearchTask";
import TaskAction from "./task/TaskAction";
import TaskList from "./task/TaskList";

const TaskBoard = () => {
  const initialTask = {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([initialTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowAddModal(false);
  };
  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal taskToUpdate={taskToUpdate} onSave={handleAddTask} />
      )}
      <div className="container">
        <SearchTask />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />

          <TaskList onEdit={handleEdit} tasks={tasks} />
        </div>
      </div>
    </section>
  );
};
export default TaskBoard;
