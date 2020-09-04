module.exports = function plopConfig(plop) {
  plop.setGenerator('screen', {
    description: 'application screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'screen name'
      },
      {
        type: 'input',
        name: 'route',
        message: 'route name'
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
        templateFile: 'templates/screen/styles.module.scss'
      },
      {
        type: 'append',
        path: 'src/constants/routes.js',
        pattern: 'const Routes = {',
        // separator: ',\n',
        template: "{{upperCase name}}: '/{{route}}',"
      },
      {
        type: 'append',
        path: 'src/app/components/Routes/constants.ts',
        pattern: "const Home = lazy(() => import('../../screens/Dashboard'));",
        // separator: ',\n',
        template: "const {{name}} = lazy(() => import('../../screens/{{name}}'));"
      },
      {
        type: 'append',
        path: 'src/app/components/Routes/constants.ts',
        pattern: 'export const ROUTES = [',
        // separator: ',\n',
        template: `
          {
            exact: false,
            path: PATHS.{{name}},
            component: {{name}},
            title: i18next.t('Routes:{{name}}Title'),
            description: i18next.t('Routes:{{name}}Description'),
            redirectTo: (user: Nullable<User>) => (user ? undefined : MAIN_PUBLIC_PATH)
          },
        `
      }
    ]
  });
};
