import { Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Middle from "./components/middle/Middle";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import CreateTrip from "./pages/createtrip/CreateTrip";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ViewTrip from "./pages/viewtrip/[tripId]";
import SavedTrips from "./pages/savedTrips/SavedTrips";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/createtrip" element={<CreateTrip />} />
        <Route path="/features" element={<Middle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewtrip/:tripId" element={<ViewTrip />} />
        <Route path="/savedtrips" element={<SavedTrips />} />
      </Routes>
    </>
  );
}

export default App;
