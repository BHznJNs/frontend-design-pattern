// The Presentation component is used to show
// the data injected.

class Presentation extends HTMLLIElement {
    constructor(content) {
        super()

        this.innerText = content
    }
}

customElements.define(
    "text-presentation", Presentation,
    { extends: "li" }
)

export default Presentation