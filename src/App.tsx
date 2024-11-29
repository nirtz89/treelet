import "./App.scss";
import Treelet from "./components/Treelet/Treelet";
import { TreeletItemData } from "./components/TreeletItem/TreeletItem.types";
import {
  generateRandomFileAndIcon,
  generateRandomIcon,
  generateRandomJobTitle,
  generateRandomName,
  getFakeDataInRandomDelay,
  getFakeFilesInRandomDelay,
} from "./utils/treeUtil";
import Logo from "./components/Logo/Logo";
import TreeletPicker from "./components/TreeletPicker/TreeletPicker";
import { useState } from "react";
import { ETreeletType } from "./App.types";

const items: TreeletItemData[] = [
  {
    title: generateRandomName(),
    subtitle: generateRandomJobTitle(),
    icon: generateRandomIcon(),
    children: [
      {
        title: generateRandomName(),
        subtitle: generateRandomJobTitle(),
        icon: generateRandomIcon(),
        getItem: getFakeDataInRandomDelay,
        children: [
          {
            title: generateRandomName(),
            subtitle: generateRandomJobTitle(),
            icon: generateRandomIcon(),
          },
          {
            title: generateRandomName(),
            subtitle: generateRandomJobTitle(),
            icon: generateRandomIcon(),
            children: [
              {
                title: generateRandomName(),
                subtitle: generateRandomJobTitle(),
                icon: generateRandomIcon(),
              },
              {
                title: generateRandomName(),
                subtitle: generateRandomJobTitle(),
                icon: generateRandomIcon(),
              },
            ],
          },
        ],
      },
      {
        title: generateRandomName(),
        subtitle: generateRandomJobTitle(),
        icon: generateRandomIcon(),
        children: [
          {
            title: generateRandomName(),
            subtitle: generateRandomJobTitle(),
            icon: generateRandomIcon(),
          },
          {
            title: generateRandomName(),
            subtitle: generateRandomJobTitle(),
            icon: generateRandomIcon(),
          },
        ],
      },
    ],
  },
];

const files: TreeletItemData[] = [
  {
    title: "System folder",
    subtitle: "Very secret",
    icon: "https://cdn-icons-png.flaticon.com/512/716/716784.png",
    children: [
      generateRandomFileAndIcon(),
      generateRandomFileAndIcon(),
      {
        title: "System Inner folder",
        subtitle: "Even more secret",
        icon: "https://cdn-icons-png.flaticon.com/512/716/716784.png",
        getItem: getFakeFilesInRandomDelay,
      },
    ],
  },
  {
    title: "Nir Tzezana's folder",
    subtitle: "Not that secret",
    icon: "https://cdn-icons-png.flaticon.com/512/716/716784.png",
    getItem: getFakeFilesInRandomDelay,
  },
];

function App() {
  const [selectedTreelet, setSelectedTreelet] = useState(ETreeletType.USERS);

  function onTreeletSelect(treelet: ETreeletType) {
    setSelectedTreelet(treelet);
  }

  return (
    <div className={`App treelet-${selectedTreelet}`}>
      <Logo />
      {selectedTreelet === ETreeletType.USERS && <Treelet items={items} />}
      {selectedTreelet === ETreeletType.FILES && <Treelet items={files} />}
      <TreeletPicker onItemSelect={onTreeletSelect} />
    </div>
  );
}

export default App;
