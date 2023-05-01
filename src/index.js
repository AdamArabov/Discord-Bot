const {Client, IntentsBitField} = require ('discord.js');
const client = new Client ({
    intents: [    
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
]
});

client.on('ready', (c)=>{
    console.log(`Bot is ready as ${c.user.tag}`);
})

client.login ("MTEwMjY1MTcyODQ1ODk0MDQ1Ng.GmQpd2.aJGkIj5XmbL2GkpbGetiqlNmpVVKUkFeWUPY6o");