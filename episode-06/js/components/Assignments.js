import AssignmentList from "./AssignmentList.js";

export default {
  data() {
    return {
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

  components: { AssignmentList },
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

        <pre>{{ JSON.stringify(assignments, null, 2) }}</pre>
       
    `,
};
