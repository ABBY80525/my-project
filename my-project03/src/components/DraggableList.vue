<template>
  <div class="draggable-list">
    <input type="text" v-model="searchQuery" placeholder="Search Box" />
    <draggable v-model="filteredItems" @end="onEnd">
      <draggable-item
        v-for="item in filteredItems"
        :key="item"
        :item="item"
        @select-item="selectItem"
      />
    </draggable>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { VueDraggableNext as Draggable } from 'vue-draggable-next'; 
import DraggableItem from './DraggableItem.vue';

export default {
  components: {
    Draggable,
    DraggableItem,
  },
  props: ['listName'],
  data() {
    return {
      searchQuery: '',
      selectedItems: [],
    };
  },
  computed: {
    ...mapState([ 'listA', 'listB' ]),
    filteredItems() {
      const list = this[this.listName];
      return list.filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    onEnd(event) {
      const item = event.item.innerText.trim();
      this.$store.commit('transferItem', {
        fromList: this.listName,
        toList: this.listName === 'listA' ? 'listB' : 'listA',
        item,
      });
    },
    selectItem(item, isSelected) {
      if (isSelected) {
        this.selectedItems.push(item);
      } else {
        const index = this.selectedItems.indexOf(item);
        if (index > -1) {
          this.selectedItems.splice(index, 1);
        }
      }
    },
  },
};
</script>

<style scoped>
.draggable-list {
  width: 300px;
  height: 300px; /* 固定高度 */
  overflow-y: auto; /* 垂直滚动条 */
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
