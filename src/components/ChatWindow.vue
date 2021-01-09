<template>
  <div class="m bg-gray-300 text-black dark:bg-gray-300 dark:text-black">
      <div class="contact-name-bar bg-blue-500 p-5 px-10 shadow-lg">
          <div class="contact-name text-xl text-white">
            <div class="flex">
                <p>Chuck Okere</p>
                <div class="w-6 float-right absolute right-8 ">
                    <button class="p-0 w-7 h-7 bg-transparent rounded-lg object-cover hover:bg-transparent hover:shadow active:shadow-lg mouse transition ease-in duration-200 focus:outline-none">
                        <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
            </div>
          </div>          
      </div>
      <div class="px-10 pt-5 chat-area">
          asojkdaiosjdiso
      </div>
      <div class="input-section px-10 flex space-x-4 absolute bottom-0 mb-10 w-auto">
          
        <div class="">
            <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
        </div>

        <button
                class="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none text-white">
        <svg class="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
        </button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ChatWindow',
    props: {

    },
}
</script>

<style scoped>
    .m{
        height: 100%;    
    }
</style>