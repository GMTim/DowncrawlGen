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
    async load(element, name) {
        await Funcs.load(element, name)
    }
    async loadFungi() {
        await Funcs.load($("#content"), "fungi")
    }
}