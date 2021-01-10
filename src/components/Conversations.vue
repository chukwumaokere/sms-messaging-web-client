<template>
  <ul class="divide-y divide-gray-100">
    <ConvoTile v-for="conversation in conversations" :key="conversation.conversationid" :conversation="conversation" :readstatus="conversation.status"/>
  </ul>
</template>

<script>
import ConvoTile from './ConvoTile';
export default {
 props: {
     conversations: Array,
 },
 components:{
     ConvoTile,
 }
}
</script>

<style scoped>

</style>