// const heading = React.createElement("h1", {id: "heading"}, "Hello world!!!!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "Hello world heading1!!!!!"),
     React.createElement("h2", { id: "heading2" }, "Hello world heading2!!!!!"),]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
