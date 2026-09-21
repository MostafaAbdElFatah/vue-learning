export default {
  props: {
    assignment: Object,
  },

  template: /* html */ `
       <li class="m-2">
            <label class="flex justify-between items-center gap-4">
                {{ assignment.name}}
                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    `,
};
