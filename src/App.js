import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/layout';
import axios from 'axios';


function App() {
  return (
    <> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books">
        <Route path=":id" element={<Page />} />
        <Route index element={<Home />} />
      </Route>
      </Routes>
    </>
  );
}

const options = {
  method: 'GET',
  url: 'https://world-population3.p.rapidapi.com/continents/ASIA',
  params: {rank:1},
  headers: {
    'X-RapidAPI-Key': '433ce13791mshdb40fb24f61a72ap1be8e4jsn380659aafd36',
    'X-RapidAPI-Host': 'world-population3.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  const filteredData = response.data.slice(0, 6);
	console.log(filteredData);
}).catch(function (error) {
	console.error(error);
});





export default App;
