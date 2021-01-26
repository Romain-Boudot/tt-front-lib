<template>
  <div
    v-bind:style="ttstyle"
    v-bind:class="{
      'tt-container': true,
      'left': hasLeftBorder,
      'right': hasRightBorder,
      'top': hasTopBorder,
      'bottom': hasBottomBorder
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tt-container',
  props: {
    border: { type: String, required: false, default: 'all' },
    ttstyle: { type: Object, required: false, default: () => ({}) }
  },
  computed: {
    hasTopBorder() {
      return this.border.includes('all') || this.border.includes('top')
    },
    hasBottomBorder() {
      return this.border.includes('all') || this.border.includes('bottom')
    },
    hasLeftBorder() {
      return this.border.includes('all') || this.border.includes('left')
    },
    hasRightBorder() {
      return this.border.includes('all') || this.border.includes('right')
    }
  }
}
</script>

<style scoped>
.tt-container {
  height: auto;
  width: 100%;
  color: white;
  border: 1px solid transparent;
}
.bottom {
  border-bottom-color: #3F495A;
}
.top {
  border-top-color: #3F495A;
}
.right {
  border-right-color: #3F495A;
}
.left {
  border-left-color: #3F495A;
}
</style>
