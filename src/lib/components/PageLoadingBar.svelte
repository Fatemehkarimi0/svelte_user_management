<script>
    export let height = "4px";
    export let color1 = "#fd0b6e";
    export let color2 = "#f5c5d3";
    $: style = `background-color: ${color1}; height: ${height}`;
    $: inner_style = `background-color: ${color2}`;
</script>

<div class="progress" {style}>
    <div class="indeterminate" style={inner_style} />
</div>

<style>
    .progress {
        position: fixed;
        top: 0;
        z-index: 100;
        height: 10px;
        width: 100%;
        border-radius: 2px;
        background-clip: padding-box;
        overflow: hidden;
    }
    .progress .indeterminate:before {
        content: "";
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: indeterminate 2.1s
            cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
            infinite;
    }
    .progress .indeterminate:after {
        content: "";
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: indeterminate-short 2.1s
            cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
            infinite;
        -webkit-animation-delay: 1.15s;
        animation-delay: 1.15s;
    }
    @-webkit-keyframes indeterminate {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }
    @keyframes indeterminate {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }
    @-webkit-keyframes indeterminate-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
    @keyframes indeterminate-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
</style>
