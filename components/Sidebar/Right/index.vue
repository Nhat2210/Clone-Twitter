<template>
    <div class="flex flex-col">
            <!--Thanh tìm kiếm-->
            <div class="relative m-2">
                <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                    <div class="w-full h-6">
                        Tìm kiếm
                    </div>
                </div>
            </div>
            <!--tin tức mới-->
            <SidebarRightPreviewCard title="Tin tức mới ?">
                <SidebarRightPreviewCardItem v-for="whatshappening in whatshappenings">
                    <div class="">
                        <h2 class="text-gray-800 font-semibold text-md dark:text-white">{{ whatshappening.title }}</h2>
                        <p class="text-xs text-gray-400 dark:text-white">{{ whatshappening.count }}</p>
                    </div>
                </SidebarRightPreviewCardItem>
            </SidebarRightPreviewCard>
            <!--theo dõi người mới-->
            <SidebarRightPreviewCard title="Có thể bạn biết ?" >
                <SidebarRightPreviewCardItem v-for="newfollower in newfollowers">
                    <div class="flex flex-row justify-between ">
                        <div class="flex flex-row">
                            <img class="self-center pr-2 rounded-full" :src="newfollower.image" alt="user">
                            <div class="flex flex-col">
                                <h2 class="dark:text-white text-gray-800 font-semibold text-md">{{ newfollower.name }}</h2>
                                <p class="dark:text-white text-xs text-gray-400 f">{{ newfollower.handle }}</p>
                            </div>
                        </div>
                        <div class="p-2 px-4 hover:bg-gray-600 hover:text-white text-xs self-center  rounded-full dark:text-white dark:hover:text-black font-semibold">Theo dõi</div>
                    </div>
                </SidebarRightPreviewCardItem>
            </SidebarRightPreviewCard>

    </div>  
</template>

<script setup>
const whatshappenings = ref([
{
    title: 'facebook',
    count: '18.8k Bài đăng',
},
{
    title: '#instagram',
    count: '20.8k Bài đăng',
},
{
    title: '#tiktok',
    count: '10.8k Bài đăng',
},
]);
const newfollowers = ref([
    {
        name: 'Cao Đình Nhật',
        handle: '@Nhat2210',
        image: 'nhat'
    },
    {
        name: 'Nguyễn Văn Thao',
        handle: '@Thao0504',
        image: 'thao'
    },
    {
        name: 'Đỗ Văn Thắng',
        handle: '@Thang1404',
        image: 'thang'
    },
    {
        name: 'Nguyễn Văn Hữu',
        handle: '@Huu0811',
        image: 'huu'
    },
    
])
</script>

<style lang="scss" scoped>

</style>