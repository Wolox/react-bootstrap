module.exports = function plopConfig(plop) {
  plop.setGenerator('component', {
    description: 'Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (in PascalCase)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/components/{{name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/app/components/{{name}}/index.test.tsx',
        templateFile: 'templates/component/index.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/app/components/{{name}}/styles.module.scss',
        templateFile: 'templates/component/styles.module.scss.hbs'
      }
    ]
  });
};
