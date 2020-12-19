import Generator from "./generator.js"

export default class {
    constructor() {
        this.generator = new Generator()
    }
    async bind() {
        await this.generator.loadData()
        $("#fungiGenerate").on("click", async (event) => {
            event.preventDefault()
            let fungi = this.generator.generate()
            $("#fungi .inner").removeClass("hidden")
            $("#fungi .title").text(fungi.name)
            $("#fungi .worth").text(fungi.worth)
            $("#fungi .primaryEffect").text(fungi.primaryEffect)
            $("#fungi .sideEffect").text(fungi.sideEffect)
        })
    }
}