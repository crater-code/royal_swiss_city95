// Royal Swiss City luxury editorial experience
import { useLocation } from "wouter";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import Enquire from "./pages/Enquire";
import TheCity from "./pages/TheCity";
import FAQ from "./pages/FAQ";
import PaymentPlan from "./pages/PaymentPlan";
import Location from "./pages/Location";
import FloatingContacts from "./components/FloatingContacts";

export default function App() {
  const [location] = useLocation();

  // Normalize path to handle trailing slashes consistently (e.g. /payment-plan/ -> /payment-plan)
  const normalizedPath = (location.replace(/\/+$/, "") || "/").toLowerCase();

  let page;

  if (normalizedPath === "/developer") {
    page = <Developer />;
  } else if (normalizedPath === "/payment-plan") {
    page = <PaymentPlan />;
  } else if (normalizedPath === "/location") {
    page = <Location />;
  } else if (normalizedPath === "/the-city") {
    page = <TheCity />;
  } else if (normalizedPath === "/enquire") {
    page = <Enquire />;
  } else if (normalizedPath === "/faq") {
    page = <FAQ />;
  } else if (normalizedPath === "/projects") {
    page = <Developer />;
  } else {
    page = <Home />;
  }

  return (
    <>
      {page}
      <FloatingContacts />
    </>
  );
}
