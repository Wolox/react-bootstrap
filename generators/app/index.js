"use strict";
var chalk = require("chalk");
var pkg = require("../../package.json");
var _ = require("lodash");
var proptypes = require("prop-types");
var mkdirp = require("mkdirp");

// var reduxBeacon = require("redux-beacon"); TODO OBLIGATORIO

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
        default: "Your project name",
        store: true,
        validate: val =>
          String(val).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? true
            : `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Description",
        default: "Project description",
        store: true,
        validate: val =>
          String(val).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? true
            : `${val} is not a valid description for a project. Please use a valid description (alphanumeric).`
      },
      {
        type: "input",
        name: "repoUrl",
        message: "What is the git repo url for this project?",
        store: true
      },
      {
        type: "confirm",
        name: "radium",
        message: "Would you like to enable Radium?"
      },
      {
        type: "confirm",
        name: "mobileDetect",
        message: "Would you like to enable mobile-detect?"
      },
      {
        type: "confirm",
        name: "moment",
        message: "Would you like to enable moment?"
      },
      {
        type: "confirm",
        name: "nukaCarousel",
        message: "Would you like to enable nuka-carousel?"
      },
      {
        type: "confirm",
        name: "numeral",
        message: "Would you like to enable numeral?"
      },
      {
        type: "confirm",
        name: "postcss",
        message: "Would you like to enable postcss?"
      },
      {
        type: "confirm",
        name: "reactAlert",
        message: "Would you like to enable react-alert?"
      },
      {
        type: "confirm",
        name: "reactModal",
        message: "Would you like to enable react-modal?"
      },
      {
        type: "confirm",
        name: "reactGoogleMaps",
        message: "Would you like to enable react-google-maps?"
      },
      {
        type: "confirm",
        name: "reactResponsive",
        message: "Would you like to enable react-responsive?"
      },
      {
        type: "confirm",
        name: "reactScroll",
        message: "Would you like to enable react-scroll?"
      },
      {
        type: "confirm",
        name: "reactShare",
        message: "Would you like to enable react-share?"
      },
      {
        type: "confirm",
        name: "reactVirtualized",
        message: "Would you like to enable react-virtualized?"
      },
      {
        type: "confirm",
        name: "recharts",
        message: "Would you like to enable recharts?"
      },
      {
        type: "confirm",
        name: "reselect",
        message: "Would you like to enable reselect?"
      }
    ];

    return this.prompt(prompts).then(
      function(answers) {
        for (var key in answers) {
          this[key] = answers[key];
        }

        function hasFeature(feat, prop) {
          return prop;
        }

        this.includeRadium = hasFeature("radium", answers.radium);
        this.includeMobileDetect = hasFeature(
          "mobileDetect",
          answers.mobileDetect
        );
        this.includeMoment = hasFeature("moment", answers.moment);
        this.includeNukaCarousel = hasFeature(
          "nukaCarousel",
          answers.nukaCarousel
        );
        this.includeNumeral = hasFeature("numeral", answers.numeral);
        this.includePostcss = hasFeature("postcss", answers.postcss);
        this.includeReactAlert = hasFeature("reactAlert", answers.reactAlert);
        this.includeReactModal = hasFeature("reactModal", answers.reactModal);
        this.includeReactGoogleMaps = hasFeature(
          "reactGoogleMaps",
          answers.reactGoogleMaps
        );
        this.includeReactResponsive = hasFeature(
          "reactResponsive",
          answers.reactResponsive
        );
        this.includeReactScroll = hasFeature(
          "reactScroll",
          answers.reactScroll
        );
        this.includeReactShare = hasFeature("reactShare", answers.reactShare);
        this.includeReactVirtualized = hasFeature(
          "reactVirtualized",
          answers.reactVirtualized
        );
        this.includeRecharts = hasFeature("recharts", answers.recharts);
        this.includeReselect = hasFeature("reselect", answers.reselect);
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
        includeRadium: this.includeRadium,
        includeInext: this.includeInext,
        includeMobileDetect: this.includeMobileDetect,
        includeMoment: this.includeMoment,
        includeNukaCarousel: this.includeNukaCarousel,
        includeNumeral: this.includeNumeral,
        includePostcss: this.includePostcss,
        includeReactAlert: this.includeReactAlert,
        includeReactModal: this.includeReactModal,
        includeReactGoogleMaps: this.includeReactGoogleMaps,
        includeReactResponsive: this.includeReactResponsive,
        includeReactScroll: this.includeReactScroll,
        includeReactShare: this.includeReactShare,
        includeReactVirtualized: this.includeReactVirtualized,
        includeRecharts: this.includeRecharts,
        includeReselect: this.includeReselect
      }
    );

    this.fs.copyTpl(
      this.templatePath("src/index.js"),
      this.destinationPath("src/index.js"),
      {}
    );

    mkdirp(this.destinationPath("src/app/assets/"));

    this.fs.copyTpl(
      this.templatePath(
        "src/app/components/Routes/components/AuthenticatedRoute.js"
      ),
      this.destinationPath(
        "src/app/components/Routes/components/AuthenticatedRoute.js"
      ),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/app/components/Routes/constants.js"),
      this.destinationPath("src/app/components/Routes/constants.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/app/components/Routes/index.js"),
      this.destinationPath("src/app/components/Routes/index.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/app/components/Routes/styles.js"),
      this.destinationPath("src/app/components/Routes/styles.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/app/index.js"),
      this.destinationPath("src/app/index.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/app/styles.js"),
      this.destinationPath("src/app/styles.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/config/api.js"),
      this.destinationPath("src/config/api.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/config/i18n.js"),
      this.destinationPath("src/config/i18n.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/config/perf.js"),
      this.destinationPath("src/config/perf.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/redux"),
      this.destinationPath("src/redux"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/redux/store.js"),
      this.destinationPath("src/redux/store.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/redux/Auth/actions.js"),
      this.destinationPath("src/redux/Auth/actions.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/redux/Auth/reducer.js"),
      this.destinationPath("src/redux/Auth/reducer.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/services"),
      this.destinationPath("src/services"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/utils"),
      this.destinationPath("src/utils"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/utils/colors.js"),
      this.destinationPath("src/utils/colors.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/utils/array.js"),
      this.destinationPath("src/utils/array.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("eslintrc.js"),
      this.destinationPath(".eslintrc.js"),
      {}
    );

    this.fs.copyTpl(
      this.templatePath("public/index.html"),
      this.destinationPath("public/index.html"),
      { projectName: this.projectName }
    );

    if (this.includeNumeral) {
      this.fs.copyTpl(
        this.templatePath("src/config/numeral.js"),
        this.destinationPath("src/config/numeral.js"),
        {}
      );
    }
    if (this.includeReduxBeacon) {
      this.fs.copyTpl(
        this.templatePath("src/services/AnalyticsService.js"),
        this.destinationPath("src/services/AnalyticsService.js"),
        {}
      );
    }

    this.fs.copyTpl(
      this.templatePath("src/services/AuthServices.js"),
      this.destinationPath("src/services/AuthServices.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("src/services/LocalStorageService.js"),
      this.destinationPath("src/services/LocalStorageService.js"),
      {}
    );
    if (this.includeRadium) {
      this.fs.copyTpl(
        this.templatePath("src/app/components/Button/index.js"),
        this.destinationPath("src/app/components/Button/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Button/styles.js"),
        this.destinationPath("src/app/components/Button/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Checkbox/index.js"),
        this.destinationPath("src/app/components/Checkbox/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Checkbox/styles.js"),
        this.destinationPath("src/app/components/Checkbox/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Label/index.js"),
        this.destinationPath("src/app/components/Label/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Label/styles.js"),
        this.destinationPath("src/app/components/Label/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/RadioButton/index.js"),
        this.destinationPath("src/app/components/RadioButton/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/RadioButton/styles.js"),
        this.destinationPath("src/app/components/RadioButton/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/TextArea/index.js"),
        this.destinationPath("src/app/components/TextArea/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/TextArea/styles.js"),
        this.destinationPath("src/app/components/TextArea/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/TextInput/index.js"),
        this.destinationPath("src/app/components/TextInput/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/TextInput/styles.js"),
        this.destinationPath("src/app/components/TextInput/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Touchable/index.js"),
        this.destinationPath("src/app/components/Touchable/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Touchable/styles.js"),
        this.destinationPath("src/app/components/Touchable/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Spinner/index.js"),
        this.destinationPath("src/app/components/Spinner/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/components/Spinner/styles.js"),
        this.destinationPath("src/app/components/Spinner/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Dashboard/index.js"),
        this.destinationPath("src/app/screens/Dashboard/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Dashboard/styles.js"),
        this.destinationPath("src/app/screens/Dashboard/styles.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/constants/fonts.js"),
        this.destinationPath("src/constants/fonts.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/constants/sizes.js"),
        this.destinationPath("src/constants/sizes.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Dashboard/screens/Home/index.js"),
        this.destinationPath("src/app/screens/Dashboard/screens/Home/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Dashboard/screens/Home/layout.js"),
        this.destinationPath(
          "src/app/screens/Dashboard/screens/Home/layout.js"
        ),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Dashboard/screens/Home/styles.js"),
        this.destinationPath(
          "src/app/screens/Dashboard/screens/Home/styles.js"
        ),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Login/index.js"),
        this.destinationPath("src/app/screens/Login/index.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Login/layout.js"),
        this.destinationPath("src/app/screens/Login/layout.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Login/strings.js"),
        this.destinationPath("src/app/screens/Login/strings.js"),
        {}
      );
      this.fs.copyTpl(
        this.templatePath("src/app/screens/Login/styles.js"),
        this.destinationPath("src/app/screens/Login/styles.js"),
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
