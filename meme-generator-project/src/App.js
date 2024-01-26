import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './pages/Home';
import EditPage from './pages/Edit';

function App() {
  
  return (
    <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", gap:"1rem",  margin: "0 auto"}}>
      <h1>meme generator</h1>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
