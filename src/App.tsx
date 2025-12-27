
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import CodingClub from "./pages/CodingClub";
import RoboticsClub from "./pages/RoboticsClub";
import ArtClub from "./pages/ArtClub";
import Activities from "./pages/Activities";
import Workshops from "./pages/Workshops";
import Trainings from "./pages/Trainings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/clubs/coding" element={<CodingClub />} />
              <Route path="/clubs/robotics" element={<RoboticsClub />} />
              <Route path="/clubs/art" element={<ArtClub />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
