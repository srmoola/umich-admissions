import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";

type Props = {
  character: {
    value: string;
    points: number;
  }[];
  handleToggle: Function;
  checked: string;
};

const School = ({ character, handleToggle, checked }: Props) => {
  return (
    <>
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
    </>
  );
};

export default School;
