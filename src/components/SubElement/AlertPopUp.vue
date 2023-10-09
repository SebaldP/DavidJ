<template>
  <div v-if="show" class="alert-popup">
    <div class="overlay"></div>
    <div class="popup-content">
      <p>Votre message a été envoyé avec succès !</p>
      <button @click="closePopup">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertPopUp',
  props: {
    show: Boolean
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
/* Styles for the popup */
</style>
