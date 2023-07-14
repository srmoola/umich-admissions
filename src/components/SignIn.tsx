import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import CalculateIcon from "@mui/icons-material/Calculate";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleButton from "react-google-button";
import { Button, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { signInGuest, signInWithGoogle } from "../features/signin";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="#FFCB05" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="#">
        UmichAdmissionsCalculator
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, backgroundColor: "#FFCB05", width: 70, height: 70 }}
        >
          <CalculateIcon sx={{ width: 54, height: 54, color: "#00274C" }} />
        </Avatar>
        <Typography sx={{ color: "#FFCB05" }} component="h1" variant="h5">
          Umich Admissions Calculator
        </Typography>
        <GoogleButton
          onClick={() => signInWithGoogle()}
          style={{ marginTop: "20px" }}
          label="Continue with Google"
        />
        <Divider
          sx={{
            mt: 3,
            width: "100%",
            color: "#FFCB05",
            "&::before, &::after": {
              borderColor: "#FFCB05",
            },
          }}
        >
          <Typography>Or</Typography>
        </Divider>
        <Button
          sx={{
            mt: 3,
            color: "#FFCB05",
            borderColor: "#FFCB05",
            width: 245,
            height: 50,
          }}
          variant="outlined"
          startIcon={<PersonIcon />}
          onClick={signInGuest}
        >
          Continue as Guest
        </Button>
      </Box>
      <Copyright sx={{ mt: 6, mb: 4 }} />
    </Container>
  );
}
