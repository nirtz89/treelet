import { Stack } from "@mui/material";
import TreeletItem from "../TreeletItem/TreeletItem";
import "./Treelet.scss";
import { TreeletProps } from "./Treelet.types";

const Treelet = ({ items }: TreeletProps) => {
  return (
    <Stack className="treelet" direction="column" justifyContent="flex-start">
      {items.map((item, index) => (
        <TreeletItem
          key={`name_${index}`}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          children={item.children}
          getItem={item.getItem}
          pl={2}
        />
      ))}
    </Stack>
  );
};

export default Treelet;
