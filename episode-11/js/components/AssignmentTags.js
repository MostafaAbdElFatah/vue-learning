export default {
  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },

  template: /* html */ `
        <div class="flex gap-2">
            <button 
                v-for="tag in tags" 
                @click="$emit('change-tag', tag)"
                class="border rounded px-1 py-px text-xs"
                :class="{ 'border-blue-500 text-blue-500': currentTag === tag }"
            >
                {{ tag }}
            </button>
        </div>
    `,
};
