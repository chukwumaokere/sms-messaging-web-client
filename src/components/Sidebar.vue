<template>
  <div class="sidebar h-full w-1/4 bg-white text-black dark:bg-gray-700 dark:text-white ">
    <div class="messages-bar flex pb-5">
        <p class="text-xl">Messages</p>
        <div class="w-6 float-right absolute right-8 ">
            <button class="p-0 w-7 h-7 bg-transparent rounded-full hover:bg-transparent hover:shadow active:shadow-lg mouse transition ease-in duration-200 focus:outline-none">
                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </button>
        </div>
    </div>
    <div class="new-conversation-section pb-5 flex">
        <!--
        <div class="w-6">
            <button class="p-0 w-12 h-12 bg-transparent rounded-full hover:bg-transparent active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
        </div>
        -->
        <button class="text-white px-4 w-auto h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
          <span>New Conversation</span>
        </button>
    </div>
    <div class="conversations">
        <slot/>
    </div>
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
        /* display: flex; */
        height: 100%;
        /* width: 100%;*/
    }
</style>