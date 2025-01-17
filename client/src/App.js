import EditTransaction from "./components/EditTransaction";
import NewTransaction from "./components/NewTransaction";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/newtransaction" element={<NewTransaction/>}/>
      <Route path="/edittransaction/:id" element={<EditTransaction/>}/>
      <Route path="/categories" element={<Categories/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
