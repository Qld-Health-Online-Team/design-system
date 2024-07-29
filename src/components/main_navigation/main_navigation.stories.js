
// main_navigation.stories.js
import main_navigationTemplate from './html/component.hbs';
import site from './data/manifest.json';
import './js/index.js';

export default {
  title: 'Components/Navigation',
};

const Template = (args) => main_navigationTemplate(args);
export const main_navigation = Template.bind({});
main_navigation.args = {
  site: site
};