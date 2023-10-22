import { Card, Avatar, Text, Group, Button, Indicator } from "@mantine/core";
import classes from "./UserInfoCard.module.css";
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];

export default function UserCardImage({
  isCurrentUser,
}: {
  isCurrentUser: boolean;
}) {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
        }}
      />

      <Avatar
        src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />

      <Text ta="center" fz="lg" fw={500} mt="sm">
        Bill Headbanger{" "}
        <IconCircleCheckFilled
          size={15}
          strokeWidth={1.25}
          style={{
            color: "rgb(25, 113, 194)",
          }}
        />
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Fullstack engineer
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      {isCurrentUser ? null : (
        <Button fullWidth radius="md" mt="xl" size="md" variant="default">
          Follow
        </Button>
      )}
    </Card>
  );
}
