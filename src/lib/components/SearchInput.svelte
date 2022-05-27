<script>
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import {users} from "$lib/stores/users";

    export let search = "";

    function onSearch() {
        users.search(search);
    }
</script>

<div class="relative">
    <input bind:value={search} on:input="{onSearch}" type="search"
        class="input input-secondary w-full shadow-xl pr-12 text-lg"
        placeholder="جستجوی نام فرد" />
    <span class="absolute top-2 right-2">
        <SearchIcon />
    </span>
</div>

<style>
    input[type=search]::-webkit-search-cancel-button {
        -webkit-appearance: searchfield-cancel-button;
    }
</style>