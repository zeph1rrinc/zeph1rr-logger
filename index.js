const fs = require("fs")
const format = require("node.date-time");
const path = require("path");

const logger = (debugLevel = "full", logPath='') => {
    const availableDebugLevel = ["console", "file", "full"]
    if (!availableDebugLevel.includes(debugLevel)) {
        throw new Error("Not available debug level\nSearch available values in documentation")
    }
    if (debugLevel !== "console" && !logPath.length) {
        throw new Error("LogPath is not be able to be empty")
    }
    return function (data) {
        const today = new Date().format("yyyy-MM-dd")
        const now = new Date().format("yyyy-MM-dd HH:mm:SS.ms")
        const log = JSON.stringify({
            debugLevel: debugLevel,
            timestamp: now,
            ...data
        })
        if (debugLevel !== "file") {
            console.log(log)
        }
        if (debugLevel !== "console") {
            fs.appendFile(path.join(logPath, `log-${today}.txt`), log + '\n', err => {
                if (err) throw err
            })
        }
    }
}

module.exports = logger