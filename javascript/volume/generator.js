import Common from "../common.js"
import Currency from "./currency.js"
import Resources from "./resource.js"
import Terrain from "./terrain.js"
import Themes from "./themes.js"
import Remoteness from "./remoteness.js"

const Funcs = {
    getResources: (resources) => {
        let items = []
        do {
            let item = resources.get()
            if (items.includes(item) == false) {
                items.push(item)
            }
        } while (items.length < 4)
        return items
    }
}

export default class {
    async load() {
        this.currency = new Currency()
        this.resources = new Resources()
        this.terrain = new Terrain()
        this.themes = new Themes()
        this.remoteness = new Remoteness()
        await this.currency.load()
        await this.resources.load()
        await this.terrain.load()
        await this.themes.load()
        await this.remoteness.load()
    }
    get() {
        let resources = Funcs.getResources(this.resources)
        return {
            themes: [this.themes.get(), this.themes.get()],
            terrain: [this.terrain.get(), this.terrain.get()],
            abundance: [resources[0], resources[1]],
            scarce: [resources[2], resources[3]],
            remoteness: this.remoteness.get(),
            currency: this.currency.get()
        }
    }
}