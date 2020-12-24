import Common from "../common.js"

export default class {
    async load() {
        this.data = await Common.load("./data/encounters/challengeContexts.json")
    }
    get() {
        let set = []
        do {
            let item = Common.one(this.data)
            if (set.includes(item)) { continue }
            set.push(item)
        } while (set.length < 4)
        return set
    }
}