import { TreeletItemData } from "../components/TreeletItem/TreeletItem.types";

export const generateRandomIcon = () => {
  const iconsList = [
    "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140038.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140039.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140040.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140041.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140042.png",
  ];

  return iconsList[Math.floor(Math.random() * iconsList.length)];
};

export const generateRandomName = () => {
  const firstName = ["John", "Jane", "Bob", "Alice", "Mary"];

  const lastName = ["Smith", "Johnson", "Williams", "Jones", "Brown"];

  return `${firstName[Math.floor(Math.random() * firstName.length)]} ${
    lastName[Math.floor(Math.random() * lastName.length)]
  }`;
};

// write a generate random job title function
export const generateRandomJobTitle = () => {
  const jobs = [
    "Accountant",
    "Actor",
    "Actuary",
    "Acupuncturist",
    "Adjuster",
    "Administrative Assistant",
    "Administrative Services Manager",
    "Adult Literacy and GED Teacher",
    "Advertising Manager",
  ];

  return jobs[Math.floor(Math.random() * jobs.length)];
};

export const getFakeDataInRandomDelay = async (): Promise<
  TreeletItemData[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: generateRandomName(),
          subtitle: generateRandomJobTitle(),
          icon: generateRandomIcon(),
        },
      ]);
    }, Math.random() * 2500);
  });
};

export const generateRandomFileAndIcon = () => {
  const fileNames = ["Report", "Presentation", "Document", "Spreadsheet"];

  const extensions = [".docx", ".pptx", ".xlsx", ".pdf", ".raw"];
  const extensionsIcons = [
    "https://cdn-icons-png.flaticon.com/512/337/337932.png",
    "https://cdn-icons-png.flaticon.com/512/337/337949.png",
    "https://cdn-icons-png.flaticon.com/512/337/337958.png",
    "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    "https://cdn-icons-png.flaticon.com/512/337/337952.png",
  ];

  const randomFileName =
    fileNames[Math.floor(Math.random() * fileNames.length)];
  const randomExtension =
    extensions[Math.floor(Math.random() * extensions.length)];

  return {
    title: `${randomFileName}_${Math.floor(
      Math.random() * 1000
    )}${randomExtension}`,
    subtitle: generateRandomFileSize(),
    icon: extensionsIcons[extensions.indexOf(randomExtension)],
  };
};

export const generateRandomFileSize = () => {
  const sizes = ["KB", "MB", "GB", "TB"];

  return `${Math.floor(Math.random() * 1000)} ${
    sizes[Math.floor(Math.random() * sizes.length)]
  }`;
};

export const getFakeFilesInRandomDelay = async (): Promise<
  TreeletItemData[]
> => {
  const numberOfFiles = Math.floor(Math.random() * 5) + 1;
  const arrayOfFiles: TreeletItemData[] = [];
  for (let i = 0; i < numberOfFiles; i++) {
    arrayOfFiles.push(generateRandomFileAndIcon());
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayOfFiles);
    }, Math.random() * 1000);
  });
};
