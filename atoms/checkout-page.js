import { atom } from "recoil";

// ATOM RESPO. FOR RENDERING DIFFERENT STEPS
export const checkout = atom({
  key: "checkout-process-atom",
  default: {
    firstStepComplete: false,
    secondStepComplete: false,
    thirdStepComplete: false,
  },
});

// ATOM FOR THE SECOND SECTION COMPONENT
export const checkoutSpecifics = atom({
  key: "checkout-specifics",
  default: {
    totalProductBilling: 0,
    protectionBilling: 0,
  },
});

// ATOM FOR THE CHECKOUT PHASE 1
export const checkoutCustomerDetails = atom({
  key: "checkout-customer-details",
  default: {
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    phone: "",
  },
});

// ATOM FOR THE CHECKOUT PHASE 2
export const checkoutDeliveryBilling = atom({
  key: "checkout-delivery-billing",
  default: 0,
});
