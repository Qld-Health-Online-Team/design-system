
    // internal_navigation.stories.js
    import internal_navigationTemplate from './html/component.hbs';
    import site from './data/manifest.json'; 
    import './js/index.js';

    export default {
      title: 'Components/Page Navigation',
    };

    const Template = (args) => internal_navigationTemplate(args);
    export const internal_navigation = Template.bind({});
    internal_navigation.args = {
      site: site
    };