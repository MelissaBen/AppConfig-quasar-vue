<template>
  <q-page>
    <p>concerne entreprise</p>
    <h4 class="text-center">Foire aux questions</h4>
    <div class="q-pa-lg row " style="">
      <div class="q-py-lg col-lg-7 col-md-6 col-12">
        <banner>Questions fréquentes</banner>
        <faqMenu :getMenuFaq="this.MenuFaq"></faqMenu>
      </div>
      <div class="col-lg-5 col-md-6 col-12 ">
        <q-img src="../assets/faq.png"></q-img>
      </div>
    </div>
    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/verification"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label=" Configuration Mini PC  "
        to="/sav"
      />
      <br />
    </div>
  </q-page>
</template>
<script>
import { mapState } from "vuex";
import faqMenu from "components/FaqMenu.vue";
import banner from "components/ModalBanner.vue";

export default {
  components: {
    banner,
    faqMenu
  },
  computed: {
    ...mapState("moduleJson", ["MenuFaq"])
  }
};
</script>

