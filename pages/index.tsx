import { Skeleton, Container, Grid } from "@mantine/core";
import NavBar from "../components/Navbar/NavBar";
import CreatePostModal from "../components/CreatePost/CreatePostModal";
import UserInfoCard from "../components/UserInfoCard/UserInfoCard";

const gridColStyles = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
};

export default function NewsFeed() {
  return (
    <Container size="xs" fluid>
      <Grid
        style={{
          marginTop: 15,
        }}
      >
        <Grid.Col style={gridColStyles} span={3.5}>
          <NavBar />
        </Grid.Col>
        <Grid.Col style={gridColStyles} span={5}>
          {" "}
          <CreatePostModal />
        </Grid.Col>
        <Grid.Col style={gridColStyles} span={3.5}>
          <UserInfoCard isCurrentUser={true} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
