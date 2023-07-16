import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./Academic";
import PaymentForm from "./NonAcademic";
import Review from "./External";
import { useAtom } from "jotai";
import {
  gpa,
  freshmangpa,
  sophomoregpa,
  juniorgpa,
  classrank,
  courserigor,
} from "../features/jotai";
import { useState } from "react";
import ConfirmCalc from "./ConfirmCalc";
import ShowResults from "./ShowResults";

const steps = ["Academic Factors", "Non-Academic Factors", "External Factors"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Form() {
  const [activeStep, setActiveStep] = useState(0);

  const [gpas] = useAtom(gpa);
  const [fresh] = useAtom(freshmangpa);
  const [soph] = useAtom(sophomoregpa);
  const [juni] = useAtom(juniorgpa);

  const [classr] = useAtom(classrank);
  const [crig] = useAtom(courserigor);

  const gpaData: number[] = [gpas, fresh, soph, juni, classr, crig];

  const handleNext = () => {
    let isFieldEmpty = false;

    gpaData.forEach((element) => {
      if (isNaN(element)) {
        isFieldEmpty = true;
        return;
      }
    });

    if (isFieldEmpty) {
      alert("One or more required fields are empty!");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Admissions Calculator
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <ConfirmCalc />
              <ShowResults />
              <Button
                sx={{ mt: 5, fontSize: "24px", height: "100px" }}
                fullWidth
                onClick={() => window.location.reload()}
              >
                Restart Calculator
              </Button>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
              >
                {activeStep === 2 ? (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleBack}
                    sx={{ mt: 3 }}
                  >
                    Back
                  </Button>
                ) : null}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Calculate" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
