let instance = null
let count = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!")
        }
        instance = this
    }

    #count = 0

    getCount() {
        return this.#count
    }
    add() {
        this.#count += 1
    }
    reduce() {
        this.#count -= 1
    }
}

const singletonInstance = Object.freeze(new Counter())
export default singletonInstance