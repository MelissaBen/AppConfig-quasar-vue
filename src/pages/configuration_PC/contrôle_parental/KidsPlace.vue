<template>
  <q-page>
    <h4 class="q-pa-lg text-center">
      Kids place
    </h4>
    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/CP/KidsPlace.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Pour commencer , installez l'application
            <span class="red">kids place </span> sur <br />
            play Store
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
        to="/navigation"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/motdepasse"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "KidsPlace"
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>