<template>
  <div class="filter-item-container">
    <label class="text-label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FilterItemContainer',
  props: {
    label: {
      type: String,
      require: false,
      default: ''
    }
  }
}
</script>

<style scoped>
.filter-item-container {
  position: relative;
}

.text-label {
  position: absolute;
  z-index: 1;
  transform: scale(0.6);
  top: -10px;
  background: white;
  left: 5px;
  color: #5e5e5e;
}
</style>
