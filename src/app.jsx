import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header/header.jsx";
import Home from "./Home/home.jsx";
import Schedule from "./Schedule/schedule.jsx";
import Gallery from "./Gallery/gallery.jsx";
import Roster from "./Roster/roster.jsx";
import Staff from "./Staff/staff.jsx";
import Downloads from "./DownloadsSection/downloads.jsx";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/oskyboys" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </>
  );
}
