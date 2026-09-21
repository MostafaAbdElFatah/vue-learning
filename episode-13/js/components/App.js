import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments, Panel },
  template: /* html */ `
        <div class="grid gap-6">
            <panel> 
                <template v-slot:heading>

                </template>
                <template v-slot:default>

                </template>
            </panel>
            <assignments />
        </div>
    `,
};
