<template>
  <div>
      <div class="wrapper">
        <div v-for="disaster in allDisasters" :key="disaster.id" class="soft item">
            <!-- <img src="../assets/flame.png" /> -->
            <div>
                <span>{{ disaster.name }} </span>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Disasters',
    computed: {
        ...mapGetters(['allDisasters'])
    },
    methods: {
        ...mapActions(['fetchDisasters'])
    },
    created() {
        this.fetchDisasters();
    }
}
</script>

<style scoped>

.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
}

.item {
    position: relative;
    background:#4dffb8;
    padding: 10px;
}

.item > img {
    position: absolute;
    left: 5px;
    top: 5px;
}

.item:nth-child(odd) {
    background:#00e68a;
}

.soft {
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    border-bottom-left-radius: 1em;
}

</style>