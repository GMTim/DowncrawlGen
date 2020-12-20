import Common from "../common.js"

export default class {
    async load() {
        this.data = await Common.load("./data/volume/remoteness.json")
    }
    get() {
        return Common.one(this.data)
    }
}