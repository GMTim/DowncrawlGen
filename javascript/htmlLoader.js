const Funcs = {
    load: async (element, name) => {
        return new Promise((resolve, reject) => {
            $(element).load("./html/" + name + ".html", (response, status, xhr) => {
                if (status == "error") { reject(response); return }
                resolve()
            })
        })
    }
}

export default class {
    constructor() {
        this.main = $("#content")
    }
    async load(element, name) {
        await Funcs.load(element, name)
    }
    async loadHome() {
        await Funcs.load(this.main, "home")
    }
    async loadFolk() {
        await Funcs.load(this.main, "folk")
    }
    async loadFungi() {
        await Funcs.load(this.main, "fungi")
    }
}