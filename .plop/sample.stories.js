// .plop/sample.stories.js

import data from './{{lowerCase name}}.data.json';
import template from './{{lowerCase name}}.hbs';
import './{{lowerCase name}}.scss';

export default {
  title: '{{titlePrefix}}/Extended/{{lowerCase name}}',
  parameters: {
    a11y: {
      // Optional configuration
      config: {},
      options: {},
    },
  },
};

export const Default = (args) => template(args);

Default.args = data;
