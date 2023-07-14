import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useAtom } from "jotai";
import { points } from "../features/jotai";

const character: { value: string; points: number }[] = [
  { value: "Disadvantaged", points: 10 },
  { value: "In State Feeder", points: 20 },
  { value: "Out of State feeder", points: 30 },
];

const whyumich: { value: string; points: number }[] = [
  { value: "Afican American", points: 5 },
  { value: "Hispanic", points: 5 },
  { value: "Native American", points: 5 },
  { value: "Middle Eastern", points: 5 },
  { value: "White", points: 5 },
  { value: "Asian", points: 5 },
];

const optionalessay: { value: string; points: number }[] = [
  { value: "Male", points: 5 },
  { value: "Female", points: 5 },
  { value: "Other", points: 5 },
];

const lors: { value: string; points: number }[] = [
  { value: "In State", points: 5 },
  { value: "Out of State", points: 5 },
];

const extrac: { value: string; points: number }[] = [
  { value: "LGBTQ", points: 5 },
  { value: "Legacy", points: 5 },
  { value: "National Merit", points: 5 },
  { value: "In-State Low Income", points: 5 },
  { value: "Celebrity", points: 5 },
];

const actions: { value: string; points: number }[] = [
  { value: "Expulsion", points: -5 },
  { value: "Suspension", points: -5 },
  { value: "Academic Dishonesty", points: -5 },
  { value: "Felonies or Violent Crimes", points: -5 },
];

export default function Review() {
  const [checked, setChecked] = useState("");
  const [umichcheck, setumichcheck] = useState("");
  const [optional, setoptional] = useState("");
  const [lorcheck, setlorcheck] = useState("");
  const [hooks, setHooks] = useState<string[]>([]);
  const [disipline, setDisipline] = useState<string[]>([]);
  const [pointsValue, setPointsValue] = useAtom(points);

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
      // If the same option is selected, do nothing
      return;
    }
    if (umichcheck !== "") {
      const findPoints =
        whyumich.find((option) => option.value === umichcheck)?.points || 0;
      setPointsValue((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setumichcheck(value);
    setPointsValue((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const optionalessaycheck = (value: string, points: number) => () => {
    if (value === optional) {
      // If the same option is selected, do nothing
      return;
    }
    if (optional !== "") {
      const findPoints =
        optionalessay.find((option) => option.value === optional)?.points || 0;
      setPointsValue((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setoptional(value);
    setPointsValue((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const handlelorcheck = (value: string, points: number) => () => {
    if (value === lorcheck) {
      // If the same option is selected, do nothing
      return;
    }
    if (lorcheck !== "") {
      const findPoints =
        lors.find((option) => option.value === lorcheck)?.points || 0;
      setPointsValue((prevPoints) => prevPoints - findPoints); // Subtract points for previous selection
    }
    setlorcheck(value);
    setPointsValue((prevPoints) => prevPoints + points); // Add points for new selection
  };

  const handleHooks = (value: string, points: number) => () => {
    const currentIndex = hooks.indexOf(value);
    const newHooks = [...hooks];

    if (currentIndex === -1) {
      newHooks.push(value);
      setPointsValue((prevPoints) => prevPoints + points); // Add points for new selection
    } else {
      newHooks.splice(currentIndex, 1);
      setPointsValue((prevPoints) => prevPoints - points); // Subtract points for deselection
    }

    setHooks(newHooks);
  };

  const handledisipline = (value: string, points: number) => () => {
    const currentIndex = disipline.indexOf(value);
    const newDisipline = [...disipline];

    if (currentIndex === -1) {
      newDisipline.push(value);
      setPointsValue((prevPoints) => prevPoints + points); // Add points for new selection
    } else {
      newDisipline.splice(currentIndex, 1);
      setPointsValue((prevPoints) => prevPoints - points); // Subtract points for deselection
    }

    setDisipline(newDisipline);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        External
      </Typography>
      <Grid container spacing={3}>
        <Grid sx={{ mt: 6 }} item xs={12}>
          <Typography variant="h6" gutterBottom>
            School
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {character.map((option) => {
              const labelId = `checkbox-list-label-${option.value}`;

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
                    <ListItemText id={labelId} primary={option.value} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Typography>
            Disadvantaged: Kelloggsville, Monroe HS, Battle Creek HS, etc
          </Typography>
          <Typography sx={{ mt: 2 }}>
            In-State Feeders: AA Pioneer, Cranbrook, Forest Hills, IA, etc
          </Typography>
          <Typography sx={{ mt: 2 }}>
            OOS Feeders: Harvard-Westlake, Bronx HS of Science, etc
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid sx={{ mt: 6 }} item xs={12}>
            <Typography variant="h6" gutterBottom>
              Race
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
                      <ListItemText id={labelId} primary={option.value} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Typography>
            *Michigan has banned AA since 2006. However, UMich and other top
            schools do find ways around it, such as taking into account school,
            geographic area, etc.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Gender
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
                    <ListItemText id={labelId} primary={option.value} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Residency
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
            Hooks
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {extrac.map((option) => {
              const labelId = `checkbox-list-label-${option.value}`;
              return (
                <ListItem key={option.value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleHooks(option.value, option.points)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={option.value === hookscheck}
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
            Disciplinary Actions
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {actions.map((option) => {
              const labelId = `checkbox-list-label-${option.value}`;
              return (
                <ListItem key={option.value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handledisipline(option.value, option.points)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={option.value === disiplinecheck}
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
      </Grid>
    </>
  );
}
