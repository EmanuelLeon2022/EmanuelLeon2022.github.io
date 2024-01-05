import Profile from './components/Profile'
import Main from './components/Main';
import Contact from './components/Contact';
import About from './components/About'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="head">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/contact+us' element={<Contact/>}/>
          <Route path='/about+us' element={<About/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
