<template>
    <div>

        <p>My kingdom</p>
        <button @click="moveToaboute" class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">move t0 aboute</button>
    </div>
    
</template>


<script setup>
useHead({
    title: 'Home'
})
function moveToaboute(){
    navigateTo('about');
}
</script>