<template>
  <ul class="divide-y divide-gray-100">
    <ConvoTile @change-window="changeWindow" :href="'./#/conversations/' + conversation.conversationid" v-for="conversation in conversations" :key="conversation.conversationid" :conversation="conversation" :readstatus="conversation.unread"/>
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
 },
 methods:{
     changeWindow(v, c){
        this.$emit("change-window", v, c);
        //console.log('whoa v', v, c);
      },
 }
}
</script>

<style scoped>

</style>