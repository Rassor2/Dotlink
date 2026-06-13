import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Legal from "@/pages/Legal";
import Refund from "@/pages/Refund";
import Support from "@/pages/Support";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
    return (
        <div className="App cosmic-bg relative">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/confidentialite" element={<Privacy />} />
                    <Route path="/cgu" element={<Terms />} />
                    <Route path="/mentions-legales" element={<Legal />} />
                    <Route path="/remboursement" element={<Refund />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
