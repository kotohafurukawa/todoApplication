import { Checkbox, Button } from "@nextui-org/react";
type Props = {
  task: string;
};

const Item = ({ task }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <Checkbox>{task}</Checkbox>
      <Button></Button>
    </div>
  );
};

export default Item;
