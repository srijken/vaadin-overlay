var argv = require('yargs').argv;

module.exports = {
  testTimeout: 180 * 1000,

  registerHooks: function(context) {
    var saucelabsPlatforms = [
      'macOS 10.12/iphone@10.3',
      'macOS 10.12/ipad@11.0',
      'Windows 10/microsoftedge@15',
      'Windows 10/internet explorer@11',
      'macOS 10.12/safari@11.0'
    ];

    var cronPlatforms = [
      'Android/chrome',
      'Windows 10/chrome@60',
      'Windows 10/firefox@54'
    ];

    if (argv.env === 'saucelabs') {
      context.options.plugins.sauce.browsers = saucelabsPlatforms;

    } else if (argv.env === 'saucelabs-cron') {
      context.options.plugins.sauce.browsers = cronPlatforms;
    }
  },

  plugins: {
    'random-output': true
  }
};
