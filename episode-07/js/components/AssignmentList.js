import Assignment from "./Assignment.js";
export default {
  props: {
    title: String,
    assignments: Array,
  },
  components: { Assignment },
  template: /* html */ `
        <section /*v-show="assignments.length"*/ :class="{ invisible: !assignments.length }">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul class="border border-gray-600 rounded-2xl divide-y divide-gray-600">
                <assignment 
                    v-for="assignment in assignments" 
                    :assignment="assignment"
                    :key="assignment.id"
                />
            </ul>
        </section>
    `,
};
