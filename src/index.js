require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder} = require ('discord.js');
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

client.on('messageCreate', (msg)=>{
if(msg.author.bot) return;

    if (msg.content === 'ping'){
        msg.reply('pong');
    }
})

client.on('interactionCreate',(interaction) => {
    if(!interaction.isChatInputCommand())
    return;

   if(interaction.commandName === 'embed'){
    const embed = new EmbedBuilder()
    .setTitle("Checkpoint Bot")
    .setDescription("Easy way to grab a checkpoint")

    interaction.reply({embeds: [embed]})
   }
})

client.login (process.env.TOKEN);