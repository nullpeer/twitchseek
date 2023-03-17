// Group Reflection (c) All Rights Reserved 2021—2023

// by uBADAWAY

const prompt = require('prompt-sync')();
const channel = prompt('Введите название канала.\nУчтите, что на нём должна вестись прямая трансляция.\n\n');

const tmi = require('tmi.js');
const options = {
    channels: [ channel ]
};
const client = new tmi.Client(options);

console.log(`Monitoring ${options['channels'][0]}...`)
client.on('message', (channel, userState, message, self) => {
    if (self) return;

    const timeStamp = new Date(parseInt(userState['tmi-sent-ts'])).toLocaleString();

    console.log(`[${timeStamp}] ${userState.username}: ${message}`);
});

client.connect();
