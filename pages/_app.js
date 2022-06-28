import Footer from "../components/IndexPageComponents/Footer";
import Navbar from "../components/IndexPageComponents/Navbar";
import Navbar2nd from "../components/IndexPageComponents/Navbar-2nd";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Navbar2nd />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
