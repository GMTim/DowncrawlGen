import Common from "../common.js"

export default class {
    async load() {
        this.data = await Common.load("./data/folk/reputation.json")
    }
    get() {
        let item = Common.one(this.data)
        if (Common.roll(2) == 2) {
            return item.even
        }
        return item.odd
    }
}