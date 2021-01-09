<template>
  <div class="sidebar bg-white dark:bg-black"><slot/></div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {

    },
}
</script>

<style>
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        max-width: 350px;
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>