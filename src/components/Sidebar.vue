<template>
  <div class="sidebar pb-20 flex flex-col max-h-full h-full w-96 bg-white text-black dark:bg-gray-700 dark:text-white shadow-xl">
    <div class="messages-bar flex pb-2 px-10">
        <div :class="{'hidden': searchOpen}" class="flex flex-row items-center pb-3"><p class="text-xl font-semibold">Messages</p> &nbsp; <div v-if="unreadCount > 0" class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">{{unreadCount}}</div></div>
        <input
                  type="text"
                  :class="{'hidden': !searchOpen}"
                  class="flex w-full mr-8 placeholder-gray-500 dark:placeholder-gray-400 bg-gray-300 dark:bg-gray-600 dark:border-transparent dark:focus:border-gray-800 dark:text-white border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 transition ease-in duration-200 focus:outline-none focus:shadow-outline focus:shadow-lg active:shadow-lg"
                  placeholder="Search by name or phone number"
                  id="search-box"
                  v-model="searchValue"
                  @keyup="updateSearchValue"
                />
        <div class="w-6 float-right absolute right-8 ">
            <button v-if="!searchOpen" @click="openSearch" class="p-0 w-7 h-7 bg-transparent ripple rounded-lg object-cover mouse transition ease-in duration-200 focus:outline-none text-gray-400 hover:text-gray-700 dark:hover:text-white ">
                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <button v-if="searchOpen" @click="openSearch" class="p-0 pt-2 w-7 h-7 bg-transparent ripple rounded-lg object-cover mouse transition ease-in duration-200 focus:outline-none text-gray-400 hover:text-gray-700 dark:hover:text-white ">
                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <div class="new-conversation-section pb-2 pt-2 flex px-10">
        <button @click="showNewConversationModal" class="text-white px-4 w-full h-12 bg-red-600 rounded-full ripple hover:bg-red-700 active:shadow mouse shadow-lg transition ease-in duration-200 focus:outline-none">
          <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          <span>New Conversation</span>
        </button>
    </div>
    <div class="pt-5 pb-5 px-10 ">
          <ul class="flex flex-row items-center justify-between">
            <li>
              <article @click="changeConversations('All')"
                 class="flex items-center pb-3 text-xs font-semibold relative text-indigo-80 cursor-pointer">
                <span :class="{'text-black dark:text-white': currentView == 'All', 'text-gray-400': currentView !== 'All' }" class="transition ease-in hover:text-black dark:hover:text-white">All Conversations</span>
                <span v-if="currentView == 'All'" class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 dark:bg-indigo-400 rounded-full"></span>
              </article>
            </li>
            <li>
              <article @click="changeConversations('Unread')"
                 class="flex items-center pb-3 text-xs font-semibold relative text-indigo-80 cursor-pointer">
                <span :class="{'text-black dark:text-white': currentView == 'Unread', 'text-gray-400': currentView !== 'Unread' }" class="transition ease-in hover:text-black dark:hover:text-white">Unread</span>
                <span v-if="currentView == 'Unread'" class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 dark:bg-indigo-400 rounded-full"></span>
              </article>
            </li>
            <li>
              <article @click="changeConversations('Starred')"
                 class="flex items-center pb-3 text-xs font-semibold relative text-indigo-80 cursor-pointer">
                <span :class="{'text-black dark:text-white': currentView == 'Starred', 'text-gray-400': currentView !== 'Starred' }" class="transition ease-in hover:text-black dark:hover:text-white">Starred</span>
                <span v-if="currentView == 'Starred'" class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 dark:bg-indigo-400 rounded-full"></span>
              </article>
            </li>
          </ul>
    </div>
    <div class="conversations overflow-y-auto h-full scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        <ul class="divide-y divide-gray-100 h-full">
            <Conversations :conversations="conversations" @change-window="changeWindow" :type="currentView" />
        </ul>
    </div>

    <div class="flex options w-full mx-auto px-10 absolute bottom-0 pb-5 p-5" id="options">
        <ul class="flex space-x-4 mx-auto">
            <li>
                <button @click="toggleDarkMode" class="flex items-center focus:outline-none justify-center dark:hover:bg-opacity-10 text-gray-400 hover:text-gray-700 dark:hover:text-indigo-100 dark:text-indigo-500 h-10 w-10 transition ease-in rounded hover:bg-black hover:bg-opacity-10 dark:hover:bg-white:bg-opacity-10 ">
                <svg class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
                </button>
            </li>
            <li>
                <button 
                    class="flex items-center focus:outline-none rounded dark:hover:bg-white:bg-opacity-10 hover:bg-black hover:bg-opacity-10 ">
                    <span class="flex items-center focus:outline-none justify-center  dark:hover:bg-opacity-10 text-gray-400 hover:text-gray-700 dark:hover:text-indigo-100 dark:text-indigo-500 h-10 w-10 rounded-2xl transition ease-in  ">
                        <svg class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </span>
                </button>
          </li>
        </ul>
    </div>

  </div>
</template>

<script>
import Conversations from './Conversations';
import { ref } from 'vue';
import swal from 'sweetalert';
import API from '@/lib/API.js'
import { watch } from 'vue';

export default {
    name: 'Sidebar',
    components:{
        Conversations
    },
    props: {
        unreadCount: [String, Number],
        conversations: Array,
        reload: Boolean,
    },
    setup(props){
        let currentView = ref("All");
        let searchValue = '';
        let searchOpen = ref(false);

        /* might not be needed */
        watch(() => props.reload, (newValue, oldValue) => {
            console.log('conversations changed. reload', oldValue, newValue);
            if(newValue == true){
                loadConversations();
            }
        })
        /* might not be needed */
        
       function loadConversations(){
           console.log(props.reload); //placeholder to avoid error
           //this.$emit('load-new-conversations');
           //API.loadConversations();
       }

        return{
            currentView,
            searchValue,
            searchOpen,
        }
    },
    methods:{
        changeWindow(v, c, p){
            this.$emit("change-window", v, c, p);
        },
        changeConversations(type){
            console.log('switching to', type);
            this.currentView = type;
            this.$emit('change-conversation-type', type);
        },
        toggleDarkMode(){
            this.$emit('toggle-dark-mode');
        },
        showNewConversationModal(){
            swal({
                text: 'Search for a contact by name or phone number to start a conversation',
                content: 'input',
                buttons: ['Cancel', 'Search!']
            }).then((value ) => {
                if (!value) throw null; 
                API.fetchContactSearch(value);
            })
        },
        openSearch(){
            //console.log('toggling search');
            this.searchOpen = !this.searchOpen;
            if(!this.searchOpen){
                //console.log('search is closing')
                this.searchValue = '';
                this.$emit('filter-list', this.searchValue);
            }
        },
        updateSearchValue(){
            //console.log('Searching for:', this.searchValue.toLowerCase());
            this.$emit('filter-list', this.searchValue.toLowerCase());
        }
    }
}
</script>

<style scoped>
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
    }
        .scrollbar-w-2::-webkit-scrollbar {
        width: 0.55rem;
        height: 0.55rem;
    }

    .scrollbar-track-blue-lighter::-webkit-scrollbar-track {
        --bg-opacity: .10;
        /*background-color: #ffe2ce;*/
        background-color: rgba(59, 130, 246, var(--bg-opacity));
    }

    .scrollbar-thumb-blue::-webkit-scrollbar-thumb {
        --bg-opacity: .5;
        /*background-color: #ff8c80;*/
        background-color: rgba(59, 130, 246, var(--bg-opacity));
    }

    .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
        border-radius: 0.55rem;
    }
</style>