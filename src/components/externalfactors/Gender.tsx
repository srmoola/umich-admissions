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
  optionalessay: {
    value: string;
    points: number;
  }[];
  optionalessaycheck: Function;
  optional: string;
};

const Gender = ({ optional, optionalessay, optionalessaycheck }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Gender;
