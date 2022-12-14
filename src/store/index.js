import {createStore} from "vuex";
import news from "@/store/modules/news";
import ask from "@/store/modules/ask";
import jobs from "@/store/modules/jobs";
import user from "@/store/modules/user";
import item from "@/store/modules/item";
import list from "@/store/modules/list";

const store = createStore({
    modules: { news, ask, jobs, user, item, list}
})
export default store