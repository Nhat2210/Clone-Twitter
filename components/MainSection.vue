<template>
    <div class="">
        <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80 dark:text-white">
            <h2 class="font-semibold text-xl">{{ props.title }}</h2>
        </div>
        <div class=" flex justify-center items-center h-screen p-4 border-b" v-if="props.loading" :class="twitterBorderColor">
            <UISpinner/>
        </div>
        <div class="" v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type:String,
        required: true,
    },
    loading: {
        type:Boolean,
        default:true,
    }
})
const { twitterBorderColor } = useTailwindCssconfig();
</script>

<style lang="scss" scoped>

</style>