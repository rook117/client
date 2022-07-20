import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import Detail from './pages/Detail';
import {Routes, Route} from "react-router-dom";
import Edit from './pages/Edit';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/:product_id" element={<Detail />}/>
        <Route path="/:product_id/edit" element={<Edit />}/>
        
      </Routes>
      
    </fieldset>
  );
}

export default App;
