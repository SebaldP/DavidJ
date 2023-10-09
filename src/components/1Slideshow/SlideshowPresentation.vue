<template>
  <div class="slideshow" :class="{ 'night-mode': this.isNightMode, 'day-mode': !this.isNightMode }">
    <figure class="slide">
      <div class="image-container">
        <img :src="this.isNightMode? getImgUrl('design/'+currentImage.src): getImgUrl('brut/'+currentImage.src)"
             :alt="currentImage.alt"
             :style="imageStyle"
             @load="calculateImageStyle"
             ref="image"
        >
      </div>
      <figcaption class="caption">{{ currentImage.caption }}</figcaption>
    </figure>
    <menu class="slideshow-controls">
      <li class="control-button pre-button"><button @click="showPrevImage"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button></li>
      <li class="control-button next-button"><button @click="showNextImage"><font-awesome-icon icon="fa-solid fa-arrow-right" /></button></li>
    </menu>
  </div>
</template>

<style scoped>
.slideshow {
  max-width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slide {
  margin: 0;
  height: 85vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.image-container {
  position: relative;
  max-height: 85vh;
  width: 100%;
  overflow: hidden;
}

.caption {
  color: white;
  text-shadow: 0 0 20px black;
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
}

.slideshow-controls {
display: flex;
list-style: none;
justify-content: space-between;
width: 100%;
}

.control-button {
  position: absolute;
  bottom: 50%;
  flex-grow: 1;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.pre-button {
  left: 1rem;
}

.next-button {
  right: 1rem;
}

.control-button button {
  cursor: pointer;
}

.control-button font-awesome-icon {
  font-size: 10rem;
  color: white;
}

.slideshow:hover .control-button,
.slideshow:hover .caption {
opacity: 1;
}
</style>

<script>
import { mapState } from 'vuex';
export default {
  name: 'SlideshowPresentation',
  data() {
    return {
      images: [
        {
          src: 'image_test01.jpg',
          alt: 'Image 1',
          caption: 'Légende de l\'image 1'
        },
        {
          src: 'image_test02.jpg',
          alt: 'Image 2',
          caption: 'Légende de l\'image 2'
        },
        {
          src: 'image_test03.jpg',
          alt: 'Image 3',
          caption: 'Légende de l\'image 3'
        },
        {
          src: 'image_test04.jpg',
          alt: 'Image 4',
          caption: 'Légende de l\'image 4'
        },
        {
          src: 'image_test05.jpg',
          alt: 'Image 5',
          caption: 'Légende de l\'image 5'
        },
        {
          src: 'image_test06.jpg',
          alt: 'Image 6',
          caption: 'Légende de l\'image 6'
        },
        {
          src: 'image_test07.jpg',
          alt: 'Image 7',
          caption: 'Légende de l\'image 7'
        },
        {
          src: 'image_test08.jpg',
          alt: 'Image 8',
          caption: 'Légende de l\'image 8'
        },
        {
          src: 'image_test09.jpg',
          alt: 'Image 9',
          caption: 'Légende de l\'image 9'
        },
        {
          src: 'image_test10.jpg',
          alt: 'Image 10',
          caption: 'Légende de l\'image 10'
        },
        {
          src: 'image_test11.jpg',
          alt: 'Image 11',
          caption: 'Légende de l\'image 11'
        },
        {
          src: 'image_test12.jpg',
          alt: 'Image 12',
          caption: 'Légende de l\'image 12'
        }
      ],
      currentImageIndex: 0,
      imageStyle: {},
    };
  },
  computed: {
    ...mapState(['isNightMode']),
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  methods: {
    calculateImageStyle() {
      // Calculez la hauteur de la page à 85% de la hauteur de la fenêtre
      const pageHeight = window.innerHeight * 0.85;

      // Calculez le rapport de 100% de la largeur de la page par rapport à la hauteur de la page
      const containerRatio = (window.innerWidth / pageHeight);
      // console.log(containerRatio);

      // Calculez le ratio de l'image
      const img = this.$refs.image;
      const imgRatio = img.width / img.height;
      // console.log(imgRatio);

      if (imgRatio < containerRatio) {
        // Si le ratio de l'image est plus petit, ajustez la largeur
        this.imageStyle = {
          width: '100%',
          height: 'auto',
        };
      } else {
        // Sinon, ajustez la hauteur
        this.imageStyle = {
          width: 'auto',
          height: '100%',
        };
      }
    },
    showPrevImage() {
      this.currentImageIndex = this.currentImageIndex === 0 ? this.images.length - 1 : this.currentImageIndex - 1;
      this.calculateImageStyle();
      this.resetInterval()
    },
    showNextImage() {
      this.currentImageIndex = this.currentImageIndex === this.images.length - 1 ? 0 : this.currentImageIndex + 1;
      this.calculateImageStyle();
      this.resetInterval()
    },
    getImgUrl(a) {
      return require(`@/assets/photo/${a}`);
    },
    resetInterval() {
      clearInterval(this.interval);
      this.calculateImageStyle();
      this.interval = setInterval(this.showNextImage, 10000);
    },
  },
  mounted() {
    // Démarrez un intervalle qui change l'image toutes les 10 secondes
    this.interval = setInterval(this.showNextImage, 10000);
    // Appelez calculateImageStyle() lorsque le composant est monté
    this.calculateImageStyle();
    // Ajoutez un écouteur d'événement de redimensionnement de la fenêtre
    window.addEventListener('resize', this.calculateImageStyle);
  },
  beforeUnmount() {
    // Nettoyez l'intervalle lorsque le composant est détruit
    clearInterval(this.interval);
    // Retirez l'écouteur d'événement lorsque le composant est détruit
    window.removeEventListener('resize', this.calculateImageStyle);
  },
};
</script>