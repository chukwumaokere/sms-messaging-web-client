<template>
  <div v-if="currentConvo > 0 && loading == false" class="m flex flex-col pb-24 bg-gray-300 text-black dark:bg-gray-600 dark:text-black w-full relative">
      <div class="contact-name-bar bg-blue-500 p-5 px-10 shadow-lg" style="width: inherit">
          <div class="contact-name text-xl text-white">
            <div class="flex">
                <p :id="currentConvo">{{contactName}} &nbsp; ({{phoneNumber}}) </p>
                <div class="w-6 float-right absolute top-3 right-36 ">
                    <ul class="flex space-x-4">
                        <li>
                            <button @click="composeEmail('test@test.com', contactName)" class="w-10 h-10 bg-transparent rounded-lg object-cover mouse transition ease-in duration-200 focus:outline-none text-white text-opacity-50 hover:text-opacity-100 hover:bg-black hover:bg-opacity-20">
                                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button @click="initiateCall(phoneNumber, contactName)" class="w-10 h-10 bg-transparent rounded-lg object-cover mouse transition ease-in duration-200 focus:outline-none text-white text-opacity-50 hover:text-opacity-100 hover:bg-black hover:bg-opacity-20">
                                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button @click="openMoreMenu" class="w-10 h-10 bg-transparent rounded-lg object-cover mouse transition ease-in duration-200 focus:outline-none text-white text-opacity-50 hover:text-opacity-100 hover:bg-black hover:bg-opacity-20">
                                <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
          </div>          
      </div>
      <div v-if="fullConversation.length > 0" id="messages" class="px-10 pt-5 chat-area pb-15 overflow-y-auto max-h-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          <ChatMessage v-for="(message, mkey) in fullConversation" :key="message.id" :message="message" :picture="picture" :lastMessageWithImageLoading="mkey == fullConversation.length - 1 && lastMessageHadImage ? true : false" :messageSending="messageSending" />
            <!-- Loading message -->
            <div :class="{'hidden': (messageSending == false && lastMessageHadImage == false) || receivingSMS == true}" class="col-start-6 col-end-13 p-3 rounded-lg">
                <div class="flex items-center justify-start flex-row-reverse">
                    <img :src="imgpath" alt="My profile" class="w-10 h-10 rounded-full ">
                    <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl dark:bg-blue-500 dark:text-white">
                        <div>
                            <p>Sending message...</p>
                            <svg v-if="lastMessageHadImage" class="animate-spin h-full w-10 text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500 w-max dark:text-gray-200">
                                <!--{{new Date(Date.now()).toDateString()}}--> Sending...
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
      
      <div v-else class="m bg-gray-300 dark:bg-gray-600 dark:text-white text-black dark:bg-gray-300 dark:text-black w-full relative" >
        <div class="select-a-convo p-10 flex justify-center h-full">
            <h1 class="animate-bounce place-self-center text-2xl">👇 Send a message below to start chatting with {{contactName}}!</h1>
        </div>
      </div>
      
      <div class="input-section px-10 pr-16 w-full bottom-0 absolute pb-10 flex " style="width: inherit">
          <input
                id="file-upload"
                style="height:0px; width:0px; overflow:hidden"
                name="file"
                type="file"
                ref="file"
                v-on:change="handleFileUpload()"
                />
          <div class="relative w-full">
                <input
                  type="text"
                  class="flex pr-36 placeholder-gray-400 dark:placeholder-gray-200 dark:bg-gray-700 dark:border-transparent dark:focus:border-gray-800 dark:text-white w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 transition ease-in duration-200 focus:outline-none focus:shadow-outline focus:shadow-lg active:shadow-lg"
                  placeholder="Write something..."
                  id="message-body"
                  autocomplete="off"
                  @keyup.enter="sendMessage(phoneNumber)"
                />
                <span>
                    <button v-if="uploadedFile" @click="clearFile" class="absolute h-full w-5 right-28 mr-2 top-0 transition ease-in hover:opacity-100 focus:outline-none">
                        <svg class="absolute h-full w-5 right-0 top-0 text-black dark:text-white opacity-50 dark:opacity-70 transition ease-in hover:opacity-100 focus:outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <small v-if="uploadedFile" id="file-uploaded-text" class="absolute dark:text-white opacity-70 right-10 top-0 flex items-center justify-center h-full">File attached.</small>
                    <button v-if="!file_uploading" @click="fileUpload()" class="absolute focus:outline-none flex items-center justify-center h-full w-12 right-0 top-0 transition ease-in text-gray-400 hover:text-gray-600 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="{'text-green-500 dark:text-green-500': uploadedFile}" class="h-6 w-6 transition ease-in text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                    </button>
                    <button v-if="file_uploading" class="absolute focus:outline-none flex items-center justify-center h-full w-12 right-0 top-0 transition ease-in text-gray-400 hover:text-gray-600 dark:hover:text-white">
                        <svg class="animate-spin h-full w-5 text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </button>
                </span>
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
      </div>
  </div>
  <div v-if="!currentConvo > 0" class="m bg-gray-300 dark:bg-gray-600 dark:text-white text-black dark:bg-gray-300 dark:text-black w-full relative" >
      <div class="select-a-convo p-10 flex justify-center h-full">
        <h1 class="animate-bounce place-self-center text-2xl">👈 Select a conversation from the left menu to get started!</h1>
      </div>
  </div>
  <div v-if="loading" class="m bg-gray-300 dark:bg-gray-600 dark:text-white text-black dark:bg-gray-300 dark:text-black w-full relative" >
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
          <ChatSkeleton />
      </div>
  </div>
