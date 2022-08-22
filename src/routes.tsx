import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import {
  AboutUs,
  Contact,
  Home,
  NotFound,
  Presale,
  Team,
  Whitepaper,
} from "./pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="whitepaper" element={<Whitepaper />} />
        <Route path="presale" element={<Presale />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
