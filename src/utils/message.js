const moment = require('moment');

export function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
}
