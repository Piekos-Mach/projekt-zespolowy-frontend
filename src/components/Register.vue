<template>
    <v-row justify="center">
        <v-card>
            <v-card-title>
                Register
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field placeholder="Login"/>

                    <v-text-field placeholder="Password"/>

                    <v-text-field placeholder="Repeat password"/>

                    <v-text-field placeholder="Name"/>

                    <v-text-field placeholder="Surname"/>

                    <v-text-field placeholder="e-mail"/>
                </v-form>
            </v-card-text>    

            <v-card-actions>
                <v-btn>Register</v-btn>
                <v-btn>Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
</template>
