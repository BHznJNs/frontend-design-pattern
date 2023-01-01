import Presentation from "./presentation.js"

// The Container component is used to fetch data and
// then provide it to the Presentation component.

class Container extends HTMLUListElement {
    constructor(url) {
        super()

        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.present(json)
        })
    }

    present(data) {
        const fragment = new DocumentFragment()

        for (const item of data) {
            fragment.appendChild(new Presentation(item))
        }
        
        this.appendChild(fragment)
    }
}

customElements.define(
    "text-container", Container,
    { extends: "ul" }
)

export default Container