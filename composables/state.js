export const useCart = () => useState(() => [])
export const useAuth = () => useState(() => ({
    isAuthenticate: false,
}));