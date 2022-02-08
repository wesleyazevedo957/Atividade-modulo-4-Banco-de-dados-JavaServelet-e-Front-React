import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom";
  import Hero from "./pages/Hero";
  import Services from "./pages/Services";
  import Recommend from "./pages/Recommend";
  
  
  
  export default function rotas() {
    return (
      
      <Router>
          
          <Routes>
            <Route exact path="/" element={<Hero/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Recommend" element={<Recommend/>}/>
            
          </Routes>
      </Router>
    );
  }
  
  
  
  
  
