import { atom } from "recoil";

export const dropdownOpen = atom({
    key: 'shop-dropdown-atom',
    default: {
        priceFilter: false,
        brandFilter: false,
        sortbyFilter: false,
    }
})