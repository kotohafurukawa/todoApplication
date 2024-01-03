import { Button } from "@nextui-org/react";
import { useTaskDispatchContext } from "../contexts/";
type Props = {
  id: string;
};

const Complete = ({ id }: Props) => {
  const dispatch = useTaskDispatchContext();
  return (
    <Button
      onPress={() => {
        dispatch({ type: "COMPLETE", payload: id });
      }}
      className="font-bold"
    >
      完了
    </Button>
  );
};

export default Complete;
