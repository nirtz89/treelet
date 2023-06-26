import { Stack, styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { ETreeletType } from "../../App.types";
import { TreeletPickerProps } from "./TreeletPickerProps.types";

const TreeletPicker = ({ onItemSelect }: TreeletPickerProps) => {
  const [treeletType, setTreeletType] = useState<ETreeletType>(
    ETreeletType.USERS
  );

  const handleTreeletTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTreeletType: ETreeletType
  ) => {
    setTreeletType(newTreeletType);
    onItemSelect(newTreeletType);
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
    ({ theme }: any) => ({
      "& .MuiToggleButtonGroup-grouped": {
        margin: theme.spacing(0.5),
        border: 0,
        fontSize: "0.75rem",
        "&.Mui-disabled": {
          border: 0,
          color: "white",
        },
        "&.Mui-selected": {
          backgroundColor: "rgba(0, 0, 0, 0.30)",
        },
        "&:not(:first-of-type)": {
          color: "white",
        },
        "&:first-of-type": {
          color: "white",
        },
      },
    })
  );

  return (
    <Stack width="400px" mt={2} justifyContent="center" direction="row">
      <StyledToggleButtonGroup
        value={treeletType}
        exclusive
        onChange={handleTreeletTypeChange}
        aria-label="treelet type"
      >
        <ToggleButton
          value={ETreeletType.USERS}
          aria-label={ETreeletType.USERS.toLowerCase()}
          sx={{
            color: "white",
          }}
        >
          Users Demo
        </ToggleButton>
        <ToggleButton
          value={ETreeletType.FILES}
          aria-label={ETreeletType.FILES.toLowerCase()}
          sx={{
            color: "white",
          }}
        >
          Files Demo
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Stack>
  );
};

export default TreeletPicker;
