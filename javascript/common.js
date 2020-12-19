export default Object.freeze({
    one: (set) => {
        return set[Math.floor(Math.random() * set.length)]
    },
    roll: (sides) => {
        return Math.floor(Math.random() * sides) + 1
    }
})