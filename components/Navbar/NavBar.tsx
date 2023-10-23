import { Group, Code, ScrollArea, NavLink, Text, Title } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconLock,
  IconHome2,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { useState } from "react";

const navBarContents = [
  { label: "NewsFeed", icon: <IconHome2 size="1rem" stroke={1.5} /> },
  {
    label: "Market news",
    icon: <IconNotes size="1rem" stroke={1.5} />,
  },
  {
    label: "Releases",
    icon: <IconCalendarStats size="1rem" stroke={1.5} />,
  },
  { label: "Analytics", icon: <IconGauge size="1rem" stroke={1.5} /> },
  { label: "Contracts", icon: <IconLock size="1rem" stroke={1.5} /> },
  { label: "Settings", icon: <IconHome2 size="1rem" stroke={1.5} /> },
  {
    label: "Security",
    icon: <IconPresentationAnalytics size="1rem" stroke={1.5} />,
  },
];

export default function NavbarNested() {
  const links = navBarContents.map((item) => (
    <Text size="xl" key={item.label}>
      {item.label}
    </Text>
  ));
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Title order={2}>POSTAGRAM</Title>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        {navBarContents.map((content, idx) => (
          <NavLink
            onClick={() => setActiveLink(idx)}
            active={idx === activeLink}
            key={idx}
            label={
              <Text size="xl" key={content.label}>
                {content.label}
              </Text>
            }
            leftSection={content.icon}
          />
        ))}
      </ScrollArea>

      <div className={classes.footer}>User Button</div>
    </nav>
  );
}
