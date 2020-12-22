import Common from "../common.js"
import Effects from "./effects.js"
import Names from "./names.js"

export default class {
    async load() {
        this.effects = new Effects()
        this.names = new Names()
        await this.effects.load()
        await this.names.load()
    }
    get() {
        let item = this.effects.get()
        item.name = this.names.get()
        return item
    }
}