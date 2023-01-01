import Container from "./components/container.js"

const container = new Container("./data.json")

document
.querySelector("#app")
.appendChild(container)