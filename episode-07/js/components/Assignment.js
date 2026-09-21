export default {
  props: {
    assignment: Object,
  },

  template: /* html */ `
       <li class="m-2">
            <label class="flex justify-between items-center">
                {{ assignment.name}}
                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    `,
};
