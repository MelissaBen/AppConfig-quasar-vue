<template>
  <q-banner inline-actions class=" text-center text-white bg-red">
    <span class="text-h6"><slot /></span>
  </q-banner>
</template>

<script>
export default {
  name: "ModalBanner"
};
</script>
