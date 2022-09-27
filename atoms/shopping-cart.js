import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const shoppingCart = atom({
  key: "user-shopping-cart",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
