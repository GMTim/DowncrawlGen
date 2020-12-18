const Funcs = {
    loadData: async (path) => {
        return new Promise((resolve, reject) => {
            $.getJSON("/data/" + path, (data) => {
                resolve(data)
            }).fail((error) => {
                reject(error)
            })
        })
    },
    roll: (sides) => {
        return Math.floor(Math.random() * sides) + 1
    },
    getEffect: (effects) => {
        const find = () => {
            const roll = Funcs.roll(20) + Funcs.roll(20)
            const result = effects.filter((effect) => {
                return effect.target == roll
            })
            return result[0]
        }
        let effect = find()
        if (effect) { return [Funcs.handleOptions(effect)] }
        while(effect == undefined) { effect = find() }
        let secondEffect
        while(secondEffect == undefined) { secondEffect = find() }
        return [Funcs.handleOptions(effect), Funcs.handleOptions(secondEffect)]
    },
    handleOptions: (effect) => {
        if (effect.options == undefined) { return effect }
        let roll = Funcs.roll(4) - 1
        effect.primaryEffect = effect.primaryEffect.replace("@@", effect.options[roll])
        return effect
    },
    getName: (names) => {
        function getRandom(list) { return list[Math.floor(Math.random() * list.length)] }
        return getRandom(names.first) + " " + getRandom(names.second)
    }
}

export default class {
    async loadData() {
        this.effects = await Funcs.loadData("fungi/fungalEffects.json")
        this.names = await Funcs.loadData("fungi/fungalNames.json")
    }
    generate() {
        let effects = Funcs.getEffect(this.effects)
        function plural() { return (effects.length == 1) ? "" : "s" }
        let primaryTitle = "Primary Effect" + plural()
        let secondaryTitle = "Side Effect" + plural()
        let primaryEffect = ""
        let sideEffect = ""
        let worth = ""
        for (let index = 0; index < effects.length; index++) {
            function combine(effect, dataEffect) {
                effect += dataEffect
                if (index + 1 != effects.length) { 
                    effect += " AND "
                }
                return effect
            }
            primaryEffect = combine(primaryEffect, effects[index].primaryEffect)
            sideEffect = combine(sideEffect, effects[index].sideEffect)
            worth += effects[index].worth
        }
        return { name: Funcs.getName(this.names), primaryEffect: primaryEffect, sideEffect: sideEffect, worth: worth }
    }
}