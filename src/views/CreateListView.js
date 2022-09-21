import ListView from "@/views/ListView";
import { h } from 'vue'

export default function createListView (name) {
    return {
        name,
        created() {
            this.emitter.emit('start:spinner')
            setTimeout(() => {
                this.$store.dispatch('FETCH_All_LIST', this.$route.name)
                    .then(() => {
                        this.emitter.emit('end:spinner')
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }, 1000);
        },
        render() {
            return h(ListView);
        }
    }
}