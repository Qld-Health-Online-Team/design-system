import widgetsTemplate from './html/component.hbs';
import site from './data/manifest.json'; 
import './js/index.js';

export default {
  title: 'Components/Widgets',
  decorators: [
    (story) => {
      const storyElement = story();
      const wrapper = document.createElement('div');
      wrapper.style.backgroundColor = '#333';
      wrapper.style.color = '#fff';
      wrapper.style.padding = '20px';
      wrapper.style.height = '100vh';
      wrapper.style.boxSizing = 'border-box';
      wrapper.innerHTML = storyElement;
      return wrapper;
    },
  ],
};

const Template = (args) => widgetsTemplate(args);

export const widgets = Template.bind({});
widgets.args = {
  site: site,
};
