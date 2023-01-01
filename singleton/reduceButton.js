import Counter from "./counterObject.js"

const counterSpan = document.querySelector("#counter")

document
.querySelector("#reduce")
.addEventListener("click", () => {
    Counter.reduce()
    counterSpan.innerText = Counter.getCount()
})