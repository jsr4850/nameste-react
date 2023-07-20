import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement => Object => HTMlElement(render)

//JSX is an easier way to create React Elements.

//const heading = React.createElement("h1", {id: "heading"}, "Namaste Javascript");

// JSX - HTML-like or XML-like syntax, Used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.
// JSX is not a necessity to write React applications. It is just a syntactic sugar for React.createElement() function.
     // Parcel - Babel is doing the job.

// React Element
//const jsxHeading = (<h1>Namaste Javascript using JSX</h1>);
// when writing JSX in single no need of brackets
// when writing JSX in multiple lines, it requires brackets.


// React Component
  // Class based components - OLD way to use ES6 classes
    // class App extends React.Component {
    //     render() {
    //         return (
    //             <h1>Namaste Javascript using JSX</h1>
    //         );
    //     }
    // }
  // Functional Components - NEW way to use ES6 classes
    // Which Return JSX functions
    // function App() {
    //     return (
    //         <h1>Namaste Javascript using JSX</h1>
    //     );
    // }
// Component Composition => Component Inside another Component.
   const Title = () => ( 
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
   );

    const HeadingComponent = () => (
      <div id="container">
        <Title/> 
        <h1 className="heading">Namaste React Functional Component</h1>;
      </div>
    );

// ReactDOM.render(jsxHeading, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <HeadingComponent/>);

// Parcel - https://parceljs.org/
    // Dev Builds
    // Local Server
    // HMR - Hot Module Replacement
    // File Watching Algorithms = Written in C++
    // Caching - Faster Builds
    // Image Optimization
    // Minification
    // Bundling
    // Compress
    // Consistent Hashing
    // Code Splitting
    // Differential Bundling - Support older browsers
    // Diagnostic
    // Error Handling
    // HTTPS - provides way to secure your site
    // Tree Shaking