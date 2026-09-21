import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  data() {
    return {
      assignments: [
        { id: 0, name: "Finish project", complete: false, tag: "math" },
        { id: 1, name: "Read chapter 4", complete: false, tag: "science" },
        { id: 2, name: "Turn in homework", complete: false, tag: "math" },
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
    add(newAssignment) {
      this.assignments.push({
        id: this.assignments.length,
        name: newAssignment,
        complete: false,
      });
      this.newAssignment = "";
    },
  },

  template: /* html */ `
        <section class="grid grid-cols-2 items-start space-x-10">
            <assignment-list 
                title="In Progress" 
                :assignments="filters.inProgress" 
            /> 
            <assignment-list 
                title="Completed" 
                :assignments="filters.completed"
             /> 
        </section>
        <assignment-create @add="add" />
        <pre>{{ JSON.stringify(assignments, null, 2) }}</pre>
    `,
};
