const Person = {
    name: "undefined",
    age : "NaN",
    elements: {
        name: document.querySelector("span#name"),
        age : document.querySelector("span#age") ,
    }
}
const PersonProxy = new Proxy(Person, {
    set: (obj, prop, value) => {
        if (prop in Person) {
            Reflect.set(obj, prop, value)
            obj.elements[prop].innerText = value
            return true
        } else {
            return false
        }
    }
})

document
.querySelector("input#name")
.addEventListener("change", (e) => {
    PersonProxy.name = e.target.value
})
document
.querySelector("input#age")
.addEventListener("change", (e) => {
    PersonProxy.age = e.target.value
})