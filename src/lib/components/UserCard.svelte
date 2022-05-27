<script>
    import EditIcon from "$lib/icons/EditIcon.svelte";
    import CheckIcon from "$lib/icons/CheckIcon.svelte";
    import {users} from "$lib/stores/users";

    export let user;

    function onChange() {
        users.updateChecked(user);
        users.updatePins();
    }
</script>

<div class="border border-gray-300 bg-base-200 p-2 shadow-md flex flex-nowrap gap-2 rounded-md">
    <img src="{user.image}" class="rounded-md w-32 object-cover"
         width="150" height="150" alt="" />
    <div class="w-full flex flex-col gap-2">
        <div class="flex">
            <div class="flex-1"></div>
            <div class="flex gap-4 items-center">
                <a href="./edit-user/{user.id}" class="btn btn-ghost btn-sm btn-circle">
                    <EditIcon />
                </a>
                <input bind:checked={user.checked} on:change="{onChange}"
                    type="checkbox" class="checkbox checkbox-secondary" />
            </div>
        </div>
        <div class="grid grid-cols-2 gap-1">
            <din>نام:</din>
            <din class="font-bold">{user.name}</din>
        </div>
        <div class="grid grid-cols-2 gap-1">
            <din>نام خانوادگی:</din>
            <din class="font-bold">{user.family}</din>
        </div>
        <div class="grid grid-cols-2 gap-1">
            <din>تاریخ تولد:</din>
            <din class="font-bold">{user.birth_date}</din>
        </div>
        <div class="grid grid-cols-2 gap-1">
            <din>کد:</din>
            <din class="font-bold">{user.code}</din>
        </div>
        <div class="flex">
            <span class="{user.confirmed ? 'text-success' : 'text-error'}">
                <CheckIcon />
            </span>
            <div class="flex-1"></div>
            <div class="flex">
                <a href="./review/{user.id}" class="btn btn-secondary btn-sm px-8">
                    بررسی
                </a>
            </div>
        </div>
    </div>
</div>