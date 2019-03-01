const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: ';'
});

const token = 'NTE2NDQ4NTI4NjQ2Nzk5MzYw.D1s7pA.ndBIqQitCNzR5BAMDX0fiPu65JY';

bot.registry.registerGroup('games', 'Games');
bot.registry.registerGroup('roles', 'Roles');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("guildMemberAdd", function(member)
{
    member.send(
        "Welcome to the Vex Ontario Server!\n" + 
        "We are very excited to see what contributions you can make to help out other teams!\n" +
        "However before you start we would like to notify you about a few rules.\n" +
        "\t\t- Please act professional towards others.\n" +
        "\t\t- Be respectful towards other teams/members.\n"+ 
        "\t\t- Change your server nickname to your real name along with your team number and team role.\n" +
        "\t\t- Help others in need whenever possible.\n" + 
        "\t\t- If you need the assistance of a specific group of people use @ and select a role or a team.\n" +
        "\t\t- Any toxic or unprofessional behavior will not be tolerated.\n" +
        "\t\t- Enjoy yourself.\n" +
        "If you want to join a role please use ;joinRole + your team's general number (ex. 2560, 5225, 200, 356)\n" + 
        "If you also want to add your team tag please use ;joinRole + your role(ex. programmer, captain, engineer, scout)\n" +
        "If you have any issues with  this bot please dm Carson from 2560 for assistance!" 
        )//end of new member dm
});

bot.on('ready', function()
{
    console.log("ready");
});

bot.login(token);
