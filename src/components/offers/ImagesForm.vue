<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <v-file-input
          accept="image/*"
          multiple
          hide-input
          @change="loadImgsToUrl"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(img, index) in newimages" 
        :key="index" 
        class="d-flex child-flex"
        cols="3"
      >
        <v-img 
          :src="img"
          class="grey lighten-2"
          contain
          width="300"
          height="300"
        >
          <v-btn
            dark
            absolute
            right
            @click="deleteImg(index)"
          >
            <v-icon large>
              mdi-delete
            </v-icon>
          </v-btn>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ImagesForm',
  props: { images: Array },
  data() {
    return {
      newimages: [...this.images]
    }
  },
  methods: {
    loadImgsToUrl(ev) {
      // ADD PROGRESS
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/progress_event
      let readFile = file => {
        const reader = new FileReader()
        reader.onload = e => {
          this.newimages.push(e.target.result)
          this.$emit('updateImgs', this.newimages)
        }
        reader.readAsDataURL(file)
      }
      readFile = readFile.bind(this)
      ev.forEach(v => readFile(v))
    },
    deleteImg(index) {
        this.newimages.splice(index, 1)
        this.$emit('updateImgs', this.newimages)
    }
  },
}
</script>