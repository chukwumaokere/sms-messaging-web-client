<template>
  <article class="p-4 px-10 flex space-x-4">
        <img :src="conversation.picture" class="flex-none w-12 h-12 rounded-lg object-cover" width="144" height="144">
        <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
            <h2 class="text-md font-semibold text-black dark:text-white mb-0.5">
                {{ conversation.contact_name }}
            </h2>
            <dl class="flex flex-wrap text-sm font-normal whitespace-pre">
                <div>
                    <dt class="sr-only">Last Message</dt>
                    <dd> {{ conversation.last_message }}</dd>
                </div>
                <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-black px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1 dark:text-white">
                    <dd>{{ conversation.last_message_sent }}</dd>
                </div>
            </dl>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        conversation: Object,
        readstatus: Boolean,
    }
}
</script>

<style scoped>

</style>