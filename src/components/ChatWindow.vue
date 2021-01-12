<template>
  <div v-if="currentConvo > 0" class="m flex flex-col pb-24 bg-gray-300 text-black dark:bg-gray-600 dark:text-black w-full relative">
      <div class="contact-name-bar bg-blue-500 p-5 px-10 shadow-lg" style="width: inherit">
          <div class="contact-name text-xl text-white">
            <div class="flex">
                <p :id="currentConvo">{{contactName}} &nbsp; ({{phoneNumber}}) </p>
                <div class="w-6 float-right absolute right-8 ">
                    <button class="p-0 w-7 h-7 bg-transparent rounded-lg object-cover mouse transition ease-in duration-200 focus:outline-none text-white text-opacity-50 hover:text-opacity-100">
                        <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
            </div>
          </div>          
      </div>
      <div id="messages" class="px-10 pt-5 chat-area pb-15 overflow-y-auto max-h-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          <ChatMessage v-for="message in fullConversation" :key="message.id" :message="message" />
      </div>
      <div class="input-section px-10 pr-16 w-full bottom-0 absolute pb-10 flex " style="width: inherit">
          <!-- Added:  'flex space-x-8' above -->
          <div class="relative w-full">
                <input
                  type="text"
                  class="flex placeholder-gray-400 dark:placeholder-gray-200 dark:bg-gray-700 dark:border-transparent dark:focus:border-gray-800 dark:text-white w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 transition ease-in duration-200 focus:outline-none focus:shadow-outline focus:shadow-lg active:shaodw-lg"
                  placeholder="Write something..."
                  id="message-body"
                  @keyup.enter="sendMessage(phoneNumber)"
                />
                <button class="absolute focus:outline-none flex items-center justify-center h-full w-12 right-0 top-0 transition ease-in text-gray-400 hover:text-gray-600 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 transition ease-in text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                    </svg>
                </button>
              </div>

              <div class="ml-6">
                <button @click="sendMessage(phoneNumber)" class="flex items-center focus:outline-none justify-center h-10 w-10 rounded-full transition ease-in bg-blue-400 hover:bg-blue-600 shadow-xl text-white text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                    <svg class="w-5 h-5 transform rotate-90 -mr-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </button>
              </div>
              <!--
              <button
                    class="p-0 w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow-lg transition ease-in duration-200 focus:outline-none text-white">
                <svg class="w-5 h-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
            </button>
            -->
          
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
  <div v-else class="m bg-gray-300 dark:bg-gray-600 dark:text-white text-black dark:bg-gray-300 dark:text-black w-full relative" >
      <div class="select-a-convo p-10 flex justify-center h-full">
        <h1 class="animate-bounce place-self-center text-2xl">👈 Select a conversation from the left menu to get started!</h1>
      </div>
  </div>
</template>

<script>
import API from '@/lib/API.js'
import ChatMessage from './ChatMessage';
import swal from 'sweetalert'
export default {
    name: 'ChatWindow',
    components:{
        ChatMessage,
    },
    props: {
        conversationid: Number,
        currentConvo: [Number, String],
        contactName: String,
        phoneNumber: String,
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
                imgsrc: "",
            },
            {
                id: 60,
                message: "",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:10:44',
                hasimage: true,
                isimage: true,
                imgsrc: "https://www.ocregister.com/wp-content/uploads/2018/10/0418_nws_idb-l-allen-col-0418-1.jpg",
            },
            {
                id: 70,
                message: "We have this for your drivers license",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:11:22',
                hasimage: false,
                isimage: false,
                imgsrc: "",
            },
            {
                id: 80,
                message: "Do you have the papers I signed?",
                direction: 'Inbound',
                unread: false,
                timestamp: '2020-01-10 07:18:44',
                hasimage: false,
                isimage: false,
                imgsrc: "",
            },
            {
                id: 90,
                message: "There you go!",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:19:44',
                hasimage: true,
                isimage: false,
                imgsrc: "https://www.julienslive.com/images/lot/1962/196202_0.jpg",
            },
            {
                id: 100,
                message: "Thank you! 🙏 I really appreciate it a lot!",
                direction: 'Inbound',
                unread: true,
                timestamp: '2020-01-10 07:21:44',
                hasimage: false,
                isimage: false,
                imgsrc: "",
            },
            {
                id: 110,
                message: "Did I forget anything else??",
                direction: 'Inbound',
                unread: false,
                timestamp: '2020-01-10 07:18:44',
                hasimage: false,
                isimage: false,
                imgsrc: "",
            },
            {
                id: 120,
                message: "Nope we have everything we need, just waiting to hear from your insurance!",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:19:44',
                hasimage: false,
                isimage: false,
                imgsrc: "",
            },
            {
                id: 130,
                message: "Thank you again! Just let me know!",
                direction: 'Inbound',
                unread: true,
                timestamp: '2020-01-10 07:21:44',
                hasimage: false,
                isimage: false,
                imgsrc: "",
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
    methods:{
        sendMessage(t){
            let b = document.getElementById('message-body').value;
            let a = []; // need to fetch the array of images that are uploaded.
            if(b != ''){
                console.log('triggering twilio api', t, b)
                API.sendSMSMessage(t, b, a).then(res => {
                    if(res === true){
                        document.getElementById('message-body').value = '';
                    }
                });
            }else{
                swal('Error', 'Please enter a message or provide an attachment!', 'error');
            }
        }
    }
}
</script>

<style scoped>
    .m{
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