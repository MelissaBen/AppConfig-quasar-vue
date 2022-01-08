<template>
  <q-page class="">
    <h4 class="q-pa-sm text-center blue">
      jeux et applications
    </h4>

    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/jeux-1.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Liste de <span class="blue">tous les jeux - page 1 </span>
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/jeux-2.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Liste de <span class="blue">tous les jeux - page 2 </span>
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/multij.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Liste des <span class="blue">jeux Multijoueurs </span>
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/jeux-kids.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Liste des
            <span class="blue">jeux pour enfants de moin de 6 ans </span>
          </p>
        </q-zoom>
      </q-card>
    </div>

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/gestionutilisateur"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/extinction"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ConfigBase",
  data() {
    return {
      slide: 1,
      autoplay: true
    };
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 750px
</style>