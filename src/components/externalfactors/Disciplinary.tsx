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
  actions: {
    value: string;
    points: number;
  }[];
  handledisipline: Function;
  disipline: string[];
};

const Disciplinary = ({ actions, handledisipline, disipline }: Props) => {
  return (
    <>
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
                    checked={disipline.includes(option.value)}
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
    </>
  );
};

export default Disciplinary;
