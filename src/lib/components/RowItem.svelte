<script>
    import CheckIcon from "../icons/CheckIcon.svelte";
    import CloseIcon from "../icons/CloseIcon.svelte";

    export let label;
    export let value;
    export let key;
    export let user;
</script>

<div class="grid grid-cols-12 gap-3 items-center text-lg">
    <div class="col-span-4">{label}</div>
    <div class="col-span-5 font-bold">{value}</div>
    <div class="col-span-3 flex">
        <div class="flex-1"></div>
        <span class="{user[key] == false ? 'text-error' : ''}"
            on:click="{() => user[key] = false}"><CloseIcon /></span>
        <span class="{user[key] ? 'text-success' : ''}"
        on:click="{() => user[key] = true}"><CheckIcon /></span>
    </div>
</div>