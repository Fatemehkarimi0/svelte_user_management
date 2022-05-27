<script>
    import Input from "$lib/components/Input.svelte";
    import {goto} from "$app/navigation";
    import CameraIcon from "$lib/icons/CameraIcon.svelte";
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
    })

    let nameInput;
    let mobileInput;
    let birthDateInput;
    let familyInput;
    let idInput;

    function submit() {
        if (
            nameInput.valid() &&
            familyInput.valid() &&
            mobileInput.valid() &&
            birthDateInput.valid() &&
            idInput.valid()
        ) {
            users.editItem(user);
            goto('../');
        }
    }

    function selectImage() {
        document.getElementById('selectedFile').click();
    }

    function fileChanged(e) {
        user.image = URL.createObjectURL(e.target.files[0]);
    }
</script>

<svelte:head>
    <title>کاربر جدید</title>
</svelte:head>

<div class="px-2 py-4 flex flex-col gap-2 bg-base-200">
    <Input bind:this={nameInput} bind:value={user.name} label="نام" />
    <Input bind:this={familyInput} bind:value={user.family} label="نام خانوادگی" />
    <Input bind:this={mobileInput} bind:value={user.mobile} label="موبایل" type="number" />
    <Input bind:this={birthDateInput} bind:value={user.birth_date} label="تاریخ تولد" />
    <Input bind:this={idInput} bind:value={user.code} label="کد" type="number" />
    <Input bind:value={user.address} label="آدرس" required={false} />
    <input id="selectedFile" on:change={fileChanged}
         type="file" class="hidden" accept="image/png, image/jpg, image/jpeg, image/webp" />
    <div class="flex gap-3 mt-4" on:click="{selectImage}">
        <div>عکس:</div>
        {#if user.image}
        <img src="{user.image}" class="rounded-md"
         width="150" height="150" alt="" />
            {:else}
            <div class="text-secondary border-2 border-secondary rounded-md shadow-md px-8 py-10">
                <CameraIcon />
            </div>
        {/if}
    </div>
    <div class="flex gap-2 mt-4">
        <div class="flex-1"></div>
        <button class="btn btn-error" on:click={() => window.history.back()}>بازگشت</button>
        <button class="btn btn-secondary" on:click="{submit}">ذخیره</button>
    </div>
</div>