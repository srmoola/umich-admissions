import { Container } from "@mui/material";
import Form from "./Form";

const MainScreen = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#00274c",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
      maxWidth="xl"
    >
      <Form />
    </Container>
  );
};

export default MainScreen;
