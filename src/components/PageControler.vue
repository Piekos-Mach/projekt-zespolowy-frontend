<template>
  <div>
    <v-pagination 
      v-if="totalPages > 0" 
      v-model="page" 
      :length="totalPages"
      @input="changePage"
    />
    <v-chip-group
      v-model="size"
      @change="changePage"
    >
      <v-chip 
        v-for="s in sizes" 
        :key="s"
      >
        {{ size }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
export default {
    name: 'PageControler',
    props: { totalPages: Number },
    data() {
        return {
            page: 1,
            size: 5,
            sizes: [5, 10, 15, 25, 50, 100, 'All']
        }
    },
    methods: {
        changePage() {
            this.$emit('changePage', { page: this.page, size: this.size })
        }
    }
}
</script>