const Funcs = {
}

export default class {
    constructor(navChanged) {
        this.home = $("#navHome")
        this.fungi = $("#navFungi")
        this.navChanged = navChanged
    }
    bind() {
        $(".nav-link").on("click", async (event) => {
            event.preventDefault()
            $(".nav-link").removeClass("active")
            $(".nav-link").removeAttr("aria-current")
            const target = $(event.currentTarget)
            target.addClass("active")
            target.attr("aria-current", "page")
            await this.navChanged(target.attr("id"))
        })
        return this
    }
}