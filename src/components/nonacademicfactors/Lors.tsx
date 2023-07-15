import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";

type Props = {
  lors: {
    value: string;
    points: number;
  }[];
  handlelorcheck: Function;
  lorcheck: string;
};

const Lors = ({ lorcheck, lors, handlelorcheck }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Lors;
