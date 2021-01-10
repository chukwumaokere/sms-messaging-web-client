<template>
  <div class="home h-full pl-96">
    <Container class="h-full">
        <ChatWindow class="" />
    </Container>
    <Sidebar class="pt-5">
        <Conversations :conversations="conversations" />
    </Sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import Conversations from '@/components/Conversations';
import ChatWindow from '@/components/ChatWindow';
import Sidebar from '@/components/Sidebar';
import Container from '@/components/Container';


export default {
  name: 'Home',
  components: {
    ChatWindow,
    Conversations,
    Container,
    Sidebar
  }, 
  setup(){
    let conversations = [
        {
            conversationid: 1,
            /*last_message_sent: '2021-01-09 08:20:33', */
            last_message_sent: "2 min",
            last_message: "Thank you! 🙏",
            direction: "Inbound",
            status: true,
            contact_name: "Sheryl Waters",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 2,
            /* last_message_sent: '2021-01-08 08:20:33', */
            last_message_sent: "12:35 PM",
            last_message: "Glad to help!",
            direction: "Outbound",
            status: false,
            contact_name: "Jean Philipe",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 3,
            /*last_message_sent: '2021-01-01 08:20:33',*/
            last_message_sent: 'Wed',
            last_message: "No problem! 😀",
            direction: "Outbound",
            status: false,
            contact_name: "Don Corleone",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
        {
            conversationid: 4,
            /* last_message_sent: '2020-11-01 08:20:33', */
            last_message_sent: " Nov 1",
            last_message: "Okay",
            direction: "Inbound",
            status: false,
            contact_name: "Philip Guzman",
            picture: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        },
    ];
    return{
        conversations
    }
  }
}
</script>

<style>
    .home{
        /* padding-left: 350px;*/
    }
</style>
