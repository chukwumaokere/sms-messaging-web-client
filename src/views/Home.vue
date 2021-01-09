<template>
  <div class="home h-full pl-96">
    <Container class="h-full">
        <ChatWindow class="p-10" />
    </Container>
    <Sidebar class="p-10">
        <Conversations />
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
  }
}
</script>

<style>
    .home{
        /* padding-left: 350px;*/
    }
</style>
