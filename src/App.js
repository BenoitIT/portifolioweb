
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import {Routes,Route} from 'react-router-dom'
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/contact';
function App() {
  return (
    <div className='flex flex-row w-screen'>
<div className='navbar'>
{/* <Navbar/> */}
<Navbar/>
</div>
<div className='contents'>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/skills" element={<Skills/>}></Route>
<Route path="/project" element={<Project/>}></Route>
<Route path="/contact_us" element={<Contact/>}></Route>
</Routes>
</div>
</div>
  );
}

export default App;
