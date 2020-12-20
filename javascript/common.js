export default Object.freeze({
    load: async (path) => {
        return new Promise((resolve, reject) => {
            $.getJSON(path, (data) => {
                resolve(data)
            }).fail((error) => { reject(error) })
        })
    },
    one: (set) => {
        return set[Math.floor(Math.random() * set.length)]
    },
    roll: (sides) => {
        return Math.floor(Math.random() * sides) + 1
    }
})