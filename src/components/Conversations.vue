<template>
  <ul v-if="conversations.length > 0" class="divide-y divide-gray-100">
    <ConvoTile @change-window="changeWindow" :href="'./#/conversations/' + conversation.conversationid" v-for="conversation in conversations" :key="conversation.conversationid" :conversation="conversation" :readstatus="conversation.unread"/>
  </ul>
  <div v-else class="h-full flex">
      <p class="px-10 dark:text-gray-300 text-gray-500 place-self-center">There are no conversations that match this criteria</p>
  </div>
</template>

<script>
import ConvoTile from './ConvoTile';
export default {
 props: {
     conversations: Array,
 },
 components:{
     ConvoTile,
 },
 methods:{
     changeWindow(v, c, p){
        this.$emit("change-window", v, c,p );
        //console.log('whoa v', v, c);
      },
 }
}
</script>

<style scoped>

</style>