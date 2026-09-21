import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  data() {
    return {
      currentTag: "",
    };
  },

  components: { Assignment, AssignmentTags },

  props: {
    title: String,
    assignments: Array,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.assignments.map((a) => a.tag))];
    },

    filteredAssignments() {
      if (this.currentTag.length === 0 || this.currentTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag == this.currentTag);
    },
  },

  template: /* html */ `
        <!--<section v-show="assignments.length"> -->
        <section  :class="{ invisible: !assignments.length }">
            <h2 class="font-bold mb-2 flex justify-between">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <assignment-tags 
              :initial-tags="assignments.map(a => a.tag)" 
              @changeTag="currentTag = $event"
              :current-tag="currentTag"
            />

            <ul class="border border-gray-600 rounded-2xl divide-y divide-gray-600 mt-2">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :assignment="assignment"
                    :key="assignment.id"
                />
            </ul>
        </section>
    `,
};
