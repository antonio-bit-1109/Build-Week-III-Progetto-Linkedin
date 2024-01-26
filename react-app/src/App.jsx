import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Messaggistica from "./components/General/Messaggistica";
import MyNavigationBar from "./components/General/MyNavigationBar";
import Footer from "./components/General/Footer";
import Me from "./components/Profile/Me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import Home from "./components/Home/Home";
import Lavoro from "./components/Job/Lavoro";

function App() {
    return (
        <BrowserRouter>
            <MyNavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/me" element={<Me />} />
                <Route path="/:userId" element={<ProfilePage />} />
                <Route path="/job" element={<Lavoro />} />
            </Routes>
            <Messaggistica />
            <Footer />
            {/* PROVA DELLA FETCH  */}
        </BrowserRouter>
    );
}

export default App;
