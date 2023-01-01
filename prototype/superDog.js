import Dog from "./dog.js"

class SuperDog extends Dog {
    constructor(name) {
        super(name)
    }

    fly() {
        console.log("Flying!")
    }
}

export default SuperDog