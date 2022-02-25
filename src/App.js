import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Portfolio, Contact } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
