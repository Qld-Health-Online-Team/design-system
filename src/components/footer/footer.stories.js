
    // footer.stories.js
    import footerTemplate from './html/component.hbs';
    import site from './data/manifest.json'; 
    import './js/index.js';

    export default {
      title: 'Components/Footer',
    };

    const Template = (args) => footerTemplate(args);
    export const footer = Template.bind({});
    footer.args = {
      site: site
    };