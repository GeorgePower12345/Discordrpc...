const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('Made by: @Apgr.')
        .setName('AnonymousPlaysGR')
        .setDetails('Check my SocialMedia')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1176952548545003660/1197972798476406854/channels4_profile.jpg?ex=65cfab1c&is=65bd361c&hm=4aabddab43fdc4da9342ae54a61f1a22ffde6367c05d9cf939995181fd8a8e0a&')
        .setAssetsLargeText('Apgr.')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1176952548545003660/1198775639466053724/images_2.png?ex=65d296d0&is=65c021d0&hm=5035375b9318bdb02eb0cd18bc6b2da656963631b7290eb06648f292eab1ad64&')
        .setAssetsSmallText('Apgr.')
        .addButton('Yt Channel', 'https://youtube.com/@apgr.?si=H4i0OFdr-T_0uy0c')
        .addButton('Discord Server', 'https://discord.com/invite/u82u3NYrky');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












