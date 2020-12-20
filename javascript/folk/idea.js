import Common from "../common.js"
import IdeaConnections from "./ideaConnection.js"

const Funcs = {
    evenOrOdd: (item) => {
        let object = { value: "", options: [], needsTwo: false }
        function check(type) {
            if (item.options?.needsSecondOption?.includes(type)) {
                object.needsTwo = true
            }
        }
        if (Common.roll(2) == 1) {
            object.value = item.odd
            object.options = item.options?.odd
            check("odd")
            return object
        }
        object.value = item.even
        object.options = item.options?.even
        check("even")
        return object
    },
    process: (item, connection) => {
        let text
        if (item.options) { text = Common.one(item.options) }
        else { text = connection.get() }
        item.value = item.value.replace("@@", text)
        return item
    },
    lookForSecond: (item, connection, data) => {
        if (item.needsTwo == false) { return item.value }
        let second
        do {
            second = Common.one(data)
            second = Funcs.evenOrOdd(second)
        } while(second.needsTwo == false)
        second = Funcs.process(second, connection)
        return item.value.replace("@R", second.value)
    }
}

export default class {
    async load() {
        this.data = await Common.load("./data/folk/ideas.json")
        this.ideaConnections = new IdeaConnections()
        await this.ideaConnections.load()
    }
    get() {
        let item = Common.one(this.data)
        item = Funcs.evenOrOdd(item)
        item = Funcs.process(item, this.ideaConnections)
        item = Funcs.lookForSecond(item, this.ideaConnections, this.data)
        return item
    }
}