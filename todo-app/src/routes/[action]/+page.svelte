<!-- THIS IS THE SIGNIN/SIGNUP PAGE -->
<script lang="ts">
    let { data, form } = $props();
    import { enhance } from '$app/forms'
</script>


<div class="flex flex-col bg-slate-500 h-100 rounded-xl w-150 max-w-150 justify-center items-center">
    <form method="POST"  use:enhance>
        <label class="flex flex-col justify-center items-center gap-3">
            <input class="bg-white rounded text-2xl p-3 w-100"
            name="username"
            autocomplete="off"
            required
            />
            <input class="bg-white rounded text-2xl p-3 w-100"
            name="password"
            autocomplete="off"
            type="password"
            required
            />
            <input
            name="pageFunction"
            bind:value={data.pageFunction}
            hidden
            />
            {#if form?.error}
                <p class="text-red-700">{form.error}</p>
            {/if}
            <button class="bg-slate-900 text-white p-2 
            rounded cursor-pointer hover:bg-blue-950 text-2xl w-60">Submit</button>
            {#if data.pageFunction == 'signup'}
                <p>Have an account already?</p>
                <a href="/signin" class="hover:text-blue-950">Click here to Sign in!</a>
            {:else}
                <p>Don't have an Account</p>
                <a href="/signup" class="hover:text-blue-950">Click here to Sign Up!</a>
            {/if}
        </label>
    </form>
</div>
