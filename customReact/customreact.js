function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const key in reactElement.props) {
    if (key !== "children") {
      domElement.setAttribute(key, reactElement.props[key]);
    }
  }
  mainContainer.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
