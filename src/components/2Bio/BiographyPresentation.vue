<template>
  <div :class="{ 'night-mode': this.isNightMode, 'day-mode': !this.isNightMode }">
    <div id="reward-container">
      <figure class="reward-element">
        <img :src="getImgUrl('disque-platine-logo.png')" alt="Logo du disque de platine">
        <figcaption>1 disque de platine</figcaption>
      </figure>
      <figure class="reward-element">
        <img :src="getImgUrl('disque-or-logo.png')" alt="Logo du disque d'or">
        <figcaption>3 disques d'or</figcaption>
      </figure>
    </div>
    <h2>Son parcours</h2>
    <div id="présentation_parcours">
        <p class="présentation_parcours_texte">
          David Jakoubovitch, doté d'une expérience avérée en tant qu'ingénieur du son, a eu le privilège d'apporter sa contribution à trois albums certifiés disques d'or et un autre distingué du prestigieux statut de disque de platine. De manière tout aussi remarquable, il cultive également sa passion en tant que musicien accompli.
        </p>
        <p class="présentation_parcours_texte">
          Depuis les prémices de sa carrière au début des années 2000, il s'est immergé dans une mosaïque de styles musicaux, notamment en mettant en valeur les subtilités des productions acoustiques. Au fil des dix dernières années, il s'est consacré de manière exclusive à l'art délicat du mixage.
        </p>
        <p class="présentation_parcours_texte">
          Guidé par des années d'explorations à travers une diversité de configurations techniques, il a aujourd'hui établi un environnement de mixage hybride, où l'écosystème <em>Protools</em> joue un rôle central. Ce système est harmonieusement enrichi par le convertisseur de qualité supérieure <em>Lynx</em> ainsi que par des périphériques analogiques haut de gamme. Ce mariage élégant entre les mondes numérique et analogique révèle son souci constant de fournir le meilleur résultat possible.
        </p>
        <p class="présentation_parcours_texte">
          Depuis l'année 2020, il a généreusement partagé son expertise en lançant une chaîne YouTube dédiée au vaste univers sonore. Au travers de cette plateforme, il offre humblement des conseils éclairés ainsi que des évaluations approfondies de divers équipements, dans le but sincère d'encourager l'apprentissage et la compréhension mutuelle au sein de la communauté passionnée par le son. des conseils et des tests de matériel.
        </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'BiographyPresentation',
  methods: {
    getImgUrl(a) {
      return require(`@/assets/${a}`);
    },
  },
  computed: {
    ...mapState(['isNightMode']),
  }
};
</script>

<style scoped>
#reward-container{
  display: flex;
  gap: 2rem;
}
.reward-element{
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}
.reward-element img{
  height: 4rem;
}

.night-mode .reward-element figcaption{
  color: white;
}
</style>