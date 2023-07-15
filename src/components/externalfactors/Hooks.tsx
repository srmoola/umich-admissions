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
  extrac: {
    value: string;
    points: number;
  }[];
  handleHooks: Function;
  hooks: string[];
};

const Hooks = ({ extrac, handleHooks, hooks }: Props) => {
  return (
    <>
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
                    checked={hooks.includes(option.value)}
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

export default Hooks;
