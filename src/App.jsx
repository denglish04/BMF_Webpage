/* App */



import { BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/global.css';
import Home from './pages/Home';
import About from './pages/About';
import Pillars from './pages/Pillars';
import Eboard from './pages/Eboard';
import Events from './pages/Events';
import History from './pages/History';

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route index element = {<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/pillars" element={<Pillars />} />
        <Route path="/eboard" element={<Eboard />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </BrowserRouter>
  )
}

