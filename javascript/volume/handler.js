import Generator from "./generator.js"

export default class {
    constructor() {
        this.generator = new Generator()
    }
    async bind() {
        await this.generator.load()
        $("#volumeGenerate").on("click", async (event) => {
            event.preventDefault()
            let volume = this.generator.get()
            $("#volume .inner").removeClass("hidden")
            $("#volume .themes .target1").text(volume.themes[0])
            $("#volume .themes .target2").text(volume.themes[1])
            $("#volume .terrian .target1").text(volume.terrain[0])
            $("#volume .terrian .target2").text(volume.terrain[1])
            $("#volume .abundant .target1").text(volume.abundance[0])
            $("#volume .abundant .target2").text(volume.abundance[1])
            $("#volume .scarce .target1").text(volume.scarce[0])
            $("#volume .scarce .target2").text(volume.scarce[1])
            $("#volume .remoteness .target").text(volume.remoteness)
            $("#volume .currency .target").text(volume.currency)
        })
    }
}