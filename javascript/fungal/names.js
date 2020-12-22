import Common from "../common.js"

export default class {
    async load() {
        this.data = await Common.load("./data/fungal/names.json")
    }
    get() {
        let first = Common.one(this.data.first)
        let second = Common.one(this.data.second)
        return first + " " + second
    }
}