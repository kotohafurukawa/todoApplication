import { useState, useMemo } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
} from "@nextui-org/react";
import AddTask from "./AddTask";

const TaskModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState("");

  const isInvalid = useMemo(() => {
    if (value === "") return true;
  }, [value]);

  return (
    <form>
      <Button onPress={onOpen} isIconOnly color="primary" radius="full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => {
          setValue("");
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                新規登録
              </ModalHeader>
              <ModalBody>
                <Input
                  value={value}
                  type="text"
                  label="newTask"
                  color={isInvalid ? "danger" : "success"}
                  errorMessage={isInvalid && "タスクを入力してください。"}
                  isInvalid={isInvalid}
                  onValueChange={setValue}
                />
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Close</Button>
                <AddTask value={value} setValue={setValue} onClose={onClose} />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
};

export default TaskModal;
