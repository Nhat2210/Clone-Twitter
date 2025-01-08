<template>
<div class="h-screen flex flex-col">
    <div class="p-2 my-2 rounded-full hover:rounded-full hover:bg-blue-50 w-min hover:bg-white/90" :class="defaultTransition">
        <nuxt-link to="/">
            <div class="w-8 h-8">
                <LogoTwitterClone/>
            </div>
        </nuxt-link>
    </div>

    <!--home tab-->
    <SidebarLeftTab active="">
        <template v-slot:icon>
            <HomeIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Trang chủ
        </template>
    </SidebarLeftTab>
    <!--explore tab-->
    <SidebarLeftTab >
        <template v-slot:icon>
            <HashtagIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Khám phá
        </template>
    </SidebarLeftTab>
    <SidebarLeftTab >
        <template v-slot:icon>
            <BellIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Thông báo
        </template>
    </SidebarLeftTab>
    <!--tin nổi bật tab-->
    <SidebarLeftTab >
        <template v-slot:icon>
            <BookmarkIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Tin nổi bật
        </template>
    </SidebarLeftTab>
    <!--Tin nhắn tab-->
    <SidebarLeftTab >
        <template v-slot:icon>
            <InboxIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Tin nhắn
        </template>
    </SidebarLeftTab>
    <!--Danh sách-->
    <SidebarLeftTab >
        <template v-slot:icon>
            <DocumentIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Danh sách
        </template>
    </SidebarLeftTab>
    <!-- Trang cá nhân-->
    <SidebarLeftTab>
        <template v-slot:icon>
            <UserIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Trang cá nhân
        </template>
    </SidebarLeftTab>
    <!--Thêm-->
    <SidebarLeftTab >
        <template v-slot:icon>
            <MinusCircleIcon  class="w-[24px] h-[24px]"/>
        </template>
        <template v-slot:name>
            Thêm
        </template>
    </SidebarLeftTab>

</div>
</template>

<script setup>
import { HomeIcon} from "@heroicons/vue/24/solid";
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentIcon, UserIcon, MinusCircleIcon} from "@heroicons/vue/24/outline";
const { defaultTransition } = useTailwindCssconfig();

</script>

<style lang="scss" scoped>

</style>