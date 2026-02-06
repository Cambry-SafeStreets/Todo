import { createUser, db, getAllUsers, getUserById } from '$lib/server/db';
import { Users } from '$lib/server/db/schema'
import { redirect } from '@sveltejs/kit'

// load function to decide if signin | signup | or redirect to error page
export async function load( { params, cookies }) {
    //if route not /signin or /signup then redirect to home page
    if(params.action != "signin" && params.action != "signup"){
        redirect(308, '/')
    }

    console.log(cookies.get('loggedInUser'))

    //if they are currently logged in
    if(cookies.get('loggedInUser') != undefined && cookies.get('loggedInUser') !== '0'){
        redirect(308, '/')
    }

    return {
        meta: {
            title: params.action == 'signin' ? 'Sign in' : 'Sign up'
        }
    }
}


export const actions = {
    createUser: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username')
        const password = data.get('password')
        
        if( username !== null && password !== null) {
            const user = await createUser( username, password)
            console.log(user)
            const id = user?.id?.toString()
            console.log(id)

            let idForCookie = '0'
            if (id) idForCookie = id
            cookies.set('loggedInUser', idForCookie , { path: '/'})
        }
    },
    login: async({}) => {
        // function to check credentials with the ones in the database
            // if correct redirect home
            // else display message saying incorrect info

    }
}


