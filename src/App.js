
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Booklist from './components/Booklist';
import Favourtite from './components/Favourtite';
import Bookdetails from './components/Bookdetails';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <>
   <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Booklist/>}/>
      <Route path="/book/:id" element={<Bookdetails/>}/>
      <Route path="/favourite" element={<Favourtite/>}/>
    </Routes>
    <Footer/>
   </div>
    
    </>
  );
}

export default App;
