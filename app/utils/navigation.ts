export type NavRoute =
    | 'Player'
    | 'Jelajah'
    | 'Favorit'
    | 'Riwayat'

export const navigationItems: {
    label: NavRoute
    route: string
}[] = [
        {
            label: 'Player',
            route: '/',
        },
        {
            label: 'Jelajah',
            route: '/jelajah',
        },
        {
            label: 'Favorit',
            route: '/favorit',
        },
        {
            label: 'Riwayat',
            route: '/riwayat',
        },
    ]