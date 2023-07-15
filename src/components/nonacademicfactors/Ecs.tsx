import {
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
  handleeccheck: Function;
  ecs: string;
};

const Ecs = ({ extrac, handleeccheck, ecs }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Ecs;
