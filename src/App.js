
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Social from './Components/Social';
import About from './Components/About';
import Cards from './Components/Cards';
import Resume from './Components/Resume';
import Timeline from './Components/Timeline';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">
       <NavBar/>
       <Home id='Home'/>
       <Social />
       <About id='about' />
       <Resume id='resume' />
       <Cards id='cetrificats'/>
       <Timeline id='activities'/>
       <Footer />
    </div>
  );
}

export default App;
