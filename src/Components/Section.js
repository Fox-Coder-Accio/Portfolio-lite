import React from "react";


const Section = (props) => {

    return(
        <div className="section">
               <hr />
               <h1>{props.title}</h1>
               <p>{props.des}</p>
        </div>
    )
}

export default Section;


{/* <Section title="About Me"  des="This is my story. /> */}