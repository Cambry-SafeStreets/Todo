import { Users, Todos } from '$lib/server/db/schema'
import { redirect } from '@sveltejs/kit'

export function load({ cookies }) {
    if(cookies.get('loggedInUser') == undefined || cookies.get('loggedInUser') == '0'){
        redirect(308, '/signin')
    }

    return {
        meta: {
            title: 'Todos'
        }
    }
}