</template>

<script>
import API from '@/lib/API.js'
import ChatMessage from './ChatMessage';
import ChatSkeleton from './ChatSkeleton';
import swal from 'sweetalert';
import { ref, onUpdated, onMounted, onBeforeUpdate, onBeforeMount, watch } from 'vue';
import imgpath from "@/assets/placeholderimg.png";
export default {
    name: 'ChatWindow',
    emits: ['message-sent'],
    components:{
        ChatMessage,
        ChatSkeleton,
    },
    props: {
        conversationid: Number,
        currentConvo: [Number, String],
        contactName: String,
        phoneNumber: String,
        reload: Boolean,
        lastMessageHadImage: Boolean,
        messageSending: Boolean,
        receivingSMS: Boolean,
    },
    setup(props){
        let fullConversation = ref([]);
        let placeholderConversation = [
            {
                id: 50,
                message: "I was wondering what documents I submitted",
                direction: 'Inbound',
                unread: false,
                timestamp: '2020-01-10 07:00:44',
                hasimage: false,
                isimage: false,
                imgsrc: "",
                contact_id: 736,
            },
            {
                id: 60,
                message: "",
                direction: 'Outbound',
                unread: false,
                timestamp: '2020-01-10 07:10:44',
                hasimage: true,
                isimage: true,
                contact_id: 736,
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
                contact_id: 736,
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
                contact_id: 736,
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
                contact_id: 736,
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
                contact_id: 736,
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
                contact_id: 736,
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
                contact_id: 736,
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
                contact_id: 736,
            },

        ]
        let uploadedFile = ref();
        let loading = ref(true);
        let contact_id = ref(undefined);
        let file_uploading = ref(false);
        let picture = ref('');

        function loadConversation(showLoading, lastMessageHadImageVal){
            if(showLoading){
                loading.value = true;
            }
            API.loadConversationData(props.phoneNumber, props.contactName).then(res => {
                if (lastMessageHadImageVal){
                    console.log('last sent Message did have an image');
                }
                if (res && res.success === true){
                    console.log('successfully retrieved result for', props.currentConvo, props.phoneNumber);
                    if(fullConversation.value === res.convo){
                        console.log('same conversation, no need to reload');
                        //do nothing
                        loading.value = false;
                    }else{
                        loading.value = false;
                        fullConversation.value = res.convo;
                        contact_id.value = Number(res.contact_id);
                        picture.value = res.picture;
                        //console.log('compare these two', fullConversation.value, res.convo);
                    }
                    //console.log('res convo', res.convo);
                }else{
                    console.log('failed to receive result for', props.currentConvo);
                    //fullConversation.value = placeholderConversation;
                    fullConversation.value = [];
                    loading.value = false;
                    contact_id.value = Number(1217); //Fallback contact in Vtiger
                }
                //console.log('now contact id is', contact_id);
            })
        }
        
        function scrollToBottom(){
            let container = document.getElementById('messages');
            container.scrollTop = container.scrollHeight;

            setTimeout(() => { //try again in 500 milliseconds if it doesnt work
                let container = document.getElementById('messages');
                container.scrollTop = container.scrollHeight;
            }, 500);
        }

        onBeforeMount(() => {
            if(props.currentConvo > 0){
                console.log('from onBeforeMount', props.currentConvo, props.phoneNumber);
                //loadConversation(true);
            }else{
                loading.value = false;
            }
        });

        onMounted(() => {
            console.log('mounted', props.phoneNumber);
            try{ 
                scrollToBottom();
            }catch(err){
                //console.log(err);
                return err;
            }
        });

        onUpdated(() => {
            console.log('updated');
            console.log('THE THREE VALUES ARE - CHATWINDOW.VUE', props.lastMessageHadImage, props.messageSending, props.receivingSMS);
            try{ 
                scrollToBottom();
                var tooltips = document.querySelectorAll('.tooltip div.tt');
                var tooltipsL = document.querySelectorAll('.tooltipL div.tt');
                //console.log(tooltips);
                //console.log(tooltipsL);
                window.onmousemove = function (e) {
                    var x = (e.clientX - 240) + 'px',
                        y = (e.clientY + 25) + 'px',
                        xL = (e.clientX + 20) + 'px',
                        yL = (e.clientY + 25) + 'px';
                    for (var i = 0; i < tooltips.length; i++) {
                        tooltips[i].style.top = y;
                        tooltips[i].style.left = x;
                    }
                    for (var k = 0; k < tooltipsL.length; k++) {
                        tooltipsL[k].style.top = yL;
                        tooltipsL[k].style.left = xL;
                    }
                };
            }catch(err){
                //console.log(err);
                return err;
            }
        });

        onBeforeUpdate(() => {
            console.log('before update');
        });
        
        /*
        watch(() => props.currentConvo, (newValue, oldValue) => {
            console.log('value switched to', oldValue, newValue);
            loadConversation(true);
        });
        */

        watch(() => props.phoneNumber, (newValue, oldValue) => {
            console.log('value switched to', oldValue, newValue);
            if(props.phoneNumber !== 'No Phone Number'){
                loadConversation(true);
            }
        });

        //might not be needed
        watch(() => props.reload, (newValue, oldValue) => {
            console.log('new Chat incoming. reload', oldValue, newValue);
            if(newValue == true){
                loadConversation(false, props.lastMessageHadImage);
            }
        })
        

        return{
            fullConversation,
            placeholderConversation,
            loadConversation,
            uploadedFile,
            loading,
            contact_id,
            file_uploading,
            picture,
            imgpath,
        }
    },
    updated(){

    },
    beforeUpdate(){
        console.log('before updated 2')
    },
    methods:{
        sendMessage(t){
            let b = document.getElementById('message-body').value;
            let a = this.uploadedFile ? this.uploadedFile : undefined ;
            
            if(b != '' || a !== undefined){
                console.log('triggering twilio api', t, b)
                API.sendSMSMessage(t, b, a).then(res => {
                    let hadattachment;
                    if(a !== undefined){
                        hadattachment = true;
                    }else{
                        hadattachment = false;
                    }
                    if(res === true){
                        document.getElementById('message-body').value = '';
                        this.uploadedFile = undefined;
                        this.$emit('message-sent', hadattachment);
                    }
                });
            }else{
                swal('Error', 'Please enter a message or provide an attachment!', 'error');
            }
        },
        uploadImage(event){
            console.log(event);
        },
        fileUpload(){
            console.log('initiating file upload');
            document.getElementById('file-upload').click();
        },
        handleFileUpload(){
            this.file_uploading = true;
            var reader = new FileReader();
            let val = this.$refs.file.value;
            let el = this.$refs.file.files[0];
            if(val !== null){
                reader.readAsDataURL(el);
                reader.onload = () => {
                    console.log(reader.result);
                    API.uploadImageAndFetchURL(this.contact_id, reader.result).then(res => {
                        if(res.success === true){
                            let urlFromAPI = res.return_url;
                            console.log('path of file is', urlFromAPI);
                            this.uploadedFile = urlFromAPI;
                            this.file_uploading = false;
                        }else{
                            this.uploadedFile = undefined;
                            console.log('failedToFetchURL from', reader.result, this.contact_id);
                            this.file_uploading = false;
                            this.$refs.file.value=null;
                        }
                    }).catch(err => {
                        console.log('there was an error on the server side', err);
                        this.uploadedFile = undefined;
                        this.file_uploading = false;
                        this.$refs.file.value=null;
                    })
                }
            }
        },
        clearFile(){
            this.uploadedFile = undefined;
            this.$refs.file.value=null;
        },
        composeEmail(email, name){
            console.log('initiating composeEmail');
            API.composeEmail(email, name)
        },
        initiateCall(phone, name){
            console.log('starting call');
            API.initiateCall(phone, name)
        },
        openMoreMenu(){
            console.log('opening more menu');
        }
    },
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