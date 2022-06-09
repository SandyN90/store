<template>
  <main>
    <ul role="list" class="">
      <li v-for="item in categoryItems" :key="item.category"
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <div>
          <h1 class="text-xl">
            {{ item.category }}
          </h1>
        </div>
        <div class="flex p-8">
          <li v-for="(val, index) in item.value" :key="index" class="mx-2 border border-black rounded-md w-full px-2">
            <div>
              <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" :src="item.value[index].images[0]" alt="img" />
              <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ item.value[index].title }}</h3>
              <dl class="mt-1 flex-grow flex flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-gray-500 text-sm">{{ item.value[index].brand }}</dd>
                <dt class="sr-only">Role</dt>
                <dd class="mt-3">
                <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {{ item.value[index].description }}
                </span>
                </dd>
              </dl>
            </div>  
          </li>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      products: [],
      categories: [],
      categoryItems: [],
      counter: 0,
    };
  },
  created() {
    this.dataHandler();
  },
  methods: {
    async dataHandler() {
      const url = 'https://dummyjson.com/products?limit=100';
      const data = await (await fetch(url)).json();
      this.products = data.products;
      this.categories.push(this.products[0].category);
      this.products.forEach((e) => {
        if (this.categories[this.counter] !== e.category) {
          this.categories.push(e.category);
          this.counter += 1;
        }
      });
      this.categories.forEach((e) => {

        const items = this.products.filter((val) => e === val.category)
        let x = {
          "category": e,
          value: items
        }
        this.categoryItems.push(x);
      });
    },
  }
}
</script>
