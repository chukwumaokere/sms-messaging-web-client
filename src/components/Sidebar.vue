<template>
  <div class="sidebar h-full w-96 bg-white text-black dark:bg-gray-700 dark:text-white shadow-xl ">
    <div class="messages-bar flex pb-5 px-10">
        <div class="flex flex-row items-center"><p class="text-xl font-semibold">Messages</p> &nbsp; <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">{{unreadCount}}</div></div>
        <div class="w-6 float-right absolute right-8 ">
            <button class="p-0 w-7 h-7 bg-transparent ripple rounded-lg object-cover hover:bg-transparent hover:shadow active:shadow-lg mouse transition ease-in duration-200 focus:outline-none">
                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </button>
        </div>
    </div>
    <div class="new-conversation-section pb-5 flex px-10">
        <button class="text-white px-4 w-full h-12 bg-red-600 rounded-full ripple hover:bg-red-700 active:shadow mouse shadow-lg transition ease-in duration-200 focus:outline-none">
          <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
          <span>New Conversation</span>
        </button>
    </div>
    <div class="mt-5 mb-5 px-10 ">
          <ul class="flex flex-row items-center justify-between">
            <li>
              <article @click="changeConversations('All')"
                 class="flex items-center pb-3 text-xs font-semibold relative text-indigo-80 cursor-pointer">
                <span>All Conversations</span>
                <span class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
              </article>
            </li>
            <li>
              <article @click="changeConversations('Unread')"
                 class="flex items-center pb-3 text-xs font-semibold cursor-pointer">
                <span class="transition ease-in text-gray-400 hover:text-gray-600">Unread</span>
              </article>
            </li>
            <li>
              <article @click="changeConversations('Starred')"
                 class="flex items-center pb-3 text-xs font-semibold cursor-pointer">
                <span class="transition ease-in text-gray-400 hover:text-gray-600">Starred</span>
              </article>
            </li>
          </ul>
        </div>
    <div class="conversations">
        <ul class="divide-y divide-gray-100">
            <Conversations :conversations="conversations" @change-window="changeWindow"/>
        </ul>
    </div>
  </div>
</template>

<script>
import Conversations from './Conversations';
export default {
    name: 'Sidebar',
    components:{
        Conversations
    },
    props: {
        unreadCount: [String, Number],
        conversations: Array,
    },
    methods:{
     changeWindow(v, c){
        this.$emit("change-window", v, c);
      },
    changeConversations(type){
        console.log('switching to', type);
    },
 }
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