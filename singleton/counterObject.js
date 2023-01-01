let count = 0

const Counter = {
    getCount() {
        return count
    },
    add() {
        count += 1
    },
    reduce() {
        count -= 1
    }
}
export default Object.freeze(Counter)