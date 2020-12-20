import Navigator from "./navigator.js"
import HTMLLoader from "./htmlLoader.js"
import FolkHanlder from "./folk/handler.js"
import FungalHandler from "./fungal/handler.js"

let handler
let htmlLoader = new HTMLLoader()
let navigator = new Navigator(async (target) => {
    switch(target) {
        case "navHome":
            await htmlLoader.loadHome()
            break
        case "navFolk":
            await htmlLoader.loadFolk()
            handler = new FolkHanlder()
            break
        case "navFungi":
            await htmlLoader.loadFungi()
            handler = new FungalHandler()
            break
        default: break
    }
    await handler?.bind()
})

$(async () => {
    navigator.bind()
})