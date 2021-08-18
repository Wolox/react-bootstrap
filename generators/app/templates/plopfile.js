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
        path: 'src/components/{{name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.test.tsx',
        templateFile: 'templates/component/index.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/styles.module.scss',
        templateFile: 'templates/component/styles.module.scss.hbs'
      }
    ]
  });

  plop.setGenerator('screen', {
    description: 'Screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (in PascalCase)'
      },
      {
        type: 'confirm',
        name: 'authenticated',
        default: false,
        message: 'Does the route require authentication?'
      },
      {
        type: 'input',
        name: 'route',
        message: 'Route name (in kebab-case)',
        default: (data) => plop.getHelper('kebabCase')(data.name)
      },
      {
        type: 'input',
        name: 'routeTitle',
        message: 'Route title',
        default: (data) => plop.getHelper('sentenceCase')(data.name)
      },
      {
        type: 'input',
        name: 'routeDescription',
        message: 'Route description',
        default: (data) => plop.getHelper('sentenceCase')(data.name)
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{name}}/index.tsx',
        templateFile: 'templates/screen/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/screens/{{name}}/index.test.tsx',
        templateFile: 'templates/screen/index.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/screens/{{name}}/styles.module.scss',
        templateFile: 'templates/screen/styles.module.scss.hbs'
      },
      {
        type: 'modify',
        path: 'src/components/Routes/constants.tsx',
        pattern: '// Add imports for screens above (FOR GENERATORS, DO NOT REMOVE)',
        template:
          "const {{name}} = lazy(() => import('../../screens/{{name}}'));\n// Add imports for screens above (FOR GENERATORS, DO NOT REMOVE)"
      },
      {
        type: 'modify',
        path: 'src/components/Routes/paths.ts',
        pattern: '\n};',
        template: ",\n  {{camelCase name}}: '/{{route}}'\n};"
      },
      {
        type: 'append',
        path: 'src/components/Routes/constants.tsx',
        pattern: 'export const ROUTES = [',
        template: `  {
    exact: false,
    path: PATHS.{{camelCase name}},
    component: {{name}},
    title: 'Routes:{{camelCase name}}Title',
    description: 'Routes:{{camelCase name}}Description'{{#if authenticated}},
    redirectTo: (user: User | null) => (user ? undefined : MAIN_PUBLIC_PATH){{/if}}
  },`
      },
      {
        type: 'modify',
        path: 'src/components/Routes/i18n.ts',
        pattern: '\n});',
        template:
          ",\n  {{camelCase name}}Title: '{{routeTitle}}',\n  {{camelCase name}}Description: '{{routeDescription}}'\n});"
      }
    ]
  });
};
