import Common from "../common.js"
import ChallengeContexts from "./challengeContexts.js"
import Opportunities from "./opportunities.js"
import Threats from "./threats.js"
import TravelEncounter from "./travelEncounter.js"

export default class {
    async load() {
        this.challengeContexts = new ChallengeContexts()
        this.opportunities = new Opportunities()
        this.threats = new Threats()
        this.travelEncounter = new TravelEncounter()
        await this.challengeContexts.load()
        await this.opportunities.load()
        await this.threats.load()
        await this.travelEncounter.load()
    }
    get(mod) {
        let item = { category: this.travelEncounter.get() }
        switch (item.category) {
            case "Opportunity":
                item.value = this.opportunities.get()
                break
            case "No Encounter":
                item.value = "No Encounter"
                break
            case "Challenge":
                item.value = this.challengeContexts.get()
                break
            case "Threat":
                item.value = this.threats.get()
                break
        }
        return item
    }
}