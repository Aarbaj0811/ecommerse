<template>
    <p>profile</p>
</template>
<script setup>
    useHead({
        title: 'Profile'
    });
    definePageMeta({
        layout:'sidebar',
        middleware:['auth']
    });
</script>