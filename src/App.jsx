import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
   <>
   <div style={{minHeight:'calc(100vh - 50px)'}}>
   <Header/>
   <Routes>
     <Route path='/' element={<Home/>}/>
   </Routes>
   </div>
   <Footer/>
   </>
  );
}

export default App;
