import FungalGenerator from "./fungal/generator.js"

$(async () => {
    const generator = new FungalGenerator()
    await generator.loadData()
    $("#content").text(JSON.stringify(generator.generate()))
})