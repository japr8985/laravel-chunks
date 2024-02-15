import "./bootstrap";
import { createApp } from "vue";
import UploadFile from "./components/uploadFile.vue";
import DownloadByStream from "./components/downloadFileByStream.vue";

import vuetify from "./plugins/vuetify";
createApp()
    .use(vuetify)
    .component("upload-file", UploadFile)
    .component("download-by-stream", DownloadByStream)
    .mount("#app");
