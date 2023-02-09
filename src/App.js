import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/layout';


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


export default App;
