export default {
  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },

  template: /* html */ `

        <form
          class="flex justify-center"
          @submit.prevent="add"
        >
          <div class="mt-6 flex space-x-4 p-2 border border-gray-600 rounded-sm w-fit">
            <input 
              autofocus
              type="text" 
              name="assignment"
              placeholder="New assignments."
              v-model="newAssignment"
              required
            >

            <input type="submit" value="Submit">
          </div>
        </form>
    `,
};
