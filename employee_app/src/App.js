//import './App.css';


import { Link } from "react-router-dom";

import NavB from "./navb";

function App() {
  return (
    <>
   <h1>Employee App</h1>
      <NavB/>  
      <div>
            <Link to="/">Home</Link>
        </div> 
        
    </>
  );
}

export default App;
