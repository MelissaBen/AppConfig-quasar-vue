
<template>
  <q-page>
    <div class=" q-pa-lg q-gutter-sm ">
      <q-tree
        :nodes="this.getMenuJson"
        default-expand-all
        node-key="label"
        class="Tree"
      >
        <template v-slot:default-header="item">
          <div class="itemTree row items-center">
            <q-icon
              :name="item.node.icon || 'share'"
              color="blue"
              size="28px"
              class="q-mr-sm"
            />
            <div class="text-black" @click="hasHistory(item.node.to)">
              {{ item.node.label }}
            </div>
          </div>
        </template>
      </q-tree>
    </div>
  </q-page>
</template>

<script>
import MenuComponents from "components/Menu.vue";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  data() {
    return {
      Menu: this.getMenuJson,
      selected: null
    };
  },

  computed: {
    ...mapGetters("moduleJson", ["getMenuJson"])
  },
  mounted() {
    //A effacer si vide en fin de projet
  },
  methods: {
    hasHistory(link) {
      if (link !== "undefined" && link) {
        this.$router.push(link);
      }
    }
  }
};
</script>


<style scoped>
@media screen and (min-width: 1024px) {
  .Tree {
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    padding: 0 7em;
  }
  .itemTree {
    padding: 5px;
    cursor: pointer;
  }
}
</style>