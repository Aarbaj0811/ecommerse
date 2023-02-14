<template>
    <div class="grid grid-cols-4 gap-4 mt-10 ">
        <NuxtLink to='product/iPhone_12-1' class="shadow-lg text-center ">
            <h1>iPhone 12</h1>
            <img class="w-25 h-25" src="/images/iphone_12.jpeg" alt="">
        </NuxtLink >

        <NuxtLink to='product/iPhone_13-1' class="shadow-lg text-center ">
            <h1>iPhone 13</h1>
            <img class="w-25" src="/images/iphone2.jpeg" alt="">
        </NuxtLink>
    </div>
    
</template>
<script setup>  
   
   
    useHead({
        title: `Product`
    });
</script>
<style scoped>
img {
    margin: auto;
    width: 50%;
    height: 82%;
    margin-top: 27px;
}
</style>