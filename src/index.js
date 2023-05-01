const {Client, IntentsBitField} = require ('discord.js');
const client = new Client ({
    intents: [    
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
]
});

client.login ("MTEwMjY1MTcyODQ1ODk0MDQ1Ng.G5dqca.xQKz53SpyXzJiRAhbIjMSiV8Nm_0sKJUAW3sAo");