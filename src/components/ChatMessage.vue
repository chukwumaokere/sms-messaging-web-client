<template>
  <div>
     <div v-if="message.direction == 'Inbound'" class="col-start-1 col-end-8 p-3 rounded-lg">
        <div class="flex flex-row items-center">
            <img :src="picture ? picture : 'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png'" alt="My profile" class="w-10 h-10 rounded-full ">
        <div :class="{'tooltipL': message.hasimage }" class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl dark:bg-gray-500 dark:text-white">
            <div v-if="message.hasimage && !message.isimage">{{message.message}}
                    <img @click="openPhoto(message.imgsrc)" :src="message.imgsrc" class="max-w-xs cursor-pointer" :data-id="message.id" />
            </div>
            <div v-if="message.isimage"><img :src="message.imgsrc" class="max-w-xs cursor-pointer" /></div>
            <div v-if="!message.hasimage && !message.isimage">{{message.message}}</div>
            <div class="absolute text-xs bottom-0 left-0 -mb-5 mr-2 text-gray-500 w-max dark:text-gray-200">
                {{message.timestamp}}
            </div>
            
            <div v-if="message.hasimage" class="tt" :data-id="message.id">
                <div class="">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-4 right-0 bottom-full" style="width: max-content;">
                        Click the photo to open it in a new tab
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    </div>
    <div v-if="message.direction == 'Outbound'" class="col-start-6 col-end-13 p-3 rounded-lg">
        <div class="flex items-center justify-start flex-row-reverse">
            <!-- Other way of showing 
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                Me
            </div>
            -->
            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="My profile" class="w-10 h-10 rounded-full ">
            <div :class="{'tooltip': message.hasimage }"  class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl dark:bg-blue-500 dark:text-white">
                <div v-if="message.hasimage && !message.isimage">{{message.message}}
                    <img @click="openPhoto(message.imgsrc)" :src="message.imgsrc" class="max-w-xs cursor-pointer" :data-id="message.id" />
                </div>
                <div v-if="message.isimage"><img :src="message.imgsrc" class="max-w-xs cursor-pointer" /></div>
                <div v-if="!message.hasimage && !message.isimage">{{message.message}}
                    <p v-if="message.message == ''">Loading Image...</p>
                    <svg v-if="lastMessageWithImageLoading" class="animate-spin h-full w-10 text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500 w-max dark:text-gray-200">
                    {{message.timestamp}}
                </div>
                
                <div v-if="message.hasimage" class="tt" :data-id="message.id">
                    <div class="">
                        <div class="bg-gray-800 text-white text-xs rounded py-1 px-4 right-0 bottom-full" style="width: max-content;">
                            Click the photo to open it in a new tab
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!--
    <div v-if="messageSending" class="col-start-6 col-end-13 p-3 rounded-lg">
        <div class="flex items-center justify-start flex-row-reverse">
            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="My profile" class="w-10 h-10 rounded-full ">
            <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl dark:bg-blue-500 dark:text-white">
                <div>
                    <p>Sending message...</p>
                    <svg v-if="lastMessageWithImageLoading" class="animate-spin h-full w-10 text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500 w-max dark:text-gray-200">
                    {{new Date(Date.now()).toDateString()}} Sending...
                </div>
            </div>
        </div>
    </div>
    -->
  </div>
</template>

<script>
export default {
    props:{
        message: Object,
        picture: String,
        lastMessageWithImageLoading: Boolean,
        messageSending: Boolean,
    },
    methods: {
        openPhoto(src){
            window.open(src, "_blank");
        }
    }
}

</script>

<style>
.tooltip:hover div.tt, .tooltipL:hover div.tt {
    display:block;
    position:fixed;
    overflow:hidden;
}
.tooltip, .tooltipL {
    text-decoration:none;
    position:relative;
}
.tooltip div.tt, .tooltipL div.tt {
    display:none;
}

</style>