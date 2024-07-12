import SearchTask from "./task/SearchTask";
import TaskAction from "./task/TaskAction";
import TaskList from "./task/TaskList";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <SearchTask />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />

          <TaskList />
        </div>
      </div>
    </section>
  );
};
export default TaskBoard;
