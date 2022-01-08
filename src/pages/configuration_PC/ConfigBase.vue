<template>
  <q-page class="">
    <h4 class="text-center">Configuration de base</h4>
    <div class="row q-col-gutter-sm flex flex-center">
      <q-card class="bg-blue text-white">
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section avatar>
              <q-icon
                color="white"
                name="library_add_check"
                style="font-size: 2em;"
              />
            </q-item-section>

            <q-item-section>
              <div class="text-h6">Programmation du mini PC</div>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-section class="">
          <q-list bordered class="bg-white text-black">
            <q-item v-for="todo in TodoList" :key="todo.todo">
              <q-item-section avatar>
                <q-icon name="check" />
              </q-item-section>
              <q-item-section class="text-body1 text-wrap">
                <q-item-label>{{ todo.todo }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>

    <!-- button -->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/packaging"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label="Etape suivante "
        to="/navigation"
      />
      <br />
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ConfigBase",
  computed: {
    ...mapState("moduleJson", ["TodoList"])
  },
  data() {
    return {};
  }
};
</script>
