export default defineNodeMiddleware(() => {
    const auth = useAuth();
    return auth.value.isAuthenticate;
})