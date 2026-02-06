import { createUser, db, getAllUsers, getUserById } from '$lib/server/db';
import { Users } from '$lib/server/db/schema'
import { redirect } from '@sveltejs/kit'

// load function to decide if signin | signup | or redirect to error page
export async function load( { params, cookies }) {
    //if route not /signin or /signup then redirect to home page
    if(params.action != "signin" && params.action != "signup"){
        redirect(308, '/')
    }

    return {
        meta: {
            title: params.action == 'signin' ? 'Sign in' : 'Sign up'
        }
    }
}


export const actions = {
    createUser: async ({ request }) => {
        const data = await request.formData();
        const username = data.get('username')
        const password = data.get('password')
        const user = await createUser( username, password)
    },
    login: async({}) => {
        // function to check credentials with the ones in the database
            // if correct redirect home
            // else display message saying incorrect info

    }
}


