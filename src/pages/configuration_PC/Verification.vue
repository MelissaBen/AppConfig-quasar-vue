<template >
  <div class="q-col-gutter-sm  q-py-lg">
    <div class="flex flex-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
              <div class="text-h6">
                Vérification des paramétres de configuration
              </div>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="">
          <q-list bordered class="bg-white text-black">
            <q-item v-for="todo in CheckList" :key="todo.todo">
              <q-item-section avatar>
                <q-checkbox v-model="todo.completed" color="primary" />
              </q-item-section>
              <q-item-section
                class="text-body1 text-wrap"
                :style="
                  todo.completed ? { textDecoration: 'line-through' } : {}
                "
              >
                <q-item-label>{{ todo.todo }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-btn
              label="Reset"
              push
              color="white"
              text-color="primary"
              @click="reset"
              class="q-ma-lg "
            />
          </q-list>
        </q-card-section>
      </q-card>
    </div>

    <!--button-->
    <div class="q-pa-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/extinction"
      />
      <q-btn
        color="red"
        icon-right="keyboard_arrow_right"
        label=" Configuration Mini PC  "
        to="/faq"
      />
      <br />
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "Verification",
  computed: {
    ...mapState("moduleJson", ["CheckList"])
  },
  data() {
    return {};
  },
  methods: {
    reset() {
      this.CheckList.forEach(element => {
        element.completed = false;
      });
    }
  }
};
</script>

<style scoped>
</style>
