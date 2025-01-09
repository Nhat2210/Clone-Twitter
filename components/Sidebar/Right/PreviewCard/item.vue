<template>
    <div class="dark:text-white p-3 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer border-b" :class="wrapperClasses">
        <slot/>
    </div>
</template>

<script setup>
const { defaultTransition,twitterBorderColor } = useTailwindCssconfig();
const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)
</script>

<style lang="scss" scoped>

</style>