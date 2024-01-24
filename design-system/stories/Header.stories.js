// .storybook/YourComponent.stories.js
import Handlebars from 'handlebars';
import template from './stories/header.hbs';

export default {
  title: 'Header',
};

export const header = () => {
  const data = {
    title: 'Hello, Storybook!',
    content: 'This is a Handlebars template in a Storybook story.',
  };

  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(data);
};
