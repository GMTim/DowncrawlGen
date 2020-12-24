import Common from "../common.js"

const Funcs = {
    roll: (mod) => {
        let roll = Common.roll(6) + (mod ?? 0)
        if (roll > 6) { roll = 6 }
        return roll
    },
    get: (roll, data) => {
        let item = data.filter((item) => {
            return roll >= item.target.start && roll <= item.target.end
        })
        return item[0]
    }
}

export default class {
    async load() {
        this.data = await Common.load("./data/encounters/travelEncounter.json")
    }
    get(mod) {
        let roll = Funcs.roll(mod)
        return Funcs.get(roll, this.data).value
    }
}