import { useRecoilValue } from "recoil";
import { checkout } from "../atoms/checkout-page";

import Navbar from "../components/IndexPageComponents/Navbar";
import Navbar2nd from "../components/IndexPageComponents/Navbar-2nd";
import FirstSection from "../components/CheckoutPageComponents/FirstSection";
import SecondSection from "../components/CheckoutPageComponents/SecondSection";
import CheckoutPhaseOne from "../components/CheckoutPageComponents/CheckoutPhaseOne";

const Checkout = () => {
  const checkoutProcessValue = useRecoilValue(checkout);
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#fcf8fa" }}>
        <Navbar2nd />
      </div>
      {checkoutProcessValue.firstStepComplete == false ? (
        <>
          <FirstSection />
          <SecondSection />
        </>
      ) : (
        <>
          <CheckoutPhaseOne />
        </>
      )}
    </div>
  );
};

export default Checkout;
