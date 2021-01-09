<template>
  <div class="sidebar h-full w-1/4 bg-white text-black dark:bg-gray-700 dark:text-white ">
    <div class="flex">
        <p>Messages</p>
        <div class="w-6 float-right">
            <a href="https://google.com">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </a>
        </div>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {

    },
}
</script>

<style scoped>
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        /* max-width: 350px; */
        display: flex;
        height: 100%;
        /* width: 100%;*/
    }
</style>