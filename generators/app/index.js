var chalk = require("chalk");
var pkg = require("../../package.json");
var _ = require("lodash");
var proptypes = require("prop-types");
var mkdirp = require("mkdirp");

var Generator = require("yeoman-generator");

class GeneratorReact extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  welcome() {
    var kickoffWelcome =
      chalk.blue("\n  ██╗  ██╗██╗ ██████╗██╗  ██╗ ") +
      chalk.white("██████╗ ███████╗███████╗") +
      chalk.blue("\n  ██║ ██╔╝██║██╔════╝██║ ██╔╝") +
      chalk.white("██╔═══██╗██╔════╝██╔════╝") +
      chalk.blue("\n  █████╔╝ ██║██║     █████╔╝ ") +
      chalk.white("██║   ██║█████╗  █████╗") +
      chalk.blue("\n  ██╔═██╗ ██║██║     ██╔═██╗ ") +
      chalk.white("██║   ██║██╔══╝  ██╔══╝") +
      chalk.blue("\n  ██║  ██╗██║╚██████╗██║  ██╗") +
      chalk.white("╚██████╔╝██║     ██║") +
      chalk.blue("\n  ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ") +
      chalk.white("╚═════╝ ╚═╝     ╚═╝") +
      "\n\n  " +
      chalk.blue.bold("Welcome Woloxer to the React kickoff") +
      "\n\n  ";

    this.log(kickoffWelcome);
  }

  askFor() {
    var prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Your Project name",
        default: "Example",
        store: true,
        required: true,
        validate: val =>
          String(val).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? true
            : `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Description",
        default: "Description",
        store: true,
        required: true,
        validate: val =>
          String(val).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? true
            : `${val} is not a valid description for a project. Please use a valid description (alphanumeric).`
      },
      {
        type: "input",
        name: "repoUrl",
        message: "What is the git repo url for this project?",
        store: true,
        required: true
      },
      {
        type: "list",
        name: "typeOfBootstrap",
        message: "What type of bootstrap do you want?",
        default: "empty",
        choices: [
          "empty (react, redux, react-dom, redux-form, redux-beacon, redux-thunk, seamless-immutable, react-redux, react-router, react-router-dom, react-router-redux, react-addons-perf, apisauce, postcss, history, prop-types, lodash, i18next, reselect,)",
          "complete (radium, mobile-detect, moment, nuka-carousel, numeral, react-alert, react-modal, react-responsive, react-scroll, react-share, react-virtualized, recharts, react-google-maps)"
        ]
      }
    ];

    return this.prompt(prompts).then(
      function(answers) {
        for (var key in answers) {
          this[key] = answers[key];
        }

        this.includeAll = answers.typeOfBootstrap;
      }.bind(this)
    );
  }

  addFiles() {
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        projectName: this.projectName,
        projectNameSlugified: _.kebabCase(this.projectName),
        projectDescription: this.projectDescription,
        repoUrl: this.repoUrl,
        includeAll: this.includeAll
      }
    );

    this.fs.copy(
      this.templatePath("src/index.js"),
      this.destinationPath("src/index.js"),
      {}
    );

    mkdirp(this.destinationPath("src/app/assets/"));

    this.fs.copy(
      this.templatePath(
        "src/app/components/Routes/components/AuthenticatedRoute.js"
      ),
      this.destinationPath(
        "src/app/components/Routes/components/AuthenticatedRoute.js"
      ),
      {}
    );
    this.fs.copy(
      this.templatePath("src/app/components/Routes/constants.js"),
      this.destinationPath("src/app/components/Routes/constants.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/app/components/Routes/index.js"),
      this.destinationPath("src/app/components/Routes/index.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/app/components/Routes/styles.js"),
      this.destinationPath("src/app/components/Routes/styles.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/app/index.js"),
      this.destinationPath("src/app/index.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/app/styles.js"),
      this.destinationPath("src/app/styles.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/config/api.js"),
      this.destinationPath("src/config/api.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/config/i18n.js"),
      this.destinationPath("src/config/i18n.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/config/perf.js"),
      this.destinationPath("src/config/perf.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/redux"),
      this.destinationPath("src/redux"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/redux/store.js"),
      this.destinationPath("src/redux/store.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/redux/Auth/actions.js"),
      this.destinationPath("src/redux/Auth/actions.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/redux/Auth/reducer.js"),
      this.destinationPath("src/redux/Auth/reducer.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/services"),
      this.destinationPath("src/services"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/utils"),
      this.destinationPath("src/utils"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/utils/colors.js"),
      this.destinationPath("src/utils/colors.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/utils/array.js"),
      this.destinationPath("src/utils/array.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore"),
      {}
    );
    this.fs.copy(
      this.templatePath("eslintrc.js"),
      this.destinationPath(".eslintrc.js"),
      {}
    );

    this.fs.copyTpl(
      this.templatePath("public/_index.html"),
      this.destinationPath("public/index.html"),
      { projectName: this.projectName }
    );

    if (this.includeAll) {
      this.fs.copy(
        this.templatePath("src/config/numeral.js"),
        this.destinationPath("src/config/numeral.js"),
        {}
      );
    }
    if (this.includeAll) {
      this.fs.copy(
        this.templatePath("src/services/AnalyticsService.js"),
        this.destinationPath("src/services/AnalyticsService.js"),
        {}
      );
    }

    this.fs.copy(
      this.templatePath("src/services/AuthServices.js"),
      this.destinationPath("src/services/AuthServices.js"),
      {}
    );
    this.fs.copy(
      this.templatePath("src/services/LocalStorageService.js"),
      this.destinationPath("src/services/LocalStorageService.js"),
      {}
    );
    if (this.includeAll) {
      this.fs.copy(
        this.templatePath("src/app/components/Button/index.js"),
        this.destinationPath("src/app/components/Button/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Button/styles.js"),
        this.destinationPath("src/app/components/Button/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Checkbox/index.js"),
        this.destinationPath("src/app/components/Checkbox/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Checkbox/styles.js"),
        this.destinationPath("src/app/components/Checkbox/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Label/index.js"),
        this.destinationPath("src/app/components/Label/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Label/styles.js"),
        this.destinationPath("src/app/components/Label/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/RadioButton/index.js"),
        this.destinationPath("src/app/components/RadioButton/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/RadioButton/styles.js"),
        this.destinationPath("src/app/components/RadioButton/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/TextArea/index.js"),
        this.destinationPath("src/app/components/TextArea/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/TextArea/styles.js"),
        this.destinationPath("src/app/components/TextArea/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/TextInput/index.js"),
        this.destinationPath("src/app/components/TextInput/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/TextInput/styles.js"),
        this.destinationPath("src/app/components/TextInput/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Touchable/index.js"),
        this.destinationPath("src/app/components/Touchable/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Touchable/styles.js"),
        this.destinationPath("src/app/components/Touchable/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Spinner/index.js"),
        this.destinationPath("src/app/components/Spinner/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/components/Spinner/styles.js"),
        this.destinationPath("src/app/components/Spinner/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Dashboard/index.js"),
        this.destinationPath("src/app/screens/Dashboard/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Dashboard/styles.js"),
        this.destinationPath("src/app/screens/Dashboard/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/constants/fonts.js"),
        this.destinationPath("src/constants/fonts.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/constants/sizes.js"),
        this.destinationPath("src/constants/sizes.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Dashboard/screens/Home/index.js"),
        this.destinationPath("src/app/screens/Dashboard/screens/Home/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Dashboard/screens/Home/layout.js"),
        this.destinationPath(
          "src/app/screens/Dashboard/screens/Home/layout.js"
        ),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Dashboard/screens/Home/styles.js"),
        this.destinationPath(
          "src/app/screens/Dashboard/screens/Home/styles.js"
        ),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Login/index.js"),
        this.destinationPath("src/app/screens/Login/index.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Login/layout.js"),
        this.destinationPath("src/app/screens/Login/layout.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Login/strings.js"),
        this.destinationPath("src/app/screens/Login/strings.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("src/app/screens/Login/styles.js"),
        this.destinationPath("src/app/screens/Login/styles.js"),
        {}
      );
      this.fs.copy(
        this.templatePath("pull_request_template.md"),
        this.destinationPath("pull_request_template.md"),
        {}
      );
    }
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: true
    });
  }
}

module.exports = GeneratorReact;
