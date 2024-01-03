import { Checkbox } from "@nextui-org/react";
import Complete from "./Complete";
type Props = {
  list: {
    id: string;
    task: string;
  }[];
};

const TaskList = ({ list }: Props) => {
  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id} className="mb-6">
              <div className="flex justify-between items-center">
                <Checkbox>{item.task}</Checkbox>
                <Complete id={item.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
