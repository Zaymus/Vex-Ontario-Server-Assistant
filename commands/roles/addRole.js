const commando = require('discord.js-commando');

let guild;

class addRole extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'addrole',
            group: 'roles',
            memberName: 'role',
            description: 'removes the user from the role they request'
        });//end of super
    }//end of constructor

    async run(message, args)
    {
        guild = message.channel.guild;

        let input = message.content;
        let parts = input.split(" ")//splits the command into parts 

        console.log("Requsting adition of role: " + parts[1]);

        guild.createRole({
            name: parts[i],
            color: 'purple',
            mentionable: true,
          });
              
        message.reply("created role: " + parts[i] + ". @Admin please finish the permisions of the role");
    }//end of run
}//end of class