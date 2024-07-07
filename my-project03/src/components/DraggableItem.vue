<template>
  <div :class="['draggable-item', { selected: isSelected }]" @click="toggleSelect">
    <input type="checkbox" v-model="isSelected" />
    {{ item }}
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggleSelect() {
      this.isSelected = !this.isSelected;
      this.$emit('select-item', this.item, this.isSelected);
    },
  },
};
</script>

<style scoped>
.draggable-item {
  padding: 8px;
  margin: 4px 0;
  background: lightblue;
  cursor: pointer;
}
.draggable-item.selected {
  background: lightgreen;
}
</style>
