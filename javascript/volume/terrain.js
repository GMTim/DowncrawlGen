import Common from "../common.js"

const Funcs = {
    one: (set, roll) => {
        let actualRoll = roll ?? Common.roll(100)
        let items = set.filter((item) => {
            return actualRoll >= item.target.start && actualRoll <= item.target.end
        })
        return { roll: actualRoll, item: items[0] }
    },
    checkRoll: (item, set) => {
        if (item.roll > 60) { return item.item.value }
        let second = Funcs.one(set, Common.roll(60))
        return item.item.value + " " + second.item.altValue
    }
}

export default class {
    async load() {
        this.data = await Common.load("./data/volume/terrain.json")
    }
    get() {
        let item = Funcs.one(this.data)
        return Funcs.checkRoll(item, this.data)
    }
}