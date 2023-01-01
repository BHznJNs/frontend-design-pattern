import Counter from "./counterObject.js"

const counterSpan = document.querySelector("#counter")

document
.querySelector("#add")
.addEventListener("click", () => {
    Counter.add()
    counterSpan.innerText = Counter.getCount()
})