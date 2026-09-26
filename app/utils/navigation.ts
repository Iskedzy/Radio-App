export type NavRoute =
    | 'Player'
    | 'Jelajah'
    | 'Favorit'
    | 'Riwayat'

export const navigationItems: {
    label: NavRoute
    route: string
    icon: string
}[] = [
        {
            label: 'Player',
            route: '/',
            icon: 'navPlayer'
        },
        {
            label: 'Jelajah',
            route: '/jelajah',
            icon: 'navJelajah'
        },
        {
            label: 'Favorit',
            route: '/favorit',
            icon: 'navFavorit'
        },
        {
            label: 'Riwayat',
            route: '/riwayat',
            icon: 'navPlayer'
        },
    ]