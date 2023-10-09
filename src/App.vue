<template>
  <div id="page-container" :class="{ 'night-mode': this.isNightMode, 'day-mode': !this.isNightMode }">
    <nav class="navbar">
      <div class="logo left-side-navbar">
        <svg id="logo" @click="toggleNightMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.93 65.76">
          <g id="Piste">
            <g>
              <path d="M84.18,14.24V51.52c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81V14.24c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M11.95,14.24V51.52c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81V14.24c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M72.15,26.45v12.86c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81v-12.86c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M24.02,26.45v12.86c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81v-12.86c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M96.3,30.23v5.3c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81v-5.3c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M0,30.23v5.3c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81v-5.3c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M36.08,18.11v29.54c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81V18.11c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M48.1,1.81V63.95c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81V1.81c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
              <path d="M60.13,18.11v29.54c0,1,.81,1.81,1.81,1.81s1.81-.81,1.81-1.81V18.11c0-1-.81-1.81-1.81-1.81s-1.81,.81-1.81,1.81"/>
            </g>
          </g>
          <g id="Droite">
            <path d="M66.41,26.19c-.22-.22-.53-.35-.84-.35h-7.05c-.31,0-.62,.13-.84,.35-.22,.22-.35,.53-.35,.84v5.5c0,.31,.13,.62,.35,.84s.53,.35,.84,.35h7.05c.31,0,.62-.13,.84-.35,.22-.22,.35-.53,.35-.84v-5.5c0-.31-.13-.62-.35-.84Z"/>
          </g>
          <g id="Milieu">
            <path d="M54.56,42.78c-.22-.22-.53-.35-.84-.35h-7.05c-.31,0-.62,.13-.84,.35-.22,.22-.35,.53-.35,.84v5.5c0,.31,.13,.62,.35,.84s.53,.35,.84,.35h7.05c.31,0,.62-.13,.84-.35s.35-.53,.35-.84v-5.5c0-.31-.13-.62-.35-.84Z"/>
          </g>
          <g id="Gauche">
            <path d="M42.71,31.21c-.22-.22-.53-.35-.84-.35h-7.05c-.31,0-.62,.13-.84,.35-.22,.22-.35,.53-.35,.84v5.5c0,.31,.13,.62,.35,.84,.22,.22,.53,.35,.84,.35h7.05c.31,0,.62-.13,.84-.35,.22-.22,.35-.53,.35-.84v-5.5c0-.31-.13-.62-.35-.84Z"/>
          </g>
        </svg>
      </div>
      <ol class="nav-links right-side-navbar">
        <li><a href="https://www.facebook.com/people/David-Jakoubovitch-Mixing/100019074090325/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a></li>
        <li><a href="https://www.instagram.com/davidj_mixing/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></li>
        <li><a href="https://youtube.com/@lessecretsduson?si=U4rmnjxt7XHmSuya" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a></li>
      </ol>
    </nav>
    <div id="SlideShow-container">
      <SlideshowPresentation />
      <h1>David Jakoubovitch</h1>
    </div>
    <main>
      <BiographyPresentation id="présentation" />
  <!--    <MusicPlayer :songs="songs" />-->
      <ToolsSponso />
    </main>
    <SocialMedia id="actualité"/>
    <footer>
      <ContactForm id="contact"/>
      <p><small>&copy; Copyright David Jakoubovitch - 2023. Tous droits réservés. <a href="">Annuaire</a></small></p>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SlideshowPresentation from '@/components/1Slideshow/SlideshowPresentation.vue';
