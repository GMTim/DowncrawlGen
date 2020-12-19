import Navigator from "./navigator.js"
import FungalHandler from "./fungal/handler.js"
import HTMLLoader from "./htmlLoader.js"

let handler
let htmlLoader = new HTMLLoader()
let navigator = new Navigator(async (target) => {
    switch(target) {
        case "navFungi":
            await htmlLoader.loadFungi()
            handler = new FungalHandler()
            await handler.bind()
            break
        default: break
    }
})

$(async () => {
    navigator.bind()
})