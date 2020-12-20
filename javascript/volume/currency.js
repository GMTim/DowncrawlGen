import Common from "../common.js"

export default class {
    async load() {
        this.data = await Common.load("./data/volume/currency.json")
    }
    get() {
        let adjective = Common.one(this.data.adjective)
        let noun = Common.one(this.data.noun)
        return adjective.value + " " + noun.value
    }
}