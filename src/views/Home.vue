<template>
  <div class="home h-full pl-96">
    <Container class="h-full">
        <ChatWindow :currentConvo="currentConvo" :contactName="contact_name" />
    </Container>
    <Sidebar class="pt-5" :unreadCount="unreadcount" :conversations="conversations" @change-window="changeWindow" @toggle-dark-mode="toggleDarkMode">
        <!-- <Conversations @change-window="changeWindow" :conversations="conversations" />-->
    </Sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
//import Conversations from '@/components/Conversations';
import ChatWindow from '@/components/ChatWindow';
import Sidebar from '@/components/Sidebar';
import Container from '@/components/Container';
import { ref } from 'vue';
import Router from "@/router";

export default {
  name: 'Home',
  components: {
    ChatWindow,
    //Conversations,
    Container,
    Sidebar
  }, 
  setup(){
    let conversations = [
        {
            conversationid: 1,
            /*last_message_sent: '2021-01-09 08:20:33', */
            last_message_sent: "2 min",
            last_message: "Thank you! 🙏 I really appreciate it a lot!",
            direction: "Inbound",
            unread: true,
            contact_name: "Sheryl Waters",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 2,
            /* last_message_sent: '2021-01-08 08:20:33', */
            last_message_sent: "12:35 PM",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Jean Philipe",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 3,
            /*last_message_sent: '2021-01-01 08:20:33',*/
            last_message_sent: 'Wed',
            last_message: "No problem! 😀",
            direction: "Outbound",
            unread: true,
            contact_name: "Don Corleone",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 4,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: " Nov 1",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Philip Guzman",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 5,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Oct 31",
            last_message: "Thanks for the info!",
            direction: "Inbound",
            unread: false,
            contact_name: "Kenny Beats",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 6,
            /*last_message_sent: '2021-01-09 08:20:33', */
            last_message_sent: "2 min",
            last_message: "Thank you! 🙏",
            direction: "Inbound",
            unread: true,
            contact_name: "Sheryl Waters",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 7,
            /* last_message_sent: '2021-01-08 08:20:33', */
            last_message_sent: "12:35 PM",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Jean Philipe",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 8,
            /*last_message_sent: '2021-01-01 08:20:33',*/
            last_message_sent: 'Wed',
            last_message: "No problem! 😀",
            direction: "Outbound",
            unread: true,
            contact_name: "Don Corleone",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 9,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: " Nov 1",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Philip Guzman",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 10,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Oct 31",
            last_message: "Thanks for the info!",
            direction: "Inbound",
            unread: false,
            contact_name: "Kenny Beats",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 11,
            /*last_message_sent: '2021-01-09 08:20:33', */
            last_message_sent: "2 min",
            last_message: "Thank you! 🙏",
            direction: "Inbound",
            unread: true,
            contact_name: "Sheryl Waters",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 12,
            /* last_message_sent: '2021-01-08 08:20:33', */
            last_message_sent: "12:35 PM",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Jean Philipe",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 13,
            /*last_message_sent: '2021-01-01 08:20:33',*/
            last_message_sent: 'Wed',
            last_message: "No problem! 😀",
            direction: "Outbound",
            unread: true,
            contact_name: "Don Corleone",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 14,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: " Nov 1",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Philip Guzman",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 15,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Oct 31",
            last_message: "Thanks for the info! LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE",
            direction: "Inbound",
            unread: false,
            contact_name: "Kenny Beats",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
    ];
    let unreadcount = 0;
    let currentConvo = 0;
    let contact_name = ref('Select a contact...');
    let params = Router.currentRoute.value.params;
    currentConvo = params.conversationid ? params.conversationid : 0;
    if (currentConvo !== 0 ){
        let obj = conversations.find(conv => conv.conversationid == currentConvo );
        //console.log(obj);
        contact_name.value = obj.contact_name;
    } 
    conversations.forEach(conversation => {
        if(conversation.unread === true){
            unreadcount++;
        }
    })
    return{
        conversations,
        currentConvo,
        contact_name,
        unreadcount
    }
  },
  methods:{ 
      changeWindow(h, c){
          this.currentConvo = h;
          this.contact_name = c;
          //console.log('whoa h', h, c);
      },
      toggleDarkMode(){
          console.log('switching theme');
      }
  }
}
</script>

<style>

</style>
