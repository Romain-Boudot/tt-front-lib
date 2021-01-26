<template>
  <div
    class="tt-lib-input-container"
    v-bind:style="ttstyle"
    v-bind:class="{
      primary: isPrimary,
      secondary: isSecondary,
      plain: isPlain,
      stroke: isStroke
    }">
    <tt-button
      color="secondary"
      type="text"
      iconMargin="0"
      v-on:input="$emit('click', $event)"
      v-if="!!icon && iconPlacement === 'left'"
      v-bind:style="{ fontSize: 'inherit', marginLeft: iconMargin,  padding: 0, paddingLeft: '.2em' }"
      v-bind:icon="icon" />
    <input
      v-bind:placeholder="placeholder"
      class="tt-lib-input"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-bind:type="inputType"
      v-bind:style="ttstyle">
    <tt-button
      color="secondary"
      type="text"
      iconMargin="0"
      v-on:input="$emit('click', $event)"
      v-if="!!icon && iconPlacement === 'right'"
      v-bind:style="{ fontSize: 'inherit', marginRight: iconMargin, padding: 0, paddingRight: '.2em' }"
      v-bind:icon="icon" />
  </div>
</template>

<script>
export default {
  name: 'tt-input',
  props: {
    placeholder: { type: String, required: false, default: '' },
    value: { type: String },
    inputType: { type: String, required: false, default: 'text' },
    type: { type: String, required: false, default: 'stroke' },
    icon: { type: String, required: false, default: null },
    iconPlacement: { type: String, required: false, default: 'right' },
    iconMargin: { type: String, required: false, default: '.5em' },
    iconSize: { type: String, required: false, default: '1em' },
    color: { type: String, required: false, default: 'primary' },
    ttstyle: { type: Object, required: false, default: () => ({ padding: '.2em' }) }
  },
  computed: {
    isPrimary() {
      return this.color === 'primary'
    },
    isSecondary() {
      return this.color === 'secondary'
    },
    isStroke() {
      return this.type === 'stroke'
    },
    isPlain() {
      return this.type === 'plain'
    }
  }
}
</script>

<style scoped>
.tt-lib-input-container {
  display: flex;
  align-items: center;
}
input {
  border: none;
  background-color: #fff0;
  color: #FAE6D1;
  width: 100%;
  font-size: 1em;
  margin: .2em .5em;
}
input, input:focus, input:active {
  outline: none;
}
.tt-lib-input-container {
  border-radius: 50000px;
}
.tt-lib-input-container.stroke {
  border: 1px solid #FAE6D1;
  box-sizing: border-box;
}
.tt-lib-input-container.plain {
  background-color: #FAE6D10A;
}
</style>