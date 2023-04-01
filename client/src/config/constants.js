import { fileIcon, ai, download } from "../assets";

export const EditorTabs = [
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
  {
    name: "aipicker",
    icon: download,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: download,
  },
  {
    name: "stylishShirt",
    icon: download,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
