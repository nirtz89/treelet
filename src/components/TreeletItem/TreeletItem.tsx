import {
  Box,
  ButtonBase,
  CircularProgress,
  Collapse,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TreeletItemData, TreeletItemProps } from "./TreeletItem.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./TreeletItem.scss";

const TreeletItem = ({
  title,
  subtitle,
  icon,
  children,
  getItem = undefined,
  pl = 0,
}: TreeletItemProps) => {
  const [isChildOpen, setIsChildOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newChildren, setNewChildren] = useState<TreeletItemData[]>(
    children as TreeletItemData[]
  );

  const handleClick = () => {
    if (isChildOpen) {
      setIsChildOpen(!isChildOpen);
      return;
    }
    if (children && !getItem) {
      setIsChildOpen(!isChildOpen);
    } else if (getItem) {
      setIsLoading(true);
      getItem().then((data) => {
        setIsLoading(false);
        setIsChildOpen(!isChildOpen);
        setNewChildren(data);
      });
    }
  };

  return (
    <Stack className="treelet-item" justifyContent="flex-start">
      <Stack onClick={() => handleClick()} justifyContent="flex-start">
        <ButtonBase
          className="treelet-item-ripple-wrapper"
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Stack
            pl={pl}
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
            width="100%"
          >
            <Stack
              width="100%"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <img src={icon} alt="icon" width={30} height={30} />
                <Stack>
                  <Typography display="block" textAlign="left">
                    {title}
                  </Typography>
                  <Typography variant="caption" color="gray" textAlign="left">
                    {subtitle}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                mr={1}
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap={1}
              >
                {isLoading && (
                  <CircularProgress size={16} sx={{ color: "blue" }} />
                )}
                {children || !!getItem ? (
                  isChildOpen ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                ) : null}
              </Stack>
            </Stack>
          </Stack>
        </ButtonBase>
      </Stack>
      <Collapse in={isChildOpen}>
        {newChildren?.map((child: TreeletItemProps, index: number) => (
          <TreeletItem
            key={index}
            title={child?.title}
            subtitle={child?.subtitle}
            icon={child?.icon}
            children={child?.children}
            getItem={child?.getItem}
            pl={pl + 2}
          />
        ))}
      </Collapse>
    </Stack>
  );
};

export default TreeletItem;
