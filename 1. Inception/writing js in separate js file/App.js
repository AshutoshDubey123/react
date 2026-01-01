/*
When modern libraries and frameworks like React were created, they were built with a clear philosophy in mind.

👉 The most expensive operation in a web page is manipulating the DOM.
Whenever a user interacts with a web page—
like clicking a button, showing or hiding content—
the browser has to add, remove, or update DOM nodes.
This changing of the DOM tree is what costs the browser the most performance.

⚡ Why React Exists
React was designed to optimize these costly DOM operations.
Instead of directly changing the DOM again and again, React:
Uses JavaScript to control everything
Provides helper methods that update the UI efficiently
Minimizes unnecessary DOM changes

🧠 Core Philosophy of React
“Do everything using JavaScript.”
UI creation
UI updates
UI manipulation
All of it happens inside JavaScript, not by manually writing HTML again and again.

📄 Role of HTML in React
HTML becomes minimal
Usually just a single root element
Most of the UI is created and controlled inside React code

So from now on:
We don’t touch HTML much
We create and manipulate elements using React (which is JavaScript)*/



const headingg= React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello world from React JS!");//This object{} is where we define attributes for a React element.
console.log(headingg)//object//this headingg in React element & the React element in JS object
const rootReact= ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(headingg);

/*
1️⃣ What React.createElement() really does
When you write:
const heading = React.createElement("h1", {}, "Hello World");

👉 React does NOT create an actual <h1> tag immediately.

Instead, it creates a plain JavaScript object.

So:

❌ heading is NOT an <h1> tag
✅ heading is a React Element (JS object)
Think of it as a blueprint 📐, not the real building.

2️⃣ Why React does this
Directly creating and changing DOM elements is slow and expensive.
So React first works with JavaScript objects, which are fast.
This object contains:
what type of element (h1)
what attributes (id, class, etc.)
what content (Hello World)

3️⃣ What render() does
When you write:
rootReact.render(heading);
👉 Now React takes that JavaScript object and:
Converts it into a real DOM element (<h1>)
Inserts it into the actual DOM
Displays it on the web page

So:

React.createElement → JS Object
render()             → Real DOM element

4️⃣ Simple flow (behind the scenes)
React.createElement()
        ↓
Creates a JavaScript object (React Element)
        ↓
root.render()
        ↓
Converts object → HTML element
        ↓
Places it inside the DOM

5️⃣ Why this explanation matters
Many beginners think:
“React.createElement creates HTML directly”
❌ Wrong

✔️ It creates an object first, and React decides when and how to update the DOM.
This is what makes React:
Fast ⚡
Efficient
Smart with updates

6️⃣ Final takeaway (very important)

React works with JavaScript objects first,
and only updates the real DOM when needed.

This is the foundation of React.*/