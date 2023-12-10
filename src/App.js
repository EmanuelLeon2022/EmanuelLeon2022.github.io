import './style.css';
import Main from './components/Main';
import Zelda from './components/Zelda';
import Me from './components/Me';
import Retro from './components/Retro';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="head">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Zelda' element={<Zelda/>}/>
          <Route path='/Me' element={<Me/>}/>
          <Route path='/Retro' element={<Retro/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
