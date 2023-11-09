import React from "react";

import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import "./style.css"

import sectionData from "./datas/sectionData";





const App = () => {



    return(
        <div>
            <Navbar />
            <AboutMe />

             { 
              sectionData.map((item)=>(
                    <Section  
                    title= {item.title}
                     des= {item.des}
                    />
              ))

             }

             {/* {
                 10>5? <h1> {3+10} </h1> : <p> {6+9}</p>
             } */}
            
        </div>
    )
}

export default App;



// if else => ternory operator 
// loops  => map, filter, reduce