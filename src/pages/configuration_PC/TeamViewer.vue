<template>
  <q-page>
    <h4 class="q-pa-lg text-center">
      Navigation personnalisée
    </h4>
    <div class="flex-center q-pa-lg row items-start q-gutter-md">
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/teamViewer/app-TV.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Pour commencer , installez l'application
            <span class="red"> TeamViewer </span>
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/teamViewer/TV1.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Ensuite, lancez l'application et cliquez sur
            <span class="red">Démarrer</span>
          </p>
        </q-zoom>
      </q-card>
      <q-card class="my-card">
        <q-zoom background-color="blue-grey-1">
          <q-img src="~assets/teamViewer/TV2.jpg" basic> </q-img>
          <p class="text-center text-h6 q-pa-sm">
            Cliquez sur <span class="red">installer QUICKSUPPORT</span>
          </p>
        </q-zoom>
      </q-card>
      <div class="my-card">
        <q-card>
          <q-zoom background-color="blue-grey-1">
            <q-img src="~assets/teamViewer/TV3.jpg" basic> </q-img>

            <p class="text-center text-h6 q-pa-sm">
              Installez l'application ,
              <q-btn
                to="/quickSupport"
                flat
                style="color: #FF0080"
                label="Cliquez ici pour plus de details"
              />
            </p>
          </q-zoom>
        </q-card>
      </div>
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
        to="/kidsPlace"
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

.info
  color: green
</style>
