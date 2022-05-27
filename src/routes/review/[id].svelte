<script>
    import {goto} from "$app/navigation";
    import RowItem from "$lib/components/RowItem.svelte";
    import CheckIcon from "$lib/icons/CheckIcon.svelte";
    import CloseIcon from "$lib/icons/CloseIcon.svelte";
    import {users} from "$lib/stores/users";
    import {page} from "$app/stores";
    import { onMount } from "svelte";

    let user = {};

    onMount(() => {
        const user_id = $page.params.id;
        for (let i = 0; i < $users.length; i++) {
            if ($users[i].id == user_id) {
                user = $users[i];
                break;
            }
        }
    });

    function submit() {
        users.editItem(user);
        goto('../');
    }
</script>

<svelte:head>
    <title>بررسی کاربر</title>
</svelte:head>

<div class="py-4 px-2 flex flex-col gap-6">
    <RowItem bind:user key="c_name" value={user.name} label="نام:" />
    <RowItem bind:user key="c_family" value={user.family} label="نام خانوادگی:" />
    <RowItem bind:user key="c_mobile" value={user.mobile} label="موبایل:" />
    <RowItem bind:user key="c_birth_date" value={user.birth_date} label="تاریخ تولد:" />
    <RowItem bind:user key="c_code" value={user.code} label="کد:" />
    <RowItem bind:user key="c_address" value={user.address} label="آدرس:" />
    <div class="flex gap-3">
        <div>عکس:</div>
        <img src="{user.image}" class="rounded-md"
         width="150" height="150" alt="" />
         <div class="flex flex-col">
            <div class="flex-1"></div>
            <div>
                <span class="{user.c_image == false ? 'text-error' : ''}"
                     on:click="{() => user.c_image = false}">
                    <CloseIcon />
                </span>
                <span class="{user.c_image ? 'text-success' : ''}"
                     on:click="{() => user.c_image = true}">
                    <CheckIcon />
                </span>
            </div>
        </div>
    </div>
    <div class="flex gap-2 mt-4">
        <div class="flex-1"></div>
        <button class="btn btn-error" on:click={() => window.history.back()}>بازگشت</button>
        <button class="btn btn-secondary" on:click="{submit}">ذخیره</button>
    </div>
</div>