import Generator from "./generator.js"

export default class {
    constructor() {
        this.generator = new Generator()
    }
    async bind() {
        await this.generator.load()
        $("#fungiGenerate").on("click", async (event) => {
            event.preventDefault()
            let fungi = this.generator.get()
            $("#fungi .inner").removeClass("hidden")
            $("#fungi .title").text(fungi.name)
            $("#fungi .worth .target").text(fungi.worth)
            $("#fungi .primaryEffect .target").text(fungi.primaryEffect)
            $("#fungi .sideEffect .target").text(fungi.sideEffect)
        })
    }
}