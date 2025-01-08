<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white  dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-10">
          <!--Left  SideBar-->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft/>
            </div>
          </div>
          <!--Main content-->
          <main class="col-span-12 bg-red-500 md:col-span-8 xl:col-span-6">
            hihi
          </main>
          <!--Right Sidebar-->
          <div class="grid-1 hidden md:block xl:col-span-4 md:col-span-3 bg-blue-400">
            <div class="sticky top-0">
              Right Sidebar
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
</script>
