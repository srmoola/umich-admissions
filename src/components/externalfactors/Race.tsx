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
  whyumich: {
    value: string;
    points: number;
  }[];
  handleumichcheck: Function;
  umichcheck: string;
};

const Race = ({ whyumich, handleumichcheck, umichcheck }: Props) => {
  return (
    <>
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
      <Typography>
        *Michigan has banned AA since 2006. However, UMich and other top schools
        do find ways around it, such as taking into account school, geographic
        area, etc.
      </Typography>
    </>
  );
};

export default Race;
