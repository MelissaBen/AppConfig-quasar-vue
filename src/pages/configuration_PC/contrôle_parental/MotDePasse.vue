<template>
  <q-page>
    <h4 class="q-pa-lg text-center">Configuration PIN</h4>
    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/CP/code.jpg" basic> </q-img>
        </q-zoom>

        <q-card-section class="text-center">
          <strong>mot de passe : <span class="red">1357 </span> </strong>
        </q-card-section>
        <q-btn
          to="/quickSupport"
          flat
          style="color: #931045"
          label="Comment changer le Mot de passe ? "
          class="text-center"
        />
      </q-card>
    </div>

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/kidsPlace"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/compteKiddoware"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "MotDePasse"
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px

strong
    font-size : 20px
</style>