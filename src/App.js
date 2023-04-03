
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Social from './Components/Social';
import About from './Components/About';
import Cards from './Components/Cards';
import Resume from './Components/Resume';
import Timeline from './Components/Timeline';




function App() {
  return (
    <div className="App">
       <NavBar/>
       <Home />
       <Social/>
       <About />
       <Resume />
       <Cards />
       <Timeline />
    </div>
  );
}

export default App;
