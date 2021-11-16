import Navbar from './components/Navbar/Navbar.jsx';
import Intro from './components/Intro/Intro.jsx';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Intro />} />>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
