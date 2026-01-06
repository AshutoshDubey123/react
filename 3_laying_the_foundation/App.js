
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React🛩️"
);

const root = ReactDOM.createRoot(document.getElementById("root"));


const jsxHeading = <h1 id="heading" className="head">Namaste React🛩️ using jsx</h1>

console.log(heading);//gives object as output
console.log(jsxHeading);//gives object as output

root.render(heading);//will not get rendered//overwritten
root.render(jsxHeading);//Namaste React🛩️ using jsx

/* to get both root rendered
root.render(
  <>
    {heading}
    {jsxHeading}
  </>
);
//or
root.render(
  <div>
    {heading}
    {jsxHeading}
  </div>
);*/

/*
✅ JSX and React.createElement() both produce React elements
✅ Only one root render call should exist*/
//From now on we will not be using React.createElement()


//React Component// After writing the below, above will get overwritten during rendering


const Title = () => (
    <h1 className="head">
        Namaste
    </h1>
);

const HeadingComponent = () => (
    <div id ="container">
        <Title/>
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

//root.render(<HeadingComponent/>)
/*Namaste
Namaste React Functional Component*/

const Heading = function () {
  return <h1>Namaste React</h1>;
}
//or
/*const Heading = function Heading() {
  return <h1>Namaste React</h1>;
}*/
root.render(<Heading/>)//Namaste React