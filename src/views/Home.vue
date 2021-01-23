<template>
  <div class="home h-full pl-96">
    <!--<div @click="triggerFullReload"><p>for testing purposes only</p></div> -->
    <Container class="h-full">
        <ChatWindow :reload="reloadChatWindow" :currentConvo="currentConvo" :contactName="contact_name" :phoneNumber="phone_number" @message-sent="messageSent" :lastMessageHadImage="lastMessageHadImage" :messageSending="messageSending" :receivingSMS="receivingSMS" />
    </Container>
    <Sidebar class="pt-5" :reload="reloadSidebar" :unreadCount="unreadcount" :conversations="conversations" @change-window="changeWindow" @change-conversation-type="changeConversations" @toggle-dark-mode="toggleDarkMode" @filter-list="filterList">
    </Sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
//import Conversations from '@/components/Conversations';
import ChatWindow from '@/components/ChatWindow';
import Sidebar from '@/components/Sidebar';
import Container from '@/components/Container';
import { ref /*, watch*/ } from 'vue';
import Router from "@/router";
import API from '@/lib/API.js'


export default {
  name: 'Home',
  components: {
    ChatWindow,
    Container,
    Sidebar
  }, 
  setup(){
    let conversations = ref([]);
    /*DEMO DATA
    {
            conversationid: 1,
            last_message_sent: "2 min",
            last_message: "Thank you! 🙏 I really appreciate it a lot!",
            direction: "Inbound",
            unread: true,
            contact_name: "Cheryl Waters",
            phone_number: '+17733072548',
            picture: "https://kexp.org/media/filer_public_thumbnails/filer_public/06/84/06842e4e-ffce-41de-aa9c-7aeb2a886466/cheryl_3.jpg__800x800_q85_crop_subsampling-2_upscale.jpg",
        },
        {
            conversationid: 2,
            last_message_sent: "12:35 PM",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Jean Philipe",
            phone_number: '+17739898461',
            picture: "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144",
        },
        {
            conversationid: 3,
            last_message_sent: 'Wed',
            last_message: "No problem! 😀",
            direction: "Outbound",
            unread: true,
            contact_name: "Don Corleone",
            phone_number: '+19896145586',
            picture: "https://upload.wikimedia.org/wikipedia/en/2/21/Godfather15_flip.jpg",
        },
        {
            conversationid: 4,
            last_message_sent: " Nov 1",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Philip Guzman",
            phone_number: '+13126763343',
            picture: "https://pbs.twimg.com/profile_images/951121410952519681/IxOylf-r_400x400.jpg",
        },
        {
            conversationid: 5,
            last_message_sent: "Oct 31",
            last_message: "Thanks for the info!",
            direction: "Inbound",
            unread: false,
            contact_name: "Kenny Beats",
            phone_number: '+17733072548',
            picture: "https://okayplayer-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/AP-1WPPWUMF12111_hires_jpeg_24bit_rgb-2-715x894.jpg",
        },
        {
            conversationid: 6,
            last_message_sent: "Oct 15",
            last_message: "Thank you!",
            direction: "Inbound",
            unread: false,
            contact_name: "Sean Lock",
            phone_number: '+17733072548',
            picture: "https://jilliebushell.com/wp-content/uploads/2017/01/Sean-Lock-Headshot.jpg",
        },
        {
            conversationid: 7,
            last_message_sent: "Oct 15",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Donald Glover",
            phone_number: '+17733072548',
            picture: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Donald_Glover_TIFF_2015.jpg",
        },
        {
            conversationid: 8,
            last_message_sent: 'Oct 10',
            last_message: "✅",
            direction: "Outbound",
            unread: true,
            contact_name: "Chris Martin",
            phone_number: '+17733072548',
            picture: "https://www.looktothestars.org/photo/13294-chris-martin/story_half_width.jpg",
        },
        {
            conversationid: 9,
            last_message_sent: "Oct 5",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Selena Gomez",
            phone_number: '+17733072548',
            picture: "https://content.11alive.com/photo/2015/10/09/635799893056980690-GettyImages-464520119_424145_ver1.0.jpg",
        },
        {
            conversationid: 10,
            last_message_sent: "Oct 4",
            last_message: "Thanks for the info!",
            direction: "Inbound",
            unread: false,
            contact_name: "Will Smith",
            phone_number: '+17733072548',
            picture: "",
        },
        {
            conversationid: 11,
            last_message_sent: "Oct 3",
            last_message: "Thank you! 🙏",
            direction: "Inbound",
            unread: false,
            contact_name: "Chris Rock",
            phone_number: '+17733072548',
            picture: "",
        },
        {
            conversationid: 12,
            last_message_sent: "Sep 31",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Kat Williams",
            phone_number: '+17733072548',
            picture: "",
        },
        {
            conversationid: 13,
            last_message_sent: 'Sep 31',
            last_message: "No problem! 😀",
            direction: "Outbound",
            unread: false,
            contact_name: "Dave Chappelle",
            phone_number: '+17733072548',
            picture: "",
        },
        {
            conversationid: 14,
            last_message_sent: "Sep 30",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Kevin Hart",
            phone_number: '+17733072548',
            picture: "",
        },
        {
            conversationid: 15,
            last_message_sent: "Sep 1",
            last_message: "Thanks for the info! LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE",
            direction: "Inbound",
            unread: false,
            contact_name: "David O'Doherty",
            phone_number: '+12345678901',
            picture: "",
        },
        */
    let initConversations = ref([]);
    let unreadcount = ref(0);
    let currentConvo = ref(0);
    let contact_name = ref('Select a contact...');
    let phone_number = ref('No Phone Number');
    let params = Router.currentRoute.value.params;
    let reloadSidebar = ref(false);
    let reloadChatWindow = ref(false);
    let conversation_list = ref([]);
    let lastMessageHadImage = ref(false);
    let messageSending = ref(false);
    let receivingSMS = ref(false);
    
    currentConvo.value = params.conversationid ? params.conversationid : 0;
    
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
        localStorage.setItem('theme', 'dark');
        console.log('setting theme to dark in localstorage');
    } else {
        document.querySelector('html').classList.remove('dark')
        localStorage.setItem('theme', '');
        console.log('setting theme to light in localstorage');
    }

    let socket = API.initSocketConnect();
    socket.on('connect', function(){
        socket.emit('logged_in', `this dude connected ${socket.id}`);
            socket.on('update', (...args) => {
                let incoming_update = args[0];
                //console.log('incoming update event', incoming_update);
                let receivedPhoneNumber = "+" + incoming_update['phoneNumber'];
                //console.log('comparing values', phone_number.value, receivedPhoneNumber, receivedPhoneNumber == phone_number.value);
                if(incoming_update['type'] == 'incoming_sms' && incoming_update['update'] == true && phone_number.value == receivedPhoneNumber){
                    triggerFullReload(false,false,true);
                }
                if(incoming_update['type'] == 'incoming_sms' && incoming_update['update'] == true){
                    triggerSidebarReload();
                }
            }) 
    })

    if(localStorage['conversation_list']){
        conversation_list.value = JSON.parse(localStorage['conversation_list'] || []);
        triggerSidebarReload();
    }

    function triggerFullReload(lastMessageHadImageV, messageSendingV, receivingSMSV){
        lastMessageHadImage.value = lastMessageHadImageV;
        messageSending.value = messageSendingV;
        receivingSMS.value = receivingSMSV;
        reloadChatWindow.value = true;
        console.log('THE THREE VALUES ARE', lastMessageHadImageV, messageSendingV, receivingSMSV)
        //reloadSidebar.value = true;

        triggerSidebarReload();

        setTimeout(() => {
            reloadChatWindow.value = false;
            //messageSending.value = false;
            //reloadSidebar.value = false;
        }, 250)
    }

    function triggerSidebarReload(){
        reloadSidebar.value = true;
        setTimeout(() => {
            reloadSidebar.value = false;
        }, 250)
        if(conversation_list.value.length > 0){
            API.loadConversations(conversation_list.value).then(res => {
                if(res['success'] === true && res.conversations){
                    console.log('got some conversation records', res['conversations']);
                    conversations.value = res['conversations'];  
                    initConversations.value = res['conversations'];  
                    //console.log('conversations are', conversations);
                    //console.log('init conversations are', initConversations);

                    /*Somewhere in here above*/
                    if (currentConvo.value !== 0 ){
                        let obj = conversations.value.find(conv => conv.conversationid == currentConvo.value );
                        //console.log(obj);
                        contact_name.value = obj.contact_name;
                        phone_number.value = obj.phone_number;
                    } 
                    conversations.value.forEach(conversation => {
                        if(conversation.unread === true){
                            unreadcount.value++;
                        }
                    })
                }
            })
        }else{
            console.log('There are no saved conversaitons')
        }
    }

    return{
        conversations,
        currentConvo,
        contact_name,
        phone_number,
        unreadcount,
        initConversations,
        reloadSidebar,
        reloadChatWindow,
        triggerFullReload,
        triggerSidebarReload,
        conversation_list,
        lastMessageHadImage,
        messageSending,
        receivingSMS,
    }
  },
  methods:{ 
      changeConversations(type){
          console.log('changing list of conversations to', type);
          if (type == 'All'){
              //console.log('init', this.initConversations);
              this.conversations = this.initConversations;
          }
          if (type == "Unread"){
              console.log('initconvos:', this.initConversations)
              
              this.conversations = [];
              this.initConversations.forEach(conversation => {
                  if (conversation.unread === true){
                      this.conversations.push(conversation);
                  }
              })
              //console.log(this.conversations);
          }
          if (type == "Starred"){
              console.log('initconvos:', this.initConversations)
              
              this.conversations = [];
              this.initConversations.forEach(conversation => {
                  if (conversation.starred === true){
                      this.conversations.push(conversation);
                  }
              })
              //console.log(this.conversations);
          }
      },
      changeWindow(h, c, p){
          this.currentConvo = h;
          this.contact_name = c;
          this.phone_number = p;
          //console.log('whoa h', h, c);
      },
      toggleDarkMode(){
          if(localStorage.theme === 'dark'){
              console.log('switching theme to white');
              localStorage.setItem('theme', '');
               document.querySelector('html').classList.remove('dark')
          }else if(localStorage.theme===''){
              console.log('switching theme to dark');
              localStorage.setItem('theme', 'dark');
              document.querySelector('html').classList.add('dark')
          }
      },
      filterList(searchValue){
          if (!searchValue || searchValue == ''){
              this.conversations = this.initConversations;
          }else{
              //console.log('initconvos:', this.initConversations)
              
              this.conversations = [];
              this.initConversations.forEach(conversation => {
                  if (conversation.contact_name.toLowerCase().includes(searchValue) || conversation.phone_number.includes(searchValue) || conversation.last_message.toLowerCase().includes(searchValue) ){
                      this.conversations.push(conversation);
                  }
              })
              //console.log('conversations after search:', this.conversations);
          }
      },
      messageSent(lastMessageHadImageEventValue){
          this.triggerFullReload(lastMessageHadImageEventValue, true, false);

          setTimeout(() => { //might not be needed in the end
              this.triggerFullReload(false, false, false)
          }, 5000 ); // this value is subject to change 
          setTimeout(() => { //added this to update picture after about 15 seconds.
            this.triggerFullReload(false, false, false);
          }, 15000);
      },
  }
}
</script>

<style>

</style>
