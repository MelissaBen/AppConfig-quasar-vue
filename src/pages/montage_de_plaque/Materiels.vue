<template>
  <q-page>
    <h4 class=" q-pa-lg text-center">Matériels nécessaires</h4>
    <div class="q-pa-md flex flex-center items-start q-gutter-md">
      <q-card
        v-for="(item, index) in Materials"
        :key="item.item"
        class="my-card"
      >
        <q-zoom background-color="blue-grey-1">
          <q-img :src="Materials[index].image" basic>
            <!-- "img/" Materials[index].to.+"/"IMG-"+Materials[index].ID+""."+Materials[index].extension-->
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ Materials[index].item }}
            </div>
          </q-img>
        </q-zoom>
      </q-card>
    </div>

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/cables"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("moduleJson", ["Materials"])
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 400px
  max-width: 250px
</style>