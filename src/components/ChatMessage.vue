<template>
  <div>
     <div v-if="message.direction == 'Inbound'" class="col-start-1 col-end-8 p-3 rounded-lg">
        <div class="flex flex-row items-center">
            <!-- <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-10 h-10 rounded-full ">-->
            <img src="https://kexp.org/media/filer_public_thumbnails/filer_public/06/84/06842e4e-ffce-41de-aa9c-7aeb2a886466/cheryl_3.jpg__800x800_q85_crop_subsampling-2_upscale.jpg" alt="My profile" class="w-10 h-10 rounded-full ">
        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl dark:bg-gray-500 dark:text-white">
            <div v-if="message.hasimage && !message.isimage">{{message.message}}
                    <img :src="message.imgsrc" class="max-w-xs cursor-pointer" />
            </div>
            <div v-if="message.isimage"><img :src="message.imgsrc" class="max-w-xs cursor-pointer" /></div>
            <div v-if="!message.hasimage && !message.isimage">{{message.message}}</div>
            <div class="absolute text-xs bottom-0 left-0 -mb-5 mr-2 text-gray-500 w-max dark:text-gray-200">
                {{message.timestamp}}
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
            <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl dark:bg-blue-500 dark:text-white">
                <div v-if="message.hasimage && !message.isimage">{{message.message}}
                    <img :src="message.imgsrc" class="max-w-xs cursor-pointer" />
                </div>
                <div v-if="message.isimage"><img :src="message.imgsrc" class="max-w-xs cursor-pointer" /></div>
                <div v-if="!message.hasimage && !message.isimage">{{message.message}}</div>
                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500 w-max dark:text-gray-200">
                    {{message.timestamp}}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        message: Object,
    }
}
</script>

<style>

</style>