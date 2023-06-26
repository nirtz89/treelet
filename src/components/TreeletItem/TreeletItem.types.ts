export interface TreeletItemData {
  title: string;
  subtitle: string;
  icon: string;
  getItem?: () => Promise<TreeletItemData[]>;
  children?: TreeletItemData[];
}

export interface TreeletItemProps extends TreeletItemData {
  title: string;
  subtitle: string;
  icon: string;
  pl?: number;
}
