import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';

const DetailPage = ({ match }) => <div>Detail Page for {match.params.id}</div>;


function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/"><img src="https://www.shutterstock.com/image-illustration/aesthetic-illustration-girl-sitting-on-260nw-1919058461.jpg" alt="logo" /></Link>
          <Link to="detail/1"> <img src="https://www.shutterstock.com/image-illustration/aesthetic-anime-theme-illustration-boy-260nw-1762336295.jpg" alt="Logo2" /> </Link>
        </li>
      </ul>
    </nav>
    <Routes>
<Route path="/" element={<Home />} />
<Route path="detail/:id" component={<DetailPage />} />

  </Routes>
    </>
  );
}


export default App;
