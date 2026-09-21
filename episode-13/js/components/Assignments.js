import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  data() {
    return {
      assignments: [],
    };
  },

  async created() {
    const result = await fetch("http://localhost:3001/assignments");
    this.assignments = await result.json();
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
        <section class="grid grid-cols-2 items-start space-x-2">
            <assignment-list 
                title="In Progress" 
                :assignments="filters.inProgress" 
            > 
              <assignment-create @add="add" />
            </assignment-list>
            <assignment-list 
                title="Completed" 
                :assignments="filters.completed"
                can-toggle
             /> 
        </section>
    `,
};
