<!-- THIS IS THE SIGNIN/SIGNUP PAGE -->
<script lang="ts">
    let { data, form } = $props();
</script>

<h1>This is the signin or signup page</h1>

<form method="POST" action="?/createUser" >
    <label class="flex-col">
        <h3>Sign up</h3>
        <input
            name="password"
            autocomplete="off"
            required
        />
        <input
            name="password"
            autocomplete="off"
            required
        />
    </label>
</form>