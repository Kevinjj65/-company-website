
import './App.css';
import './index.css'
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Intro from './components/pages/Intro';
import Advertise from './components/pages/Advertise';
import IT from './components/pages/IT';
import Digital from './components/pages/Digital';
import Business from './components/pages/Business';
import Design from './components/pages/Design';
// import Navbar1 from './Navbar1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}/>
         {/* <Route path='/navbar' Component={Navbar}/>  */}
          {/* <Route path='/navbar1' Component={Navbar1}/>  */}
          <Route path='/intro' Component={Intro}/> 
        <Route path='/home' exact Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/products' Component={Products} />
          <Route path='/advertise' Component={Advertise} />
          <Route path='/design' Component={Design} />
          <Route path='/it' Component={IT} />
          <Route path='/business' Component={Business} />
          <Route path='/digital' Component={Digital} />

  
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
