<template>
  <q-page>
    <h4 class="q-pa-sm text-center">
      Configurer l'exinction automatique de la table
    </h4>
    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/Extinction.jpg" basic> </q-img>
        </q-zoom>
      </q-card>
      <q-card-section>
        <q-zoom background-color="blue-grey-1">
          <p class="" style="font-size:17px">
            Pour se faire, se rendre dans l'application shutdown
            <img src="~assets/shutdown.png" alt="button-shutdown" width="8%" />
            qui est en dehors du contrôle parental, puis programmez l'allumage
            et l'eteignage sur
            <strong>08h30 et 20H30</strong>
          </p>
        </q-zoom>
      </q-card-section>
    </div>

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/applications"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/verification"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Extinction"
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>