import {
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

const QualityEssays = ({ character, handleToggle, checked }: Props) => {
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {character.map((option) => {
          const labelId = `checkbox-list-label-${option}`;

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

export default QualityEssays;
