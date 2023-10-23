import { Text, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

export default function CreatePostModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Create Post">
        <Paper shadow="xs" p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
      </Modal>

      <Button
        style={{
          width: "100%",
          padding: 5,
          marginTop: 5
        }}
        onClick={open}
      >
        What u have in mind?
      </Button>
    </>
  );
}
