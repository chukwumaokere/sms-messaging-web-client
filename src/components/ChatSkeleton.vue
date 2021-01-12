<template>
    <div class="chat-skeleton-blocks block">
        <ChatSkeletonLeft />
        <ChatSkeletonLeft />
        <ChatSkeletonRight />
        <ChatSkeletonLeft />
        <ChatSkeletonRight />
        <ChatSkeletonLeft />
        <ChatSkeletonRight />
        <ChatSkeletonLeft />
        <ChatSkeletonLeft />
    </div>
</template>

<script>
import ChatSkeletonLeft from './ChatSkeletonLeft';
import ChatSkeletonRight from './ChatSkeletonRight';

export default {
    components:{
        ChatSkeletonRight,
        ChatSkeletonLeft,
    }
}
</script>

<style>

</style>