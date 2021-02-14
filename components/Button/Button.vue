<template>
  <button 
    type="button" 
    :class="classes" 
    @click="onClick">
    <fa :icon="['far','lightbulb']" />
    {{ label }}
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: ''
    },
    primary: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    }
  },

  computed: {
    classes() {
      return {
        "button": true,
        "button--primary": this.primary,
        "button--secondary": !this.primary,
        [`button--${this.size}`]: true,
      };
    }
  },

  methods: {
    onClick() {
      this.$emit("clicked");
    },
  },
};
</script>