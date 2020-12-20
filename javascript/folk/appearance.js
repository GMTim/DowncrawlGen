import Common from "../common.js"

const Funcs = {
    evenOdd: (item) => {
        let object = { value: "", options: [] }
        if (Common.roll(2) == 1) {
            object.value = item.even
            object.options = item.options?.even
        } else { 
            object.value = item.odd
            object.options = item.options?.odd
        }
        return object
    },
    process: (item) => {
        if (item.options == undefined) { return item.value }
        let option = Common.one(item.options)
        return item.value.replace("@@", option)
    }
}

export default class {
    async load() {
        this.data = await Common.load("./data/folk/appearances.json")
    }
    get() {
        let item = Common.one(this.data)
        item = Funcs.evenOdd(item)
        return Funcs.process(item)
    }
}