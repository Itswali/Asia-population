import { Route, Routes, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/"><img src="https://www.shutterstock.com/image-illustration/aesthetic-illustration-girl-sitting-on-260nw-1919058461.jpg" alt="logo" /></Link>
          <Link to="Details"> <img src="https://www.shutterstock.com/image-illustration/aesthetic-anime-theme-illustration-boy-260nw-1762336295.jpg" alt="Logo2" /> </Link>
        </li>
      </ul>
    </nav>
    <Routes>
<Route path="/" element={<Home />} />
<Route path="Details/" element={<Detail />} />

  </Routes>
    </>
  );
}


export default App;
