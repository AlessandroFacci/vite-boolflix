import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

// import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// icon
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
library.add(starSolid, starRegular);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
