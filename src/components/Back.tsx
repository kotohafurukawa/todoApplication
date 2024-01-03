import { Button } from "@nextui-org/react";
import { useTaskDispatchContext } from "../contexts/";
type Props = {
  id: string;
};

const Back = ({ id }: Props) => {
  const dispatch = useTaskDispatchContext();
  return (
    <Button
      onPress={() => {
        dispatch({ type: "BACK", payload: id });
      }}
      className="font-bold"
    >
      戻す
    </Button>
  );
};

export default Back;
