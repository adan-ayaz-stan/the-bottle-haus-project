import { useRecoilValue } from "recoil";
import { checkout } from "../atoms/checkout-page";

import Navbar from "../components/IndexPageComponents/Navbar";
import Navbar2nd from "../components/IndexPageComponents/Navbar-2nd";
import FirstSection from "../components/CheckoutPageComponents/FirstSection";
import SecondSection from "../components/CheckoutPageComponents/SecondSection";
import CheckoutPhaseOne from "../components/CheckoutPageComponents/CheckoutPhaseOne";
import CheckoutPhaseTwo from "../components/CheckoutPageComponents/CheckoutPhaseTwo";

const Checkout = () => {
  const checkoutProcessValue = useRecoilValue(checkout);
  console.log("re-render");

  function ConditionalRendering(recoilStateValue) {
    console.log(recoilStateValue, "from recoil state function");

    if (recoilStateValue.recoilStateValue.secondStepComplete == true) {
      console.log("render phase two");
      return (
        <>
          <CheckoutPhaseTwo />
        </>
      );
    }
    if (recoilStateValue.recoilStateValue.firstStepComplete == true) {
      console.log("render phase one");
      return (
        <>
          <CheckoutPhaseOne />
        </>
      );
    }
    return (
      <>
        <FirstSection />
        <SecondSection />
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#fcf8fa" }}>
        <Navbar2nd />
      </div>
      <ConditionalRendering recoilStateValue={checkoutProcessValue} />
    </div>
  );
};

export default Checkout;
