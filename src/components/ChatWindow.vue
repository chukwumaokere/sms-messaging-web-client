<template>
  <div v-if="currentConvo > 0" class="m bg-gray-300 text-black dark:bg-gray-300 dark:text-black w-full relative">
      <div class="contact-name-bar bg-blue-500 p-5 px-10 shadow-lg" style="width: inherit">
          <div class="contact-name text-xl text-white">
            <div class="flex">
                <p :id="currentConvo">{{contactName}} </p>
                <div class="w-6 float-right absolute right-8 ">
                    <button class="p-0 w-7 h-7 bg-transparent rounded-lg object-cover hover:bg-transparent hover:shadow active:shadow-lg mouse transition ease-in duration-200 focus:outline-none">
                        <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
            </div>
          </div>          
      </div>
      <div class="px-10 pt-5 chat-area">
          <ChatMessage v-for="message in fullConversation" :key="message.id" :message="message" />
      </div>
      <div class="input-section px-10 pr-16 w-full bottom-0 absolute mb-10 flex space-x-8" style="width: inherit">
          <!-- Added:  'flex space-x-8' above -->
          <div class="relative w-full">
                <input
                  type="text"
                  class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  placeholder="Write Something"
                />
                <button
                  class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <button
                    class="p-0 w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow-lg transition ease-in duration-200 focus:outline-none text-white">
                <svg class="w-5 h-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
            </button>
          
        <!-- Old Input Field
        <div class="w-full flex flex-wrap items-stretch relative space-x-8">
            <input type="text" placeholder="Write Something" class="flex-shrink flex-grow flex-auto px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none transition ease-in duration-200 focus:outline-none focus:shadow-outline focus:shadow-lg active:shaodw-lg"/>
            <button
                    class="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow-lg transition ease-in duration-200 focus:outline-none text-white">
                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
            </button>
        </div>
        -->
      </div>
  </div>
  <div v-else class="m bg-gray-300 text-black dark:bg-gray-300 dark:text-black w-full relative" >
      <div class="select-a-convo p-10 flex justify-center h-full">
        <h1 class="animate-bounce place-self-center text-2xl">👈 Select a conversation from the left menu to get started!</h1>
      </div>
  </div>
</template>

<script>
import API from '@/lib/API.js'
import ChatMessage from './ChatMessage';
export default {
    name: 'ChatWindow',
    components:{
        ChatMessage,
    },
    props: {
        conversationid: Number,
        currentConvo: [Number, String],
        contactName: String,
    },
    setup(){
        let fullConversation = [
            {
                id: 50,
                message: "I was wondering what documents I submitted",
                direction: 'Inbound',
                unread: false,
                timestamp: '2020-01-10 07:00:44',
                hasimage: false,
                isimage: false,
            },
            {
                id: 60,
                message: "",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:10:44',
                hasimage: true,
                isimage: true,
            },
            {
                id: 70,
                message: "We have this for your drivers license",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:11:22',
                hasimage: false,
                isimage: false,
            },
            {
                id: 80,
                message: "Do you have the papers I signed?",
                direction: 'Inbound',
                unread: false,
                timestamp: '2020-01-10 07:18:44',
                hasimage: false,
                isimage: false,
            },
            {
                id: 90,
                message: "There you go!",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:19:44',
                hasimage: true,
                isimage: false,
            },
            {
                id: 100,
                message: "Thank you! 🙏",
                direction: 'Inbound',
                unread: true,
                timestamp: '2020-01-10 07:21:44',
                hasimage: false,
                isimage: false,
            },
        ];
        
        return{
            fullConversation,
        }
    },
    updated(){
        API.loadConversationData(this.currentConvo).then(res => {
            if (res.success){
                console.log('successfully retrieved result for', this.currentConvo);
                this.fullConversation = res;
            }else{
                console.log('failed to receive result for', this.currentConvo);
                //this.fullConversation = [];
            }
        })
    },
}
</script>

<style scoped>
    .m{
        height: 100%;    
    }
   
</style>