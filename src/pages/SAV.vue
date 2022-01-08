
<template>
  <div class="q-pa-md">
    <h4 class="text-center">En cas de problèmes , suivez ces étapes</h4>

    <!-- start timeline -->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="">
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section avatar class="">
              <q-icon
                color="blue"
                name="settings_phone"
                style="font-size: 2em;"
              />
            </q-item-section>

            <q-item-section>
              <div class="text-h4">SAV étape par étape</div>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="">
          <q-timeline :layout="layout" :side="side" color="secondary">
            <q-timeline-entry
              v-for="item in timelineSav"
              :key="item.label"
              :title="item.title"
              :subtitle="item.subtitle"
              :color="item.color"
              :icon="item.icon"
              :side="item.side"
            >
              <div>
                {{ item.desc }
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-card-section>
      </q-card>
    </div>

    <!-- end timeline -->

    <!--tab questionnaires-->
    <!--brrouilon 

    <div class="q-pa-md q-gutter-md">
      <q-list bordered padding class="rounded-borders" style="max-width: 950px">
        <q-item-label header class="text-h4 text-center"
          >Questionnaires SAV</q-item-label
        >

        <q-item
          v-for="(item, index) in questionnaire"
          :key="item.item"
          clickable
          v-ripple
        >
          <q-item-section avatar top>
            <q-avatar icon="help" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1"
              >{{ questionnaire[index].label }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-option-group
              v-model="questionnaire[index].group"
              :options="questionnaire[index].option"
              color="primary"
              inline
            />
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

        <q-separator spaced />
      </q-list>
    </div>
    -->
    <!--button-->
    <div class="q-pa-lg q-ma-lg q-gutter-lg flex flex-center">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        label="Etape precedente"
        to="/faq"
      />
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "SAV",
  data() {
    return {
      step: 1,
      layout: "dense",
      side: "right",
      Questionnaires: [
        {
          label: "question",
          icon: "help",
          group: "",
          option: [
            {
              label: "OUI",
              value: "op1"
            },
            {
              label: "NON",
              value: "op2"
            },
            {
              label: "NB",
              value: "op3"
            }
          ]
        },
        {
          label: "question",
          icon: "help",
          group: "",
          option: [
            {
              label: "OUI",
              value: "op1"
            },
            {
              label: "NON",
              value: "op2"
            },
            {
              label: "NB",
              value: "op3"
            }
          ]
        },
        {
          label: "question2",
          icon: "help",

          option: [
            {
              label: "OUI",
              value: "op1"
            },
            {
              label: "NON",
              value: "op2"
            },
            {
              label: "NB",
              value: "op3"
            }
          ]
        }
      ]
    };
  },

  computed: {
    ...mapState("moduleJson", ["timelineSav", "questionnaire"])
  },
  methods: {
    reset() {
      this.questionnaire.forEach(element => {
        console.log(element);
        element.group = "";
      });
    }
  }
};
</script>

