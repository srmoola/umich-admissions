import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAtom } from "jotai";
import { useState } from "react";
import { points } from "../features/jotai";

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
  const [pointss, setPoints] = useAtom(points);
  const [checked, setChecked] = useState("");
  const [umichcheck, setumichcheck] = useState("");
  const [optional, setoptional] = useState("");
  const [lorcheck, setlorcheck] = useState("");
  const [ecs, setecs] = useState("");
  console.log(pointss);

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
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {character.map((option) => {
              const labelId = `checkbox-list-label-${option}`;

              return (
                <ListItem key={option.value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(option.value, option.points)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={option.value === checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={option.value + " Qualities"}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Grid sx={{ mt: 6 }} item xs={12}>
            <Typography variant="h6" gutterBottom>
              Why UMich Essay Rating, Best Guess
            </Typography>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {whyumich.map((option) => {
                const labelId = `checkbox-list-label-${option.value}`;
                return (
                  <ListItem key={option.value} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={handleumichcheck(option.value, option.points)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={option.value === umichcheck}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={option.value + " Qualities"}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Optional Essay
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {optionalessay.map((option) => {
              const labelId = `checkbox-list-label-${option.value}`;
              return (
                <ListItem key={option.value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={optionalessaycheck(option.value, option.points)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={option.value === optional}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={option.value + " Extenuating Circumstances"}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
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
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {lors.map((option) => {
              const labelId = `checkbox-list-label-${option.value}`;
              return (
                <ListItem key={option.value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handlelorcheck(option.value, option.points)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={option.value === lorcheck}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={option.value} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Extracurriculars
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {extrac.map((option) => {
              const labelId = `checkbox-list-label-${option.value}`;
              return (
                <ListItem key={option.value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleeccheck(option.value, option.points)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={option.value === ecs}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={option.value + " Involved"}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
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
