<template>
  <div id="app">
    <div class="container">
      <div class="draggable-container">
        <draggable-list ref="listA" list-name="listA" />
      </div>
      <div class="buttons">
        <button @click="transferSelected('listA', 'listB')"> &gt; </button>
        <button @click="transferSelected('listB', 'listA')"> &lt; </button>
      </div>
      <div class="draggable-container">
        <draggable-list ref="listB" list-name="listB" />
      </div>
    </div>
  </div>
</template>

<script>
import DraggableList from './components/DraggableList.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    DraggableList,
  },
  methods: {
    ...mapMutations(['transferItem']),
    transferSelected(fromList, toList) {
      this.$refs[fromList].selectedItems.forEach(item => {
        this.transferItem({ fromList, toList, item });
      });
      this.$refs[fromList].selectedItems = [];
    },
  },
};
</script>

<style scoped>

.container {
  display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
