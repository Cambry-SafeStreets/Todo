<!-- THIS IS THE SIGNIN/SIGNUP PAGE -->
<script lang="ts">
    let { data, form } = $props();
    import { enhance } from '$app/forms'
</script>

<h1>This is the signin or signup page</h1>

<form method="POST" action="?/createUser" use:enhance>
    <label class="flex-col">
        <h3>Sign up</h3>
        <input
            name="username"
            autocomplete="off"
            required
        />
        <input
            name="password"
            autocomplete="off"
            required
        />
        <button>Submit</button>
    </label>
</form>