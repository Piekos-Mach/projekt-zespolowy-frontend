<template>
    <v-container >
        <v-row justify="center">
            <v-col cols="12">
                <v-file-input
                    accept="image/*"
                    multiple
                    hide-input
                    @change="loadImgsToUrl"
                ></v-file-input>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                v-for="(img, index) in images" 
                :key="index" 
                class="d-flex child-flex"
                cols="3"
            >
                <v-img 
                    :src="img"
                    class="grey lighten-2"
                    contain
                >
                    <v-btn dark absolute right @click="deleteImg(index)">
                        <v-icon large>
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </v-img>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
//ADD DRAGABLE TO ADD IMAGES AND CHANGE ORDER
//HIGHLIGHT THHE FIRST PICTURE AS MAIN
export default {
    name: 'ImagesForm',
    data() {
        return {
            images: [],
        }
    },
    methods: {
        loadImgsToUrl(ev) {

            // ADD PROGRESS
            // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/progress_event
            let readFile = file => {
                const reader = new FileReader()
                reader.onload = e => {
                    this.images.push(e.target.result)
                }
                reader.readAsDataURL(file)
            }
            readFile = readFile.bind(this)
            ev.forEach(v => readFile(v))
        },
        deleteImg(index) {
            this.images.splice(index, 1)
        }
    },
}
</script>