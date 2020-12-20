import Common from "../common.js"

const Funcs = {
    process: (item) => {
        if (item.options == undefined) { return item.value }
        item.value = item.value.replace("@@", Common.one(item.options))
        return item.value
    }
}

export default class {
    async load() {
        this.data = await Common.load("./data/volume/themes.json")
    }
    get() {
        let item = Common.one(this.data)
        item = Funcs.process(item)
        return item
    }
}