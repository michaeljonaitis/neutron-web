<template>
  <div class="stacked-field">
    <label :for="field_id">{{label}}</label>
    <input
      v-on:input="handleInput($event.target.value)"
      class="base-field"
      :type="type"
      :id="field_id"
      :required="required">
  </div>
</template>

<script>
export default {
  props: {
    field_id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>
