<template>
  <div>
    <q-list v-for="item in getMenuFaq" :key="item.label" bordered>
      <q-expansion-item
        expand-separator
        :icon="item.icon"
        :label="item.Question"
        class="label q-pa-sm"
      >
        <q-card>
          <q-card-section class="item">
            {{ item.Reponse }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script>
export default {
  props: ["getMenuFaq"]
};
</script>

<style >
.label {
  font-size: 18px;
}

.item {
  color: rgb(63, 75, 236);
}
</style>