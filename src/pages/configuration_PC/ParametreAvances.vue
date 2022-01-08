<template>
  <q-page>
    <h4 class="q-pa-lg text-center">Parametre avancés</h4>
    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class=" my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/Paramètres/PA-1.jpg" basic> </q-img>
        </q-zoom>
      </q-card>
      <q-card class=" my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/Paramètres/PA-2.jpg" basic> </q-img>
        </q-zoom>
      </q-card>
      <!--<q-card-section>
        <h6>Sélectionnez Paramètres avancés</h6>
      </q-card-section>-->
    </div>

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/parametres"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/parametreInterface"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>


<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 750px
</style>