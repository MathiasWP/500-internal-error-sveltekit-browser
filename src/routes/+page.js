import { browser } from "$app/environment"

export const load = () => {
    if(browser) {
        throw new Error("Thrown on the client")
    }
    return {}
}