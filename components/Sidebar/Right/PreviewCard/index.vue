<template>
    <div 
    class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700"
    :class="twitterBoderColor"    
    >
        <h1 class="p-3 text-xl font-semibold dark:text-white text-gray-900 border-b " :class="twitterBoderColor">{{ props.title }}</h1>
        <slot></slot>
        <div class="p-3 text-sm text-blue-400 hover:bg-gray-50 rounded-b-2xl dark:hover:bg-dim-300" :class="defaultTransition">Thêm </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title:{
        type: String,
        required: true,
    }
})
const {twitterBoderColor, defaultTransition} = useTailwindCssconfig();
</script>

<style lang="scss" scoped>

</style>