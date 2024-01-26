import "./bootstrap";
import { createApp } from "vue";
import UploadFile from "./components/uploadFile.vue";
import vuetify from "./plugins/vuetify";
createApp().use(vuetify).component("upload-file", UploadFile).mount("#app");
