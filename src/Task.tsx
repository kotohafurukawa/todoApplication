import TaskFrame from "./components/TaskFrame";
import TaskModal from "./components/TaskModal";
import TaskList from "./components/TaskList";
import CompleteTaskList from "./components/CompleteTaskList";
import { useTaskListContext } from "./contexts";

function Task() {
  const taskList = useTaskListContext();
  return (
    <>
      <TaskFrame title={"TODO List"}>
        <TaskList list={taskList.task} />
        <div className="text-right">
          <TaskModal />
        </div>
      </TaskFrame>
      <TaskFrame title={"Complete TODO List"}>
        <CompleteTaskList list={taskList.completeTask} />
      </TaskFrame>
    </>
  );
}

export default Task;
