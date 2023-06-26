import { ETreeletType } from "../../App.types";

export interface TreeletPickerProps {
  onItemSelect: (selectedItem: ETreeletType) => void;
}
