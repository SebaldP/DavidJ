<template>
  <div :class="{ 'music-player': true, 'night-mode': this.isNightMode }">
    <audio ref="audioPlayer" controls>
      <source :src="selectedSong" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <ul class="song-list">
      <li v-for="(song, index) in songs" :key="index" @click="selectSong(index)">
        {{ song }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    songs: Array
  },
  data() {
    return {
      selectedSongIndex: 0
    };
  },
  computed: {
    ...mapState(['isNightMode']),
    selectedSong() {
      return this.songs[this.selectedSongIndex];
    }
  },
  methods: {
    selectSong(index) {
      this.selectedSongIndex = index;
      this.$refs.audioPlayer.load();
      this.$refs.audioPlayer.play();
    }
  }
};
</script>

<style scoped>
.music-player {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.song-list {
  list-style: none;
  padding: 0;
  cursor: pointer;
}
</style>