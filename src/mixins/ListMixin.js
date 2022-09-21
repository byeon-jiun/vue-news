
const option = {
    created() {
        this.emitter.emit('start:spinner')
            this.$store.dispatch('FETCH_All_LIST', this.$route.name)
                .then(() => {
                    this.emitter.emit('end:spinner')
                })
                .catch((err) => {
                    console.log(err);
                })
    }
}
export default option