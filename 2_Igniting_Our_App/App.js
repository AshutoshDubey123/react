/*
<div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>

  <div id="child2">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div>

*/

// How nested HTML is created in React, What if there are siblings (multiple children)
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [//siblings
    React.createElement(
      "div",
      { id: "child" },
      [//siblings
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
      ]
    ),

    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
      ]
    ),
  ]
);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



/*
React does NOT create HTML directly

When you write:
React.createElement("h1", {}, "I am H1 tag");
👉 React does NOT immediately create an <h1> tag.
✔️ Instead, it creates a JavaScript object
✔️ This object is called a React Element
So, remember this clearly:
React Element = JavaScript Object (NOT HTML)
This object only describes what the UI should look like.
________________________________________
What is inside this React Element (object)?

That object contains:
•	type → which tag (div, h1, h2, etc.)
•	props → attributes like id, class
•	children → what is inside that tag
Example:
React.createElement("h1", { id: "heading" }, "Hello")
Here:
•	"h1" → type
•	{ id: "heading" } → props (attributes)
•	"Hello" → children
________________________________________
How nested HTML is created in React

HTML is usually nested, like this:
<div id="parent">
  <div id="child">
    <h1>I am H1</h1>
  </div>
</div>
In React (without JSX), this nesting is created using the third argument (children):
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am H1")
  )
);
✔️ Each createElement returns an object
✔️ Objects are nested inside each other
✔️ This forms a tree structure
Still:
❌ No HTML yet
✔️ Only JavaScript objects
________________________________________
What if there are siblings (multiple children)?

Example:
<h1>I am H1</h1>
<h2>I am H2</h2>
To create siblings:
•	The children argument becomes an array
React.createElement(
  "div",
  { id: "child" },
  [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2")
  ]
);
👉 Array = siblings at the same level
(React may warn about key — that’s for later)
________________________________________

Why React.createElement feels painful

As nesting grows:
•	Code becomes long
•	Hard to read
•	Ugly and confusing
💡 That’s why JSX exists
JSX is just a clean syntax that React converts internally into React.createElement.
Core React = createElement
Developer-friendly React = JSX
________________________________________
 
What does root.render() actually do?

This line is VERY important:
root.render(parent);
Here’s what happens:
1.	React takes the React Element object
2.	Converts it into real HTML
3.	Injects it into the DOM
4.	Displays it on the page
So:
React Element (object)
        ↓
root.render()
        ↓
Real DOM nodes (HTML)
________________________________________


*/