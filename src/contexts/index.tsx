import { useContext } from "react";
import { TaskListContext, TaskDispatchContext } from "./TaskProvider";

const useTaskListContext = () => {
  return useContext(TaskListContext);
};

const useTaskDispatchContext = () => {
  const dispatch = useContext(TaskDispatchContext);
  if (!dispatch) {
    throw new Error("dispatch must not be null type");
  }
  return dispatch;
};

export { useTaskListContext, useTaskDispatchContext };
