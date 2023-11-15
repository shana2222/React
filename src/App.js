import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes >
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
