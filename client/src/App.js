import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp"
import Workout from "./pages/Workout"
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import './index.css'



function App() {
  return (
    <div >

     <BrowserRouter>
     <Routes>

      <Route index element = {<Home/>}/>
      <Route path="/home" element = {<Home/>} />
      <Route path="/login" element = {<LogIn/>} />
      <Route path="/signup" element = {<SignUp/>} />
      <Route path="/workout" element = {<Workout/>} />
      <Route path="/contact" element = {<Contact/>} />

      <Route path="*" element={<NoPage/>} />
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
