<template>
    <v-card min-width="400">
        <v-card-title>
        Edit Offer
        </v-card-title>

        <v-card-text>
            <v-form v-model="valid" v-if="offer">
                <v-text-field
                    v-model="offer.title"
                    :counter="20"
                    label="Title"
                    required
                />

                <v-textarea
                    v-model="offer.text"
                    :counter="200"
                    label="Description"
                    required
                />

                <v-text-field
                    v-model="offer.price.value"
                    type="number"
                    label="Price"
                    :rules="priceRules"
                    required
                />
            </v-form>
        </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-btn @click="submit">Submit</v-btn>
      <v-btn @click="clear">Clear</v-btn>
        <Confirm button="Delete" text="Are you sure you want to delete this offer" :func="deleteOffer"/>
      <v-btn @click="() => $router.back()">
        Cancel
      </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
import Confirm from '@/components/Confirm'
export default {
    name: 'UserForm',
    components: { Confirm }
}
</script>