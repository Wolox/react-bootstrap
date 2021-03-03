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

  plop.setGenerator('screen', {
    description: 'Screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (in PascalCase)'
      },
      {
        type: 'input',
        name: 'route',
        message: 'Route name'
      },
      {
        type: 'input',
        name: 'routeTitle',
        message: 'Route title'
      },
      {
        type: 'input',
        name: 'routeDescription',
        message: 'Route description'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/screens/{{name}}/index.tsx',
        templateFile: 'templates/screen/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/app/screens/{{name}}/index.test.tsx',
        templateFile: 'templates/screen/index.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/app/screens/{{name}}/styles.module.scss',
        templateFile: 'templates/screen/styles.module.scss.hbs'
      },
      {
        type: 'append',
        path: 'src/constants/routes.js',
        pattern: 'const Routes = {',
        // separator: ',\n',
        template: "{{upperCase name}}: '/{{route}}',"
      },
      {
        type: 'transform',
        path: 'src/app/components/Routes/constants.ts',
        pattern: '// Add imports for screens above (FOR GENERATORS DO NOT REMOVE)',
        template:
          "const {{name}} = lazy(() => import('../../screens/{{name}}'));\n// Add imports for screens above (FOR GENERATORS DO NOT REMOVE)"
      },
      {
        type: 'append',
        path: 'src/app/components/Routes/constants.ts',
        pattern: 'export const ROUTES = [',
        // separator: ',\n',
        // TODO: Add prompt for authenticated?
        template: `
          {
            exact: false,
            path: PATHS.{{name}},
            component: {{name}},
            title: 'Routes:{{name}}Title',
            description: 'Routes:{{name}}Description',
            redirectTo: (user: Nullable<User>) => (user ? undefined : MAIN_PUBLIC_PATH)
          },
          `
      },
      {
        type: 'transform',
        path: 'src/app/components/Routes/i18n.ts',
        pattern: '});',
        template: "{{name}}Title: 'Recuperar Contraseña',\n{{name}}Description: ''\n});"
      }
    ]
  });
};
