<template>
<nuxt-link to="#" class="flex items-center p-3 hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white rounded-full">
    <div class="w-6 h-6 text-dark" :class="defaultTransition">
        <slot name="icon"></slot>
    </div>
    <div class="ml-4 text-xl hidden xl:block" :class="textClasses">
        <slot name="name"></slot>
    </div>
</nuxt-link>
</template>

<script setup>
const {defaultTransition} = useTailwindCssconfig();

const props = defineProps({
    active:{
        type:Boolean,
        default: false,
    }
})
const textClasses = computed(() => props.active ? "font-semibold" : "font-normal")
</script>

<style lang="scss" scoped>

</style>