
    // breadcrumbs.stories.js
    import breadcrumbsTemplate from './html/component.hbs';
    import site from './data/manifest.json'; 
    import './js/index.js';

    export default {
      title: 'Components/Breadcrumbs',
    };

    const Template = (args) => breadcrumbsTemplate(args);
    export const breadcrumbs = Template.bind({});
    breadcrumbs.args = {
      current: site
    };