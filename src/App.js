import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Crew from "./Components/Crew";
import Destination from "./Components/Destination";
import Technology from "./Components/Technology";
import Navbar from "./Components/Navbar"
function App() {
  return (
    <main id='homescreen' className=" def h-screen overflow-y-scroll fixed w-full bag-mob sm:bag-tab  md:bag-desk  ">
     <Router>
     <Navbar />
     <Routes >
     <Route exact path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Destination />} ></Route>
        <Route path="/technology" element={<Technology />} ></Route>
        <Route path="/crew" element={<Crew />} ></Route>
     </Routes>
     </Router>
    </main>
  )
}
export default App;