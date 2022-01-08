<template>
  <q-page>
    <h4 class="q-pa-lg text-center">Sauvegarde et restauration</h4>

    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/parametre.jpg" basic> </q-img>
        </q-zoom>

        <q-card-section class="q-pl-lg" style="font-size:17px">
          Dans les paramètres de kids place , allez dans
          <strong>sauvegarde et restauration. </strong><br />
          se connecter au compte google
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/save.jpg" basic> </q-img>
        </q-zoom>

        <q-card-section class="q-pl-lg" style="font-size:17px">
          Choisir <strong>la 2ème sauvegarde </strong> la sélectionner et lancer
          la restoration. <br />
          Retour dans les paramètres
        </q-card-section>
      </q-card>
    </div>
    <!--
    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-img src="~assets/save.jpg" basic> </q-img>

        <q-card-section class="text-center">
          <strong>Autoriser Kid's Place pour qu'il soit en mode activé</strong>
        </q-card-section>
        <p class="q-pl-lg" style="font-size:17px">
          Dans les paramètres, allez dans sauvegarde et restoration. <br />
          Se connecter avec le compte google. <br />
          Choisir la 2ème sauvegarde, la sélectionner et lancer la restoration.
        </p>
      </q-card>
    </div>-->

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/autorisation"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/parametres"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Save"
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 750px

strong
    font-size : 20px
</style>

