# Logger

![npm-version](https://img.shields.io/npm/v/zeph1rr-logger?color=green&label=ActualLoggerVersion&style=plastic)

## Description

Simple library for logging objects

Library returns function. Params:

```
debugLevel: 
    console: print logs in stdout.
    file: print logs into file, declarated by logPath.
    full: print logs in stdout and into file in directory declarated by logPath
logPath: declare path to the directory for logs.
```

## Installation

```
npm i zeph1rr-logger
```

## Usage

- Create config file for logger. Example:

```
const zeph1rrLogger = require('zeph1rr-logger')

const debugLevel = "console"/"file"/"full" ("full by default")
const logPath = "/path/to/your/log/directory" ("'' bu default")

module.exports = logger(debugLevel, logPath)
```

- Require logger in files, where you need

```
const logger = require('../utils/logger')
```

- Call logger, when you need do it

```
data = {
    field1: value1,
    field2: value2
}
logger(data)
```


- Enjoy your logs!


## Contacts

If you have any questions about this repository, you can contact me by telegram (@Zeph1rr) or by email (grianton535@gmail.com)

This project is licensed under the terms of the MIT license