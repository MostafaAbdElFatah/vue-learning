import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
  data() {
    return {
      currentTag: "",
      show: true,
    };
  },

  components: {
    Panel,
    Assignment,
    AssignmentTags,
  },

  props: {
    title: String,
    assignments: Array,
    canToggle: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tags() {
      return [
        "all",
        ...new Set(this.assignments.map((a) => a.tag?.trim()).filter(Boolean)),
      ];
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
        <panel :class="{ invisible: canToggle && !assignments.length }" >
            <div class="font-bold mb-2 flex justify-between">
               <h2>
                {{ title }}
                <span>({{ assignments.length }})</span>
              </h2>

              <button v-show="canToggle" @click="show = !show">&times;</button>
            </div>
           

            <assignment-tags 
              :initial-tags="tags" 
              v-model="currentTag"
            />


            <!-- Empty state -->
            <div
                v-if="filteredAssignments.length === 0"
                class="border border-gray-600 rounded-2xl mt-2 p-8 text-center text-gray-400"
            >
                No assignments found.
            </div>

            <!-- Assignments list -->
            <ul 
              v-if="filteredAssignments.length !== 0" 
              class="border border-gray-600 rounded-2xl divide-y divide-gray-600 mt-2"
            >
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :assignment="assignment"
                    :key="assignment.id"
                />
            </ul>

                <slot />  

            <template #footer>
               my footer
            </template>
        </panel>
    `,
};
