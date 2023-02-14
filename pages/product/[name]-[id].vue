<template>
   <div class="text-center">
    <p>{{ name }}</p>
    <button @click="addCart" class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-yellow-800 ">
        <span v-if="incart()">Remove Cart</span>
        <span v-else>Buy Cart</span>
    </button>
    
   </div>
</template>
<script setup>
   const cart = useCart();
    const route = useRoute();
    const name = computed(() => {
        return route.params.name.replace('_','');
    });
    const fullname = computed(() => {
        return route.params.name.replace('_','');
    });
    const id = computed(() => {
        return route.params.id;
    });

    
    useHead({
        title: `${route.params.name}`
    });

    function incart(){
       return !!cart.value.find((ct) => ct.product_name === fullname.value);
        
    }

    function addCart(){
        
        if(!incart()){
            cart.value.push({
                product_name:`${fullname.value}`
            })
        }else{
            cart.value = cart.value.filter((ct) => ct.product_name != fullname.value)
        }
     }
</script>