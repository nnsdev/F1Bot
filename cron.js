const moment = require('moment')
const sessions = require('./sessions')
const axios = require("axios")

setInterval(() => {
    let time = moment.utc().format("YYYY-MM-DDTHH:mm")
    if (sessions.hasOwnProperty(time)) {
        axios.post(sessions.webhook, {
            content: '<@&456436166988791818> ' + sessions[time] + ' starting!',
            avatar_url: 'https://i.imgur.com/IAMm6am.png',
            username: 'F1 Notifications'
        }).then((msg) => {
            console.log("Tag sent")
        }).catch(err => {
            console.log("Tag error: " + err)
        })
    } else {
        console.log('Doesnt');
    }
}, 30000)