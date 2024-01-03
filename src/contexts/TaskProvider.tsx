import React, { createContext, ReactNode } from "react";
import { nanoid } from "nanoid";
import { useImmerReducer } from "use-immer";

// アクションオブジェクト型定義
type ACTIONTYPE =
  | { type: "ADD"; payload: string }
  | { type: "COMPLETE"; payload: string }
  | { type: "BACK"; payload: string };

// state型定義
type TaskListContextType = {
  task: { id: string; task: string }[];
  completeTask: { id: string; task: string }[];
};

// initialState型定義と初期値
const initialState: TaskListContextType = {
  task: [
    { id: nanoid(10), task: "test1" },
    { id: nanoid(10), task: "test2" },
    { id: nanoid(10), task: "test3" },
    { id: nanoid(10), task: "test4" },
    { id: nanoid(10), task: "test5" },
    { id: nanoid(10), task: "test6" },
    { id: nanoid(10), task: "test7" },
  ],
  completeTask: [
    { id: nanoid(10), task: "test8" },
    { id: nanoid(10), task: "test9" },
    { id: nanoid(10), task: "test10" },
    { id: nanoid(10), task: "test11" },
    { id: nanoid(10), task: "test12" },
    { id: nanoid(10), task: "test13" },
    { id: nanoid(10), task: "test14" },
  ],
};

// 更新用関数
const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD":
      return {
        task: [...state.task, { id: nanoid(10), task: action.payload }],
        completeTask: [...state.completeTask],
      };

    case "COMPLETE": {
      const newCompleteTask = state.task.find(
        (element) => element.id === action.payload
      );

      if (newCompleteTask) {
        return {
          task: [
            ...state.task.filter((element) => {
              return element.id !== action.payload;
            }),
          ],
          completeTask: [...state.completeTask, newCompleteTask],
        };
      } else {
        return state;
      }
    }

    case "BACK": {
      const returnTaskFromCompleteTask = state.completeTask.find((element) => {
        return element.id === action.payload;
      });
      if (returnTaskFromCompleteTask) {
        return {
          task: [...state.task, returnTaskFromCompleteTask],
          completeTask: [
            ...state.completeTask.filter((element) => {
              return element.id !== action.payload;
            }),
          ],
        };
      } else {
        return state;
      }
    }

    default:
      throw new Error("type or payload are something wrong");
  }
};

// stateを配信するcontext
const TaskListContext = createContext<TaskListContextType>({
  task: [],
  completeTask: [],
});
// dispatchを配信するcontext
const TaskDispatchContext = createContext<React.Dispatch<ACTIONTYPE> | null>(
  null
);

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskList, taskListDispatch] = useImmerReducer(reducer, initialState);

  return (
    <TaskListContext.Provider value={taskList}>
      <TaskDispatchContext.Provider value={taskListDispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskListContext.Provider>
  );
};

export { TaskListContext, TaskDispatchContext, TaskProvider };