import BiographyPresentation from "@/components/2Bio/BiographyPresentation.vue";
// import MusicPlayer from '@/components/3MusicPlayer/MusicPlayer.vue';
import ToolsSponso from "@/components/4Tools/ToolsSponso.vue";
import SocialMedia from "@/components/5SocialMedia/SocialMedia.vue";
import ContactForm from '@/components/6ContactForm/ContactForm.vue';
export default {
  name: 'App',
  components: {
    SlideshowPresentation,
    BiographyPresentation,
    // MusicPlayer,
    ToolsSponso,
    SocialMedia,
    ContactForm
  },
  computed: {
    ...mapState(['isNightMode']),
    /*songs() {
      return ["Song 1", "Song 2", "Song 3"];
    }*/
  },
  methods: {
    ...mapMutations(['toggleNightMode']),
    blockRightClick(event) {
      // Empêchez la propagation de l'événement contextmenu
      event.preventDefault();
    },
    checkNightMode() {
      const currentHour = new Date().getHours();
      this.isNightMode = currentHour >= 20 || currentHour < 6;
    },
    getImgUrl(a) {
      return require(`@/assets/${a}`);
    }
  },
  mounted() {
    // Écoutez l'événement contextmenu sur l'élément racine du site
    document.getElementById('app').addEventListener('contextmenu', this.blockRightClick);
  },
  beforeUnmount() {
    // Assurez-vous de supprimer l'écouteur d'événements lorsque le composant est détruit
    document.getElementById('app').removeEventListener('contextmenu', this.blockRightClick);
  },
  created() {
    this.checkNightMode();
  }
};
</script>

<style>
/*Importation de la font "Raleway"*/
@font-face {
  font-family: 'Raleway';
  font-weight: 100;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-Thin.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 100;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-ThinItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 200;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-ExtraLight.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 200;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-ExtraLightItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 300;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 300;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-LightItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 400;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 400;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-Italic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 500;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 500;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-MediumItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 600;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-SemiBold.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 600;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-SemiBoldItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 700;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 700;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-BoldItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 800;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-ExtraBold.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 800;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-ExtraBoldItalic.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 900;
  font-style: normal;
  src: url('~@/assets/font/Raleway/Raleway-Black.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-weight: 900;
  font-style: italic;
  src: url('~@/assets/font/Raleway/Raleway-BlackItalic.ttf') format('truetype');
}
/* Fin de l'importation */

/* Normalisation de la page */
html {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0 0 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}

/* Fin de la normalisation de la page */

* {
  font-family: 'Raleway', sans-serif;
}

body {
  font-family: 'Raleway', sans-serif;
}

h1 {
  font-weight: 900;
  font-size: 5rem;
}

h2 {
  font-weight: 700;
  font-size: 3.09rem;
}

h3 {
  font-weight: 700;
  font-size: 1.9rem;
}

p, span, label {
  font-weight: 300;
  font-size: 1.18rem;
  line-height: 2rem;
}

figcaption {
  font-weight: 500;
  font-size: 1.18rem;
  line-height: 2rem;
}

strong {
  font-weight: 700;
  font-style: normal;
}

em, i {
  font-style: italic;
}

main, footer {
  padding: 2rem 2rem;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #E0E0E0;
}

#SlideShow-container {
  position: relative;
  max-width: 100vw;
  max-height: 85vh;
}

#SlideShow-container h1 {
  position: absolute;
  color: white;
  text-shadow: 0 0 20px black;
  bottom: 5vh;
  left: 5vw;
}


/* Barre de navigation */
#logo {
  height: 8vh;
}

#logo #Piste path {
  fill: black;
}

#logo #Gauche path, #logo #Droite path, #logo #Milieu path {
  fill: #4ebbc2;
}

.night-mode #logo {
  cursor: url(@/assets/sun.svg), auto;
}
.day-mode #logo {
  cursor: url(@/assets/moon.svg), auto;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 15vh;
  background-color: white;
  color: black;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style-type: none;
  padding-left: 0;
}

.nav-links li {
  display: inline-block;
}

.nav-links a {
  cursor: pointer;
}

.nav-links a svg{
  height: 1.5rem;
}

.nav-links a path{
  fill: black;
  transition: fill ease-in;
}

.nav-links a:hover path{
  fill: #4ebbc2;
}

/* Version nuit */
.night-mode #logo #Piste path {
  fill: #ffffff;
}

.night-mode #logo #Gauche path, .night-mode #logo #Droite path, .night-mode #logo #Milieu path {
  fill: #4ebbc2;
}

.night-mode .navbar {
  background-color: black;
  color: white;
}

.night-mode .nav-links a path {
  fill: white;
  transition: fill ease-in;
}

.night-mode .nav-links a:hover path {
  fill: #4ebbc2;
}

.night-mode p,
.night-mode h1,
.night-mode h2,
.night-mode h3,
.night-mode label{
  color: white;
}
.night-mode #SlideShow-container h1 {
  text-shadow: none;
}
.night-mode, .night-mode footer {
  background: black;
}
</style>