export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if an user is authenticated
    //if (isAuthenticated() === false) {
    if (true) {
        return navigateTo('/login')
    }
})
