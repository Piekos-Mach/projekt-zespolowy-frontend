<template>
    <v-card>
        <v-card-title>
            <slot></slot>
        </v-card-title>

        <v-card-text>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{user.name}}
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-email</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{user.mail}}
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-cog</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{user.type.name}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'UserMiniView',
    props: ['user']
}
</script>