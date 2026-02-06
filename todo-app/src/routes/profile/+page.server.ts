import { Users, Todos } from '$lib/server/db/schema'

export function load() {
    return {
        meta: {
            title: 'Profile'
        }
    }
}