import Common from "../common.js"

const Funcs = {
    useTwo: (item, data) => {
        let roll = Common.roll(20) + Common.roll(20)
        let doubleRolls = [2,3,39,40]
        if (doubleRolls.includes(roll) == false) { return item }
        let secondItem = Funcs.get(data)
        item.worth = item.worth + item.worth
        item.primaryEffect = item.primaryEffect + " AND " + secondItem.primaryEffect
        item.sideEffect = item.sideEffect + " AND " + secondItem.sideEffect
        return item
    },
    get: (data) => {
        let item = Common.one(data)
        let processedItem = { worth: item.worth, primaryEffect: item.primaryEffect, sideEffect: item.sideEffect }
        if (item.options == undefined) { return processedItem }
        let option = Common.one(item.options)
        processedItem.primaryEffect = processedItem.primaryEffect.replace(option)
        return processedItem
    }
}

export default class {
    async load() {
        this.data = await Common.load("./data/fungal/effects.json")
    }
    get() {
        let item = Funcs.get(this.data)
        item = Funcs.useTwo(item, this.data)
        return item
    }
}