const moment = require('moment')
const sessions = require('./sessions')
const axios = require("axios")

console.log("Running");

setInterval(() => {
    let time = moment.utc().format("YYYY-MM-DDTHH:mm")
    console.log(time)
    if (sessions.hasOwnProperty(time)) {
        axios.post(sessions.webhook, {
            "content": '<@&456436166988791818> ' + sessions[time] + ' starting!',
            "avatar_url": 'https://i.imgur.com/IAMm6am.png',
            "username": 'F1 Notifications'
        }).then((msg) => {
            console.log(time + ": Tag sent")
        }).catch(err => {
            console.log(time + ": Tag error: " + err)
        })
    } else {
        console.log(time +': Doesnt');
    }
}, 10000)
