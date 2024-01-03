import { Checkbox } from "@nextui-org/react";
import Back from "./Back";
type Props = {
  list: {
    id: string;
    task: string;
  }[];
};

const CompleteTaskList = ({ list }: Props) => {
  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id} className="mb-6">
              <div className="flex justify-between items-center">
                <Checkbox>{item.task}</Checkbox>
                <Back id={item.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CompleteTaskList;
