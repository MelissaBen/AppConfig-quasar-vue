<template>
  <q-page>
    <h4 class="q-pa-lg text-center">
      Quick Support
    </h4>
    <p class="text-h6 text-center">
      Les différentes étapes d'instalation de Quick Support
    </p>
    <div class="q-pa-md caroussel">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="100%"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS1.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS2.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS3.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS4.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="5" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS5.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="6" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS6.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="7" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS7.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="8" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS8.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="9" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders  full-height"
              src="~assets/teamViewer/QS9.jpg"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Revenir à la page précédente "
        to="/teamViewer"
      />

      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "QuickSupport",
  data() {
    return {
      slide: 1
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px

.caroussel
  width: 100%
  max-width: 1000px
  margin: auto

.info
  color: green
</style>