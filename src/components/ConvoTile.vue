<template>
<a :href="href" @click="changeChat(conversation.conversationid, conversation.contact_name, conversation.phone_number)" >
  <article class="p-4 px-10 flex space-x-4 transition ease-in hover:bg-gray-100 dark:hover:bg-gray-500" :class="{'bg-gray-200 dark:bg-gray-800': isActive }" style="width: inherit;">
        <img :src="conversation.picture ? conversation.picture : imgpath" class="flex-none w-12 h-12 rounded-lg object-cover" width="144" height="144" >
        <div class="min-w-0 relative flex-auto sm:pr-10 lg:pr-0 xl:pr-10">
            <h2 class="text-md font-semibold text-black dark:text-white mb-0.5">
                {{ conversation.contact_name }}
            </h2>
            <dl class="flex flex-wrap text-sm font-normal whitespace-nowrap w-full">
                <div class="" style="width: inherit;">
                    <dt class="sr-only">Last Message</dt>
                    <dd class="overflow-ellipsis truncate"> 
                        <i v-if="conversation.last_message == '(Attachment Inside)'">(Attachment Inside)</i>
                        <div v-else :class="{'italic': conversation.last_message == 'No messages for this contact yet'}" class="overflow-ellipsis truncate">{{ conversation.last_message }}</div>
                        </dd>
                </div>
                <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-black px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1 dark:text-white">
                    <dd class="text-gray-500 dark:text-gray-400">{{ conversation.last_message_sent }}</dd>
                </div>
            </dl>
        </div>
        <div class="z-50 relative right-0 top-5 m-0 ping">
            <span  v-if="readstatus" class="animate-ping absolute inline-flex rounded-full h-3 w-3 bg-red-400"></span>
            <span  v-if="readstatus" class="absolute inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </div>
    </article>
</a>
</template>

<script>
import Router from '@/router';
import { ref } from 'vue';
import imgpath from "@/assets/placeholderimg.png";
export default {
    props: {
        conversation: Object,
        readstatus: Boolean,
        href: String,
    },
    setup(props){
        let isActive = ref(false);
        let params = Router.currentRoute.value.params;
        
        if (params.conversationid == props.conversation.conversationid){
            isActive.value = true;
        }
        return {
            isActive,
            imgpath,
        }
    },
    methods: {
        changeChat(convoid, contact_name, phone_number){
            console.log('switching window to:', convoid, contact_name); 
            let elements = document.getElementsByClassName('bg-gray-200');
            let elementsD = document.getElementsByClassName('dark:bg-gray-800');    
            elements.forEach(element => {
                element.classList.remove('bg-gray-200');
            });
            elementsD.forEach(element => {
                element.classList.remove('dark:bg-gray-800');
            });
            this.isActive = true;
            this.$el.children[0].classList.add('bg-gray-200')
            this.$el.children[0].classList.add('dark:bg-gray-800')            
            //console.log(this.$el.children[1]);
            this.$emit("change-window", convoid, contact_name, phone_number);
        }
    }
}
</script>

<style scoped>
    .activechat{
        background-color:#f1f1f1;
    }
    .ping{
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
</style>