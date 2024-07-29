module.exports = function (plop) {
    // Component generator
    plop.setGenerator('component', {
        description: 'Generate a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/extended/{{lowerCase name}}/{{lowerCase name}}.functions.js',
                templateFile: '.plop/sample.functions.js',
            },
            {
                type: 'add',
                path: 'src/components/extended/{{lowerCase name}}/{{lowerCase name}}.hbs',
                templateFile: '.plop/sample.hbs',
            },
            {
                type: 'add',
                path: 'src/components/extended/{{lowerCase name}}/{{lowerCase name}}.scss',
                templateFile: '.plop/sample.scss',
            },
            {
                type: 'add',
                path: 'src/components/extended/{{lowerCase name}}/{{lowerCase name}}.stories.js',
                templateFile: '.plop/sample.stories.js',
                data: {
                    titlePrefix: 'Components'
                }
            },
            {
                type: 'add',
                path: 'src/components/extended/{{lowerCase name}}/{{lowerCase name}}.data.json',
                templateFile: '.plop/sample.data.json',
            },
        ],
    });
};
