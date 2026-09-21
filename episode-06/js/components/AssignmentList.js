import Assignment from "./Assignment.js";
export default {
  props: {
    title: String,
    assignments: Array,
  },
  components: { Assignment },
  template: /* html */  `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <assignment 
                    v-for="assignment in assignments" 
                    :assignment="assignment"
                    :key="assignment.id"
                />
            </ul>
        </section>
    `,
};
