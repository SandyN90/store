<template>
  <main>
      <div v-for="item in products" :key="item.id" class="grid grid-rows-1 h-16 bg-yellow-100 grid-flow-col gap-4">
            <p>{{item.id }}{{item.category}}</p>
      </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            categories: [],
        }
    },
    created() {
        this.dataHandler();
    },
    methods: {
        async dataHandler() {
            const url = 'https://dummyjson.com/products?limit=100';
            const data = await (await fetch(url)).json();
            this.products = data.products;
            this.products.forEach((e)=> {
                if(this.products.category === e.category) {
                    this.categories.push(this.products.category)
                    console.log(this.products.category);
                }
                // console.log("elements", e);

            });
            // console.log("data", this.products);
        },  
    }
}
</script>

<style>

</style>