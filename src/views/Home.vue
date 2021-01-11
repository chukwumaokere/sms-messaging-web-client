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
            contact_name: "Cheryl Waters",
            picture: "https://kexp.org/media/filer_public_thumbnails/filer_public/06/84/06842e4e-ffce-41de-aa9c-7aeb2a886466/cheryl_3.jpg__800x800_q85_crop_subsampling-2_upscale.jpg",
        },
        {
            conversationid: 2,
            /* last_message_sent: '2021-01-08 08:20:33', */
            last_message_sent: "12:35 PM",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Jean Philipe",
            picture: "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144",
        },
        {
            conversationid: 3,
            /*last_message_sent: '2021-01-01 08:20:33',*/
            last_message_sent: 'Wed',
            last_message: "No problem! 😀",
            direction: "Outbound",
            unread: true,
            contact_name: "Don Corleone",
            picture: "https://upload.wikimedia.org/wikipedia/en/2/21/Godfather15_flip.jpg",
        },
        {
            conversationid: 4,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: " Nov 1",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Philip Guzman",
            picture: "https://pbs.twimg.com/profile_images/951121410952519681/IxOylf-r_400x400.jpg",
        },
        {
            conversationid: 5,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Oct 31",
            last_message: "Thanks for the info!",
            direction: "Inbound",
            unread: false,
            contact_name: "Kenny Beats",
            picture: "https://okayplayer-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/AP-1WPPWUMF12111_hires_jpeg_24bit_rgb-2-715x894.jpg",
        },
        {
            conversationid: 6,
            /*last_message_sent: '2021-01-09 08:20:33', */
            last_message_sent: "Oct 15",
            last_message: "Thank you!",
            direction: "Inbound",
            unread: false,
            contact_name: "Sean Lock",
            picture: "https://jilliebushell.com/wp-content/uploads/2017/01/Sean-Lock-Headshot.jpg",
        },
        {
            conversationid: 7,
            /* last_message_sent: '2021-01-08 08:20:33', */
            last_message_sent: "Oct 15",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Donald Glover",
            picture: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Donald_Glover_TIFF_2015.jpg",
        },
        {
            conversationid: 8,
            /*last_message_sent: '2021-01-01 08:20:33',*/
            last_message_sent: 'Oct 10',
            last_message: "✅",
            direction: "Outbound",
            unread: true,
            contact_name: "Chris Martin",
            picture: "https://www.looktothestars.org/photo/13294-chris-martin/story_half_width.jpg",
        },
        {
            conversationid: 9,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Oct 5",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Selena Gomez",
            picture: "https://content.11alive.com/photo/2015/10/09/635799893056980690-GettyImages-464520119_424145_ver1.0.jpg",
        },
        {
            conversationid: 10,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Oct 4",
            last_message: "Thanks for the info!",
            direction: "Inbound",
            unread: false,
            contact_name: "Will Smith",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 11,
            /*last_message_sent: '2021-01-09 08:20:33', */
            last_message_sent: "Oct 3",
            last_message: "Thank you! 🙏",
            direction: "Inbound",
            unread: false,
            contact_name: "Chris Rock",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 12,
            /* last_message_sent: '2021-01-08 08:20:33', */
            last_message_sent: "Sep 31",
            last_message: "Glad to help!",
            direction: "Outbound",
            unread: false,
            contact_name: "Kat Williams",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 13,
            /*last_message_sent: '2021-01-01 08:20:33',*/
            last_message_sent: 'Sep 31',
            last_message: "No problem! 😀",
            direction: "Outbound",
            unread: false,
            contact_name: "Dave Chappelle",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 14,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Sep 30",
            last_message: "Okay",
            direction: "Inbound",
            unread: false,
            contact_name: "Kevin Hart",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 15,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: "Sep 1",
            last_message: "Thanks for the info! LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE LAST MESSAGE",
            direction: "Inbound",
            unread: false,
            contact_name: "David O'Doherty",
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
    return{
        conversations,
        currentConvo,
        contact_name,
        unreadcount
    }
  },
  created(){

  },
  methods:{ 
      changeWindow(h, c){
          this.currentConvo = h;
          this.contact_name = c;
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
      }
  }
}
</script>

<style>

</style>
