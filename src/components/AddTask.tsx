import { useTaskDispatchContext } from "../contexts";
import { Button } from "@nextui-org/react";
type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
};

const AddTask = ({ value, setValue, onClose }: Props) => {
  const dispatch = useTaskDispatchContext();

  return (
    <>
      <Button
        color="primary"
        onPress={() => {
          dispatch({ type: "ADD", payload: value });
          setValue("");
          onClose();
        }}
      >
        追加
      </Button>
    </>
  );
};

export default AddTask;
