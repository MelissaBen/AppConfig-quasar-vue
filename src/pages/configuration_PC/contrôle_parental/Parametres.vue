<template>
  <div class="q-pa-md">
    <h4 class=" text-center">
      Paramètres contrôle parental
    </h4>
    <div class="flex-center row items-start q-gutter-lg">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/Paramètres/p-cp/1.jpg" basic> </q-img>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/Paramètres/p-cp/2.jpg" basic> </q-img>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/Paramètres/p-cp/3.jpg" basic> </q-img>
        </q-zoom>
      </q-card>
    </div>
    <!-- <p class="text-h6 ">selectionner control parental</p>-->

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/save"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/parametreAvances"
      />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "parametres",
  data() {
    return {};
  }
};
</script>


<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
