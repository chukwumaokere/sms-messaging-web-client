# messages-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Adding Twilio Account
1) Create a file 'src/lib/Credentials.js'
2) Put this information in the file and enter your API info in the quotes
```
const twilioInfo = { accountSid: '', authToken: '', fromNumber: '' }
export default twilioInfo
```