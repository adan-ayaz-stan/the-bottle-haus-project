import { atom } from "recoil";

export const checkout = atom({
  key: "checkout-process-atom",
  default: {
    firstStepComplete: false,
    secondStepComplete: false,
  },
});
