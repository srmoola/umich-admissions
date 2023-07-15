import {
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

const WhyUmich = ({ whyumich, handleumichcheck, umichcheck }: Props) => {
  return (
    <>
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
    </>
  );
};

export default WhyUmich;
