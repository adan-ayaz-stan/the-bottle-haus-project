import { atom } from "recoil";

const dummyData = [
  {
    repName: "Hendrick's",
    codeName: "hendricks",
  },
  {
    repName: "Smirnoff",
    codeName: "smirnoff",
  },
  {
    repName: "Captain Morgan",
    codeName: "captainmorgan",
  },
  {
    repName: "Jack Daniel's",
    codeName: "jackdaniels",
  },
  {
    repName: "Bacardi",
    codeName: "bacardi",
  },
  {
    repName: "Fireball",
    codeName: "fireball",
  },
];

export const dropdownOpen = atom({
  key: "shop-dropdown-atom",
  default: {
    priceFilter: false,
    brandFilter: false,
    sortbyFilter: false,
  },
});

export const priceFilterAtom = atom({
  key: "price-filter-atom",
  default: {
    min: 10,
    max: 200,
  },
});

const brandsArrayDefault = dummyData.map((ele) => ele.codeName);
export const brandFilterAtom = atom({
  key: "brand-filter-atom",
  default: brandsArrayDefault,
});

export const sortByFilterAtom = atom({
  key: "sort-by-filter-atom",
  default: "asc", // other option being 'desc'
});

export const categoryFilterAtom = atom({
  key: "category-filter-atom",
  default: "",
});
