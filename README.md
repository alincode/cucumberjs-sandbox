# cucumberjs-sandbox

## First cucumber feature

### step by step

**init project**

```
npm init -y
npm i cucumberjs chai -S
```

**create features folder**

`mkdir features`

**create first feature**

`vi features/bmi.feature`

**execute**

`cucumberjs`

or

`npm test`

**create first feature step**

`vi features/bmiStep.js`

## generate html report

### step by step

**install cucumber-html-report module**

`npm i cucumber-html-report -S`

**setting up cucumber-html-report config**

`vi reporter.js`

**generate json report file**

`cucumberjs -f json:cucumber_report.json`

**convert json to html report**

`node reporter`


* [cucumber-html-report](https://www.npmjs.com/package/cucumber-html-report)
