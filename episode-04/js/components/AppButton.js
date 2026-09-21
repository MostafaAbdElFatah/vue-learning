export default {
  template: `
        <button 
            :disabled="disabled"
            @click="disabled = !disabled"
            class="
                bg-gray-200 
                hover:bg-gray-400 
                rounded 
                px-3 py-2
                disabled:cursor-not-allowed
            "
            >
            <slot />
        </button>
    `,
  data() {
    return {
      disabled: false,
    };
  },
};
