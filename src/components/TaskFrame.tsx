import Title from "./Title";
import { ReactNode } from "react";
type Props = {
  title: string;
  children?: ReactNode;
};

const TaskFrame = ({ title, children }: Props) => {
  return (
    <div className="max-w-3xl mx-auto my-8 px-6 lg:px-0">
      <div className="rounded border-2">
        <Title title={title} />
        <div className="m-8">{children}</div>
      </div>
    </div>
  );
};

export default TaskFrame;
