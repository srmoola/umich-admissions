import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useAtom } from "jotai";
import { useState } from "react";
import { points } from "../features/jotai";
import QualityEssays from "./nonacademicfactors/QualityEssays";
import WhyUmich from "./nonacademicfactors/WhyUmich";
import OptionalEssay from "./nonacademicfactors/OptionalEssay";
import Lors from "./nonacademicfactors/Lors";
import Ecs from "./nonacademicfactors/Ecs";

const character: { value: string; points: number }[] = [
  { value: "Very Strong", points: 40 },
  { value: "Strong", points: 30 },
  { value: "Average", points: 20 },
  { value: "Questionable", points: 10 },
  { value: "Disturbing", points: 0 },
];

const whyumich: { value: string; points: number }[] = [
  { value: "Convincing", points: 5 },
  { value: "Unconvincing", points: -5 },
];

const optionalessay: { value: string; points: number }[] = [
  { value: "Severe", points: 12 },
  { value: "Moderate", points: 5 },
  { value: "No", points: 0 },
];

const lors: { value: string; points: number }[] = [
  { value: "Strong", points: 6 },
  { value: "Moderate", points: 3 },
  { value: "Weak", points: 0 },
];

const extrac: { value: string; points: number }[] = [
  { value: "Very", points: 15 },
  { value: "Moderately", points: 6 },
  { value: "Not", points: 0 },
];

export default function PaymentForm() {
  const [, setPoints] = useAtom(points);
  const [checked, setChecked] = useState("");
  const [umichcheck, setumichcheck] = useState("");
  const [optional, setoptional] = useState("");
  const [lorcheck, setlorcheck] = useState("");
  const [ecs, setecs] = useState("");

  const handleToggle = (value: string, points: number) => () => {
    if (value === checked) {
      // If the same option is selected, do nothing
      return;
    }
    if (checked !== "") {
      const findPoints =
        character.find((option) => option.value === checked)?.points || 0;
      setPoints((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setChecked(value);
    setPoints((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const handleumichcheck = (value: string, points: number) => () => {
    if (value === umichcheck) {
      // If the same option is selected, do nothing
      return;
    }
    if (umichcheck !== "") {
      const findPoints =
        whyumich.find((option) => option.value === umichcheck)?.points || 0;
      setPoints((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setumichcheck(value);
    setPoints((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const optionalessaycheck = (value: string, points: number) => () => {
    if (value === optional) {
      // If the same option is selected, do nothing
      return;
    }
    if (optional !== "") {
      const findPoints =
        optionalessay.find((option) => option.value === optional)?.points || 0;
      setPoints((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setoptional(value);
    setPoints((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const handlelorcheck = (value: string, points: number) => () => {
    if (value === lorcheck) {
      // If the same option is selected, do nothing
      return;
    }
    if (lorcheck !== "") {
      const findPoints =
        lors.find((option) => option.value === lorcheck)?.points || 0;
      setPoints((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setlorcheck(value);
    setPoints((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const handleeccheck = (value: string, points: number) => () => {
    if (value === ecs) {
      // If the same option is selected, do nothing
      return;
    }
    if (ecs !== "") {
      const findPoints =
        extrac.find((option) => option.value === ecs)?.points || 0;
      setPoints((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setecs(value);
    setPoints((prevPoints) => prevPoints + points); // Add points for new selection
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Non-Academic Factors
      </Typography>
      <Grid container spacing={3}>
        <Grid sx={{ mt: 6 }} item xs={12}>
          <Typography variant="h6" gutterBottom>
            Quality of character based on Essays, Best Guess
          </Typography>
          <QualityEssays
            handleToggle={handleToggle}
            checked={checked}
            character={character}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid sx={{ mt: 6 }} item xs={12}>
            <Typography variant="h6" gutterBottom>
              Why UMich Essay Rating, Best Guess
            </Typography>
            <WhyUmich
              handleumichcheck={handleumichcheck}
              umichcheck={umichcheck}
              whyumich={whyumich}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Optional Essay
          </Typography>
          <OptionalEssay
            optional={optional}
            optionalessay={optionalessay}
            optionalessaycheck={optionalessaycheck}
          />
          <Typography>
            Severe Examples: Cancer, Sexual Abuse, Homelessness, etc
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Moderate Examples: Severe Depression, Domestic Abuse, Family
            Unemployment, Loss of Loved One, Immigration, Covid
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Letters of Recommendation
          </Typography>
          <Lors
            lorcheck={lorcheck}
            lors={lors}
            handlelorcheck={handlelorcheck}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Extracurriculars
          </Typography>
          <Ecs handleeccheck={handleeccheck} extrac={extrac} ecs={ecs} />
          <Typography>
            Very Involved: Multiple Leadership Roles, National Awards, Carnegie
            Hall, Very Strong Extracurriculars, etc
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Moderately Involved: NHS, HOSA, DECA, MUN, Varsity Sports
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
