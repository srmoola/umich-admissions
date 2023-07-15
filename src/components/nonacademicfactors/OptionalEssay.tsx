import {
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

const OptionalEssay = ({
  optional,
  optionalessay,
  optionalessaycheck,
}: Props) => {
  return (
    <>
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
    </>
  );
};

export default OptionalEssay;
