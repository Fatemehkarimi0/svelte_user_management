<script>
    import ErrorIcon from "$lib/icons/ErrorIcon.svelte";

    export let value;
    export let label;
    export let required = true;
    export let type = "text";
    let showError = false;

    export function valid() {
        if (required && (value == null || value == "")) {
            showError = true;
            return false;
        }
        showError = false;
        return true;
    }
</script>

<div class="flex flex-col gap-2">
    <label for={label} class="pr-1">
        {label}
        {#if required}
            <span class="text-error font-bold">*</span>
        {/if}
    </label>
    {#if type == "number"}
        <input
            id={label}
            bind:value
            autocomplete="off"
            type="number"
            on:input={valid}
            placeholder="{label} خود را وارد نمایید"
            class="input w-full {showError ? 'input-error' : 'input-secondary'}"
        />
    {:else}
        <input
            id={label}
            bind:value
            autocomplete="off"
            on:input={valid}
            placeholder="{label} خود را وارد نمایید"
            class="input w-full {showError ? 'input-error' : 'input-secondary'}"
        />
    {/if}
    {#if showError}
        <div class="text-error pr-1 text-sm font-bold">
            <ErrorIcon />
            {label} اجباری است
        </div>
    {/if}
</div>
