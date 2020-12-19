import Common from "../common.js"
import Resources from "../volume/resource.js"
import Terrain from "../volume/terrain.js"

export default class {
    async load() {
        this.data = await Common.load("./data/folk/ideaConnections.json")
        this.resources = new Resources()
        await this.resources.load()
        this.terrain = new Terrain()
        await this.terrain.load()
    }
    get() {
        let item = Common.one(this.data)
        if (item.target == 1) { return this.terrain.get() }
        if (item.target == 2) { return this.resources.get() }
        return item.text
    }
}