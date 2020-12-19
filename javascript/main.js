import Navigator from "./navigator.js"
import FungalGenerator from "./fungal/generator.js"

let navigator = new Navigator((target) => {
    console.log(target)
})

let fungalGenerator = new FungalGenerator()
const newFungi = async () => {
    await fungalGenerator.loadData()
    let fungi = fungalGenerator.generate()
    $("#fungi .inner").removeClass("hidden")
    $("#fungi .title").text(fungi.name)
    $("#fungi .worth").text(fungi.worth)
    $("#fungi .primaryEffect").text(fungi.primaryEffect)
    $("#fungi .sideEffect").text(fungi.sideEffect)
}

$(async () => {
    navigator.bind()
    $("#fungiGenerate").on("click", async (event) => {
        event.preventDefault()
        await newFungi()
    })
})