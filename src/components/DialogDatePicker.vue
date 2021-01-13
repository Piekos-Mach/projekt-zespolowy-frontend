<template>
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        @input="updateDate"
        width="290px"
      >
        <!-- persistent -->
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            :label="placeholder"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
</template>

<script>
export default {
    name: 'DialogDatePicker',
    props: ['placeholder', 'value'],
    data() {
        return {
            modal: false,
            date: undefined
        }
    },
    methods: {
        updateDate() {
            this.$emit('input', this.date)
        }
    }
}
</script>