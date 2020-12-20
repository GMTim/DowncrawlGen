import Common from "../common.js"
import Appearance from "./appearance.js"
import Idea from "./idea.js"
import Reputation from "./reputation.js"

export default class {
    async load() {
        this.appearance = new Appearance()
        this.idea = new Idea()
        this.reputation = new Reputation()
        await this.appearance.load()
        await this.idea.load()
        await this.reputation.load()
    }
    get() {
        return {
            ideas: [this.idea.get(), this.idea.get()],
            appearances: [this.appearance.get(), this.appearance.get()],
            reputation: [this.reputation.get(), this.reputation.get()]
        }
    }
}