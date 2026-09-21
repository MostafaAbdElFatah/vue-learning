import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  data() {
    return {
      newAssignment: "",
      assignments: [
        { id: 0, name: "Finish project", complete: false },
        { id: 1, name: "Read chapter 4", complete: false },
        { id: 2, name: "Turn in homework", complete: false },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },

  methods: {
    add() {
      this.assignments.push({
        id: this.assignments.length,
        name: this.newAssignment,
        complete: false,
      });
      this.newAssignment = "";
    },
  },

  template: /* html */ `
        <section class="grid grid-cols-2 items-start space-x-10">
            <assignment-list 
                title="In Progress Assignments" 
                :assignments="filters.inProgress" 
            />
            <assignment-list 
                title="Completed Assignments" 
                :assignments="filters.completed"
             /> 
        </section>

        <form 
          class="flex justify-center"
          @submit.prevent="add"
        >
          <div class="mt-6 space-x-4 p-2 border border-gray-600 rounded-sm w-fit">
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

        <pre>{{ JSON.stringify(assignments, null, 2) }}</pre>

    `,
};
