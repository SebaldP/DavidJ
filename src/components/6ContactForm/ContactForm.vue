<template>
  <div class="contact-form" :class="{ 'night-mode': this.isNightMode, 'day-mode': !this.isNightMode }">
    <h2>Vous souhaitez réaliser votre projet?</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Votre nom</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Votre e-mail</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="subject">Quel est l'objet de votre message?</label>
        <select id="subject" v-model="formData.subject" required>
          <option value="" disabled>Sélectionnez le sujet</option>
          <option value="Enregistrement et Captation Sonore">Enregistrement et Captation Sonore</option>
          <option value="Mixage et Traitement Sonore">Mixage et Traitement Sonore</option>
          <option value="Correction et Amélioration Technique">Correction et Amélioration Technique</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      <div class="form-group">
        <label for="request">Votre projet</label>
        <textarea id="request" v-model="formData.request" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
    <AlertPopup :show="showSuccessPopup" @close="closeSuccessPopup" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import emailjs from 'emailjs-com';
import AlertPopup from '../SubElement/AlertPopUp.vue';

export default {
  name: 'ContactForm',
  components: {
    AlertPopup
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        request: ''
      },
      showSuccessPopup: false
    };
  },
  methods: {
    submitForm() {
      emailjs.send("service_eukhgde","template_dys7ilc", this.formData)
          .then(() => {
            console.log('E-mail envoyé avec succès !');
            this.showSuccessPopup = true;
          })
          .catch(error => {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
          });
    },
    closeSuccessPopup() {
      this.showSuccessPopup = false;
    }
  },
  computed: {
    ...mapState(['isNightMode'])
  }
};
</script>

<style scoped>
form, form div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form{
  gap: 1rem;
}
input[type="text"], input[type="email"], select{
  min-width: 50vw;
}
textarea {
  min-width: 50vw;
  min-height: 20vh;
}
</style>
