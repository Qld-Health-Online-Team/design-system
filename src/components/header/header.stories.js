
    import headerTemplate from './html/component.hbs';
    import site from './data/manifest.json'; 
    import './js/index.js';

    export default {
      title: 'Components/Header',
    };

    const Template = (args) => headerTemplate(args);
    export const header = Template.bind({});
    header.args = {
      site: site
    };