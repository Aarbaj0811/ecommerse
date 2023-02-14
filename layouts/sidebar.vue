<template>
    <nav class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-300 h-15">
        <div class="my-2">  
            <NuxtLink to="/" class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-yellow-800 mr-2">Home</NuxtLink>
            <NuxtLink to="about" class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-green-700 hover:bg-blue-800 mr-2 mt-2   ">About</NuxtLink>
            <NuxtLink to="/product" class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-yellow-800 m-2">Product</NuxtLink>
            <!-- <article class="sidebar">
            <h1 class="ext-3xl font-bold underline">Dashbord</h1>
            <p>settings</p>
            </article> -->
        </div>
    </nav>
    
    <slot />
</template>
<style scoped>
    .sidebar {
        display: flex;
         flex-direction: column;
    }
</style>