import Common from "../common.js"

const Funcs = {
    oneTopic: (data) => {
        return Common.one(Object.values(data))
    },
    get: (topic) => {
        let item = Common.one(topic.values)
        item.category = topic.name
        return item
    },
    process: (item) => {
        if (item.options == undefined) { return item }
        let option = Common.one(item.options)
        item.value = item.value.replace("@@", option)
        return item
    }
}

export default class {
    async load() {
        this.data = await Common.load("./data/encounters/threats.json")
    }
    get() {
        const topic = Funcs.oneTopic(this.data)
        let item = Funcs.get(topic)
        item = Funcs.process(item)
        return item
    }
}