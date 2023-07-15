import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useAtom } from "jotai";
import { points } from "../features/jotai";
import Race from "./externalfactors/Race";
import School from "./externalfactors/School";
import Gender from "./externalfactors/Gender";
import Residency from "./externalfactors/Residency";
import Hooks from "./externalfactors/Hooks";
import Disciplinary from "./externalfactors/Disciplinary";

const character: { value: string; points: number }[] = [
  { value: "Disadvantaged", points: 16 },
  { value: "In State Feeder", points: 6 },
  { value: "Out of State feeder", points: 3 },
];

const whyumich: { value: string; points: number }[] = [
  { value: "Afican American", points: 9 },
  { value: "Hispanic", points: 6 },
  { value: "Native American", points: 4 },
  { value: "Middle Eastern", points: 4 },
  { value: "White", points: 0 },
  { value: "Asian", points: -7 },
];

const optionalessay: { value: string; points: number }[] = [
  { value: "Male", points: -3 },
  { value: "Female", points: 3 },
  { value: "Other", points: 5 },
];

const lors: { value: string; points: number }[] = [
  { value: "In State", points: 10 },
  { value: "Out of State", points: -12 },
  { value: "International", points: -18 },
];

const extrac: { value: string; points: number }[] = [
  { value: "LGBTQ", points: 3 },
  { value: "Legacy", points: 5 },
  { value: "Recruited Athlete", points: 5 },
  { value: "National Merit", points: 8 },
  { value: "In-State Low Income", points: 10 },
  { value: "Celebrity", points: 50 },
];

const actions: { value: string; points: number }[] = [
  { value: "Expulsion", points: -40 },
  { value: "Suspension", points: -30 },
  { value: "Academic Dishonesty", points: -10 },
  { value: "Felonies or Violent Crimes", points: -80 },
];

export default function Review() {
  const [checked, setChecked] = useState("");
  const [umichcheck, setumichcheck] = useState("");
  const [optional, setoptional] = useState("");
  const [lorcheck, setlorcheck] = useState("");
  const [hooks, setHooks] = useState<string[]>([]);
  const [disipline, setDisipline] = useState<string[]>([]);

  const [pointsValue, setPointsValue] = useAtom(points);
  console.log(pointsValue);

  const handleToggle = (value: string, points: number) => () => {
    if (value === checked) {
      // If the same option is selected, do nothing
      return;
    }
    if (checked !== "") {
      const findPoints =
        character.find((option) => option.value === checked)?.points || 0;
      setPointsValue((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setChecked(value);
    setPointsValue((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const handleumichcheck = (value: string, points: number) => () => {
    if (value === umichcheck) {
      return;
    }
    if (umichcheck !== "") {
      const findPoints =
        whyumich.find((option) => option.value === umichcheck)?.points || 0;
      setPointsValue((prevPoints) => prevPoints - findPoints);
    }
    setumichcheck(value);
    setPointsValue((prevPoints) => prevPoints + points);
  };

  const optionalessaycheck = (value: string, points: number) => () => {
    if (value === optional) {
      return;
    }
    if (optional !== "") {
      const findPoints =
        optionalessay.find((option) => option.value === optional)?.points || 0;
      setPointsValue((prevPoints) => prevPoints - findPoints);
    }
    setoptional(value);
    setPointsValue((prevPoints) => prevPoints + points);
  };

  const handlelorcheck = (value: string, points: number) => () => {
    if (value === lorcheck) {
      return;
    }
    if (lorcheck !== "") {
      const findPoints =
        lors.find((option) => option.value === lorcheck)?.points || 0;
      setPointsValue((prevPoints) => prevPoints - findPoints);
    }
    setlorcheck(value);
    setPointsValue((prevPoints) => prevPoints + points);
  };

  const handleHooks = (value: string, points: number) => () => {
    const newHooks = hooks.includes(value)
      ? hooks.filter((hook) => hook !== value)
      : [...hooks, value];
    setHooks(newHooks);
    updatePoints(points, hooks.includes(value));
  };

  const handledisipline = (value: string, points: number) => () => {
    const newDisipline = disipline.includes(value)
      ? disipline.filter((d) => d !== value)
      : [...disipline, value];
    setDisipline(newDisipline);
    updatePoints(points, disipline.includes(value));
  };

  const updatePoints = (points: number, isDeselected: boolean) => {
    setPointsValue(
      (prevPoints) => prevPoints + (isDeselected ? -points : points)
    );
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        External
      </Typography>
      <Grid container spacing={3}>
        <Grid sx={{ mt: 6 }} item xs={12}>
          <School
            handleToggle={handleToggle}
            checked={checked}
            character={character}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid sx={{ mt: 6 }} item xs={12}>
            <Race
              handleumichcheck={handleumichcheck}
              umichcheck={umichcheck}
              whyumich={whyumich}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Gender
            optional={optional}
            optionalessay={optionalessay}
            optionalessaycheck={optionalessaycheck}
          />
        </Grid>
        <Grid item xs={12}>
          <Residency
            lorcheck={lorcheck}
            lors={lors}
            handlelorcheck={handlelorcheck}
          />
        </Grid>
        <Grid item xs={12}>
          <Hooks handleHooks={handleHooks} hooks={hooks} extrac={extrac} />
        </Grid>
        <Grid item xs={12}>
          <Disciplinary
            handledisipline={handledisipline}
            actions={actions}
            disipline={disipline}
          />
        </Grid>
      </Grid>
    </>
  );
}
