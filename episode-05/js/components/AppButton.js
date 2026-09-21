const SPINNER_CLASSES = {
  spinner: "loader",
  ring: "loader-ring",
  dots: "loader-dots",
  circle: "loader-circle",
  roller: "loader-roller",
  corner: "loader-corner",
};

export default {
  template: `
        <button
            :disabled="processing"
            @click="processing = !processing"
            :class="[
              'relative rounded px-3 py-2 disabled:cursor-not-allowed',
              typeClass,
              processing ? spinnerClass : null,
            ]"
        >
            <slot />
            <template v-if="processing && spinner === 'roller'">
                <span v-for="n in 8" :key="n" class="roller-dot"></span>
            </template>
        </button>
  `,

  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
    spinner: {
      type: String,
      default: "ring",
      validator: (v) => Object.prototype.hasOwnProperty.call(SPINNER_CLASSES, v),
    },
  },

  computed: {
    typeClass() {
      return {
        primary: "bg-blue-200 hover:bg-blue-400",
        secondary: "bg-purple-200 hover:bg-purple-400",
        outlined:
          "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-100",
        muted: "bg-gray-200 hover:bg-gray-400",
      }[this.type];
    },
    spinnerClass() {
      return SPINNER_CLASSES[this.spinner];
    },
  },
};
