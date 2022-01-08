<template>
  <div>
    <q-expansion-item
      :label="label"
      default-opened
      class="q-pt-lg "
      :icon="icon"
    >
      <q-list v-for="item in children" v-bind:key="item.label" class="q-pl-lg">
        <q-item v-if="item.to" :to="item.to">
          <q-item-section avatar>
            <q-icon :name="item.icon" :color="color" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }} </q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item
          default-opened
          v-else
          :label="item.label"
          :icon="item.icon"
        >
          <q-list
            v-for="tiroir in item.children"
            v-bind:key="tiroir.label"
            class="q-pl-lg"
          >
            <q-item :to="tiroir.to" class="q-pl-lg">
              <q-item-section avatar>
                <q-icon :name="tiroir.icon" :color="color" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ tiroir.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    label: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      default: ""
    },

    children: {
      type: Array
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>
