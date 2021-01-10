<template>
  <ul class="divide-y divide-gray-100">
    <ConvoTile @change-window="changeWindow" :href="'./#/conversations/' + conversation.conversationid" v-for="conversation in conversations" :key="conversation.conversationid" :conversation="conversation" :readstatus="conversation.status"/>
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
     changeWindow(v){
        this.$emit("change-window", v);
        console.log('whoa v', v);
      },
 }
}
</script>

<style scoped>

</style>