import { Routes, Route } from "react-router-dom";
import Calander from "./components/Calander";
import Home from "./components/Home";
import Task from "./components/Task";
import ToDo from "./components/ToDo";
import Navbar from "./Navbar";
import Footer from "./Shared/Footer";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="todo" element={<ToDo/>} />
        <Route path="task" element={<Task/>} />
        <Route path="calander" element={<Calander/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
