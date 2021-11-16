import Navbar from './components/Navbar/Navbar.jsx';
import Intro from './components/Intro/Intro.jsx';
import About from './components/About/About.jsx'
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
          <Route exact path="/about" element={<About />} />>




        </Routes>
        <About />
      </BrowserRouter>
    </div>
  );
}

export default App;
