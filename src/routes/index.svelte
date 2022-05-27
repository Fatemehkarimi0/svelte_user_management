<script>
    import SearchInput from "$lib/components/SearchInput.svelte";
    import DeleteIcon from "$lib/icons/DeleteIcon.svelte";
    import UserCard from "$lib/components/UserCard.svelte";
    import AddIcon from "$lib/icons/AddIcon.svelte";
    import {users} from "$lib/stores/users";

    let selectAll = false;

    $: hasAnyCardChecked = () => {
        for (let i = 0; i < $users.length; i++) {
            if ($users[i].checked) {
                return true;
            }
        }
        return false;
    };

    function onChange(e) {
        users.changeAllChecked(selectAll);
    }

    function removeAll() {
        if(selectAll){
            users.clear();
            selectAll = false;
        }
        else{
            users.removeItem();
        }
    }

    function newUser() {
        
    }
</script>

<svelte:head>
    <title>صفحه اصلی</title>
</svelte:head>

<div class="flex flex-col gap-4 pb-16">
    <div class="sticky top-0 bg-base-100 p-2 z-10">
        <SearchInput />
        <div class="flex flex-nowrap mt-4">
            <input bind:checked={selectAll} on:change="{onChange}"
                type="checkbox" class="checkbox checkbox-secondary" />
            <div class="flex-1"></div>
            {#if selectAll || hasAnyCardChecked()}
                <button class="btn btn-ghost btn-sm btn-circle text-error" on:click="{removeAll}">
                    <DeleteIcon />
                </button>
            {/if}
        </div>
    </div>
    <div class="flex flex-col gap-4 p-2">
        {#each $users as user}
            {#if !user.hide}
                <UserCard {user} />
            {/if}
        {/each}
    </div>
</div>

<a href="./new-user"
    class="btn btn-primary btn-circle btn-lg shadow-2xl z-10 fixed bottom-4 left-4 text-white"
    on:click="{newUser}">
    <AddIcon />
</a>