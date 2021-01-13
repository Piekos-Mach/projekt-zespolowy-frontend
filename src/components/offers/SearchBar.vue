<template>
  <v-navigation-drawer
    app
    clipped
  >
    <v-card flat>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>

    <v-list>
      <v-list-item>
        <v-card flat width="100%">
          <v-card-subtitle class="pa-5">Offer Type</v-card-subtitle>
          <v-card-text class="py-0">
            <v-radio-group @change="newQuery" v-model="type" class="my-0">
              <v-radio :value="0" label="All"/>
              <v-radio :value="1" label="Items"/>
              <v-radio :value="2" label="Service"/>
            </v-radio-group> 
          </v-card-text>
        </v-card>
      </v-list-item>
      
      <v-list-item >
        <v-divider/>
        <v-card flat>
          <v-card-subtitle>Price</v-card-subtitle>
          <v-card-text>
            <v-row align="center">
              <v-col cols="5">
                <v-text-field type="number" v-model="minprice" label="Min"></v-text-field>
              </v-col>
              <v-col cols="2"><v-divider/></v-col>
              <v-col cols="5">
                <v-text-field type="number" v-model="maxprice" label="Max"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-list-item>

      <v-list-item>
        <v-card flat>
          <v-card-subtitle>Creation Date</v-card-subtitle>
          <v-card-text>
            <DialogDatePicker v-model="mindate" placeholder="From"/>
            <DialogDatePicker v-model="maxdate" placeholder="To"/>
          </v-card-text>
        </v-card>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import DialogDatePicker from '@/components/DialogDatePicker'
export default {
  name: 'SearchBar',
  components: { DialogDatePicker },
  data: () => ({
    type: 0,
    minprice: 0,
    maxprice: 10000,
    mindate: undefined,
    maxdate: undefined
  }),
  methods: {
    newQuery() {
      let query = {}
      console.log(this.type)
      if(this.type != 0) query.type = this.type
      this.$router.push({query: query})
    }
  }
}
</script>