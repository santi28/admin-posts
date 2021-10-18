<template>
  <div class="pill" ref="root">
    <div class="actions">
      <div
        class="state"
        :class="(disabled) ? 'disabled' : 'enabled'">
        {{ (disabled) ? 'Deshabilitado' : 'Habilitado' }}
      </div>
      <input type="checkbox"
        value="1"
        :checked="checked"
        @change="change"/>
    </div>
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    disabled: Boolean,
    value: Boolean,
  },
  data: () => ({
    checked: false,
  }),
  methods: {
    change() {
      this.checked = !this.checked;
      this.$emit('input', this.checked);
    },
  },
  watch: {
    disabled() {
      this.checked = false;
    },
  },
  mounted() {
    this.checked = this.value;
  },
};
</script>

<style scoped>
  .pill {
    display: flex;
    flex-direction: column;
    gap: 10px;

    min-height: 100px;
    padding: 15px 20px;

    font-family: Poppins;
    border: solid 1px #ddd;
    border-radius: 10px;
  }

  .pill .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* margin-bottom: 10px; */
  }

  .pill .actions .state {
    font-size: .8rem;
    border-radius: 30px;

    width: fit-content;
    padding: 5px 15px;
    color: white;
  }

  .actions .state.enabled { background-color: #30d8a0; }
  .actions .state.disabled { background-color: #afafaf; }

  .pill h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
</style>
