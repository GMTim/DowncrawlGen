import FungalGenerator from "./fungal/generator.js"

let fungalGenerator = new FungalGenerator()
const newFungi = async () => {
    await fungalGenerator.loadData()
    let fungi = fungalGenerator.generate()
    $("#fungi .inner").removeClass("hidden")
    $("#fungi .title").text(fungi.name)
    $("#fungi .worth .text").text(fungi.worth)
    $("#fungi .primaryEffect .text").text(fungi.primaryEffect)
    $("#fungi .sideEffect .text").text(fungi.sideEffect)
}

$(async () => {
    $("#fungiGenerate").on("click", async (event) => {
        event.preventDefault()
        await newFungi()
    })
})