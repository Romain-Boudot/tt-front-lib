<template>
  <button
    class="tt-lib-btn"
    v-on:click="$emit('click', $event)"
    v-bind:class="{
      primary: isPrimary,
      secondary: isSecondary,
      plain: isPlain,
      text: isText
    }"
    v-bind:style="ttstyle">
    <tt-icon
      color="inherit"
      v-bind:size="iconSize"
      v-if="!!icon && iconPlacement === 'left'"
      v-bind:style="{ marginRight: iconMargin }"
      v-bind:icon="icon" />
    <slot></slot>
    <tt-icon
      color="inherit"
      v-bind:size="iconSize"
      v-if="!!icon && iconPlacement === 'right'"
      v-bind:style="{ marginLeft: iconMargin }"
      v-bind:icon="icon" />
  </button>
</template>

<script>
export default {
  name: 'tt-button',
  props: {
    type: { type: String, required: false, default: 'plain' },
    color: { type: String, required: false, default: 'primary' },
    icon: { type: String, required: false, default: null },
    iconSize: { type: String, required: false, default: '1em' },
    ttstyle: { type: Object, required: false, default: () => ({ padding: '.5em 1em' }) },
    iconMargin: { type: String, required: false, default: '.5em' },
    iconPlacement: { type: String, required: false, default: 'left' }
  },
  computed: {
    isPrimary() {
      return this.color === 'primary'
    },
    isSecondary() {
      return this.color === 'secondary'
    },
    isText() {
      return this.type === 'text'
    },
    isPlain() {
      return this.type === 'plain'
    }
  }
}
</script>

<style scoped>
.tt-lib-btn {
  display: flex;
  align-items: center;
  border: none;
  border-radius: 999999px;
  cursor: pointer;
  transition-duration: .2s;
  transition-timing-function: ease;
  transition-property: background-color, border, color;
}
.tt-lib-btn, .tt-lib-btn:focus, .tt-lib-btn:active {
  outline: none;
}

.tt-lib-btn.plain.primary {
  background-color: #E5831B;
  fill: #1E232B;
  color: #1E232B;
}
.tt-lib-btn.plain.primary:hover {
  background-color: #aa6011;
}
.tt-lib-btn.plain.primary:active {
  background-color: #cc7313;
}

.tt-lib-btn.plain.secondary {
  background-color: #FAE6D1;
  fill: #1E232B;
  color: #1E232B;
}
.tt-lib-btn.plain.secondary:hover {
  background-color: #a59889;
}
.tt-lib-btn.plain.secondary:active {
  background-color: #cebdac;
}

.tt-lib-btn.text.primary {
  background-color: transparent;
  fill: #E5831B;
  color: #E5831B;
}
.tt-lib-btn.text.primary:hover {
  fill: #aa6011;
  color: #aa6011;
}
.tt-lib-btn.text.primary:active {
  fill: #cc7313;
  color: #cc7313;
}

.tt-lib-btn.text.secondary {
  background-color: transparent;
  fill: #FAE6D1;
  color: #FAE6D1;
}
.tt-lib-btn.text.secondary:hover {
  fill: #a59889;
  color: #a59889;
}
.tt-lib-btn.text.secondary:active {
  fill: #cebdac;
  color: #cebdac;
}
</style>