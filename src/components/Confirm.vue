<template>
    <v-dialog
        v-model="dialog"
        width="500"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="red"
                dark
                v-bind="attrs"
                v-on="on"
            >
                {{button}}
            </v-btn>
        </template>

        <v-card>
            <v-card-title>Confirm</v-card-title>
            <v-card-text>{{text}}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn @click="func">Yes</v-btn>
                <v-btn @click="dialog = false">No</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Confirm',
    props: ['button', 'text', 'func'],
    data() {
        return {
            dialog: false
        }
    }
}
</script>