<template>
    <v-app>
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <v-card
                style="min-width: 80vh;"
                :loading="true">
                <template #loader="{ isActive }">
                    <v-progress-linear
                        :active="isActive"
                        :color="color"
                        height="4"
                        v-model="progress">

                    </v-progress-linear>
                </template>
                <v-card-text>
                    <v-file-input
                    label="Select a file"
                        variant="outlined"
                        @change="onChange"
                        @click:append="upload"
                        append-icon="mdi-upload">
                    </v-file-input>

                </v-card-text>
            </v-card>
        </v-main>
    </v-app>
</template>
<script>
import service from '../service';
export default {
    name: 'upload-file',
    data: () => ({
        file: null,
        progress: 0,
        result: ''
    }),
    computed: {
        color() {
            return this.progress == 100 ? 'teal': 'deep-purple';
        }
    },
    methods: {
        onChange(event) {
            const { files } = event.target;
            this.file = files[0];
            this.progress = 0

        },
        async upload() {
            const endpoint = '/upload-file-by-chunks';
            service.chunk(endpoint, this.file,
                (percent) => this.progress = percent,
                (err) => console.error(err),
                (res) => {
                    const { data } = res;
                    this.result = data.path;
                });
        }
    },
};
</script>
