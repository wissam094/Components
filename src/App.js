
import React, {component} from 'react';
import './App.css';
import Header from "./component/header.js"
import FullName from "./component/FullName.js"
import Adress from "./component/adress.js"
function App() {
  return (
    <div className="App">
      

<Header/>   
<FullName/>
<Adress/>
    </div>
  );
}

export default App;
