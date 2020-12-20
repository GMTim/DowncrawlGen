import Generator from "./generator.js"

export default class {
    constructor() {
        this.generator = new Generator()
    }
    async bind() {
        await this.generator.load()
        $("#folkGenerate").on("click", async (event) => {
            event.preventDefault()
            let folk = this.generator.get()
            $("#folk .inner").removeClass("hidden")
            $("#folk .ideas .target1").text(folk.ideas[0])
            $("#folk .ideas .target2").text(folk.ideas[1])
            $("#folk .appearance .target1").text(folk.appearances[0])
            $("#folk .appearance .target2").text(folk.appearances[1])
            $("#folk .reputation .target1").text(folk.reputation[0])
            $("#folk .reputation .target2").text(folk.reputation[1])
        })
    }
}