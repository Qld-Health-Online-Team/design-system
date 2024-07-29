// banner_basic.stories.js
import banner_basicTemplate from './html/component.hbs';
import site from './data/manifest.json'; 
import './js/index.js';

export default {
  title: 'Components/Banner',
};

const Template = (args) => banner_basicTemplate(args);
export const banner_basic = Template.bind({});
banner_basic.args = {
  site: site
};
