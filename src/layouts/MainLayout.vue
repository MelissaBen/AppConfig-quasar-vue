<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="changeColorClass" elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          v-on:click="leftDrawerOpen = !leftDrawerOpen"
          class="q-py-sm"
        />

        <q-toolbar-title class="toolbarTitle">
          Table kids
        </q-toolbar-title>

        <!-- Navigation Tabs -->
        <div
          class=" button q-pa-sm q-gutter-lg row"
          v-if="this.$route.path != '/'"
        >
          <q-btn color="grey" label="Accueil " to="/" />
          <!--
          <q-btn
            color="grey"
            label="Retour "
            v-if="this.$route.path != '/'"
            v-go-back.single
          />-->
        </div>
        <div
          v-if="this.$route.path != '/'"
          class="menuButton flex flex-center q-pa-sm q-gutter-lg row"
        >
          <q-btn
            v-for="item in this.getMenuJson"
            :key="item.label"
            style="min-width: 280px"
            :color="item.color"
            :label="item.label"
            icon="keyboard_arrow_down"
          >
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list
                v-for="item in item.children"
                v-bind:key="item.title"
                style="min-width: 280px"
              >
                <q-item v-if="item.to" :to="item.to" clickable>
                  <q-item-section>{{ item.label }}</q-item-section>
                </q-item>
                <q-item v-else :label="item.label" :icon="item.icon" clickable>
                  <q-item-section>{{ item.label }}</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <q-menu anchor="top right" self="top left">
                    <q-list
                      v-for="tiroir in item.children"
                      v-bind:key="tiroir.label"
                      sclass="q-pa-lg "
                      style="min-width: 200px "
                      clickable
                    >
                      <q-item :to="tiroir.to" dense clickable>
                        <q-item-section>{{ tiroir.label }}</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <MenuComponents
        v-for="link in this.getMenuJson"
        :key="link.label"
        v-bind="link"
      />
    </q-drawer>
    <q-page-container>
      <h4 :style="changeColorLabel" class="text-center">
        {{ addPath() }}
      </h4>
      <router-view />
    </q-page-container>
    <q-footer :class="changeColorClass" elevated>
      <q-toolbar class="glossy">
        <div class=" button q-pa-sm row" v-if="this.$route.path != '/'">
          <q-btn
            color="grey"
            label="Retour "
            v-if="this.$route.path != '/'"
            v-go-back.single
          /></div
      ></q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import MenuComponents from "components/Menu.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  components: {
    MenuComponents
  },
  data() {
    return {
      leftDrawerOpen: false,
      actualColor: "primary",
      ColorLabel: "red"
    };
  },
  mounted() {},
  computed: {
    ...mapGetters("moduleJson", ["getMenuJson"]),
    changeColorClass: function() {
      this.getColorFromUrl();
      return "bg-" + this.actualColor;
    },
    changeColorLabel: function() {
      this.getColorFromUrl();
      return "color:" + this.ColorLabel;
    }
  },
  created() {},
  methods: {
    bgColor() {
      return " background-color:orange ; ";
    },
    getColorFromUrl() {
      var pageActuelle = this.$route.path;
      var BackgroundColor = "";
      var Color = "";

      this.getMenuJson.forEach(element => {
        element["children"].forEach(el => {
          if (el.to && el.to == pageActuelle) {
            BackgroundColor = element.bgColor;
            Color = element.color;
          } else if (el["children"]) {
            el["children"].filter(function(filterValue) {
              if (filterValue.to == pageActuelle) {
                BackgroundColor = element.bgColor;
                Color = element.color;
              }
            });
          }
        });
      });

      this.actualColor = BackgroundColor;
      this.ColorLabel = Color;
    },
    addPath() {
      var pageActuelle = this.$route.path;
      let label = "";
      this.getMenuJson.forEach(element => {
        element["children"].forEach(el => {
          if (el.to && el.to == pageActuelle) {
            console.log("test ici " + el.label);
            label = element.label;
          } else if (el["children"]) {
            el["children"].filter(function(filterValue) {
              if (filterValue.to == pageActuelle) {
                label = element.label;
              }
            });
          }
        });
      });
      return label;
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .menuButton {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  .toolbarTitle {
    display: none;
  }
  .button {
    padding: 0;
    margin: 0;
  }
}
@media screen and (max-width: 375px) {
  .toolbarTitle {
    font-size: 17px;
    margin: 0;
  }
  .button {
    padding: 0;
  }
}
</style>