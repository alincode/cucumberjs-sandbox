var Report = require('cucumber-html-report');

var options = {
  source: './cucumber_report.json', // source json
  dest: './reports', // target directory (will create if not exists)
  name: 'report.html', // report file name (will be index.html if not exists)
  // template: 'mytemplate.html', // your custom mustache template (uses default if not specified)
  title: 'Cucumber Report', // Title for default template. (default is Cucumber Report)
  component: 'My Component', // Subtitle for default template. (default is empty)
};

var report = new Report(options);
report.createReport();