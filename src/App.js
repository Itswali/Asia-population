import { Route, Routes } from 'react-router-dom';
import { Book } from './components/Book';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
}


export default App;
