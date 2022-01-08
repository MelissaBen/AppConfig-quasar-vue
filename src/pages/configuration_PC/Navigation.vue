<template>
  <q-page>
    <h4 class="q-pa-lg text-center">
      Navigation personnalisée
    </h4>

    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/navigation/app.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Pour commencer , installez l'application
            <span class="red"> Custom Navigation Bar</span>
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/navigation/nav1.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Ensuite, lancez l'application
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/navigation/nav2.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Dans Paramètres , cliquez sur <span>Navigation bar</span> puis
            <span class="red">Layout</span>
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/navigation/nav3.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Choisissez
            <span class="red"> Compact </span>
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
        to="/configBase"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/teamViewer"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px

  .my-image
  width 100%
  height auto
  max-width 100%
  max-height 100%
  margin auto
</style>