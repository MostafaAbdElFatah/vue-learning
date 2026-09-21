export default {
  props: {
    assignment: Object,
  },

  template: /* html */ `
       <li>
            <label>
                <input type="checkbox" v-model="assignment.complete">
                {{ assignment.name}}
            </label>
        </li>
    `,
};
