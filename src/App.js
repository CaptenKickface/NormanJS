import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./components/navbar.component";
import Intro from "./components/intro.component";
import Test from "./components/test.component";
import DataList from "./components/data-list.component";


function App() {          
    return (        
        <Router>
            <div className="container">
            <Navbar />
            <br/>
            <Route path ="/" component={Intro} />            
            <Route path ="/test" component={Test} />
            <Route path ="/data" component={DataList} />
            </div>              
        </Router>                 
    );
}

export default App;