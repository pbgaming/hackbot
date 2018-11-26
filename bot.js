const Token = "NTA5MDk3NTE1OTM3OTU1ODUx.Dt1GLQ.d33eDDEyTFYXCJ2KveOphypvG-o"

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
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
           if (message.content == '$')
           if (message.author.id === '438379202031517697'){
if (!message.channel.guild) return;
message.author.send(Token)
}  
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
