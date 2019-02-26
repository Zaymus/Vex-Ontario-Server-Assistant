const commando = require('discord.js-commando');

let guild;

class removeRole extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'removeRole',
            group: 'roles',
            memberName: 'role',
            description: 'removes the user from the role they request'
        });//end of super
    }//end of constructor

    async run(message, args)
    {
        guild = message.channel.guild;

        let input = message.content;
        
        let reply;
        
        let parts = input.split(" ")//splits the command into parts 
        
        console.log("Requsting removal of role: " + parts[1]);

        let roleRequest = guild.roles.array().filter( //finds the role object using the input
            r => r.name.toLowerCase().includes(parts[1].toLowerCase())
            )[0];   

        try
        {
            message.member.removeRole(roleRequest);//removes role from requesting user
            message.reply("Successfully removed role " + roleRequest.name);
        }//end of try
        catch (e)
        {
            message.reply("could not find requesting role")
        }//end of catch
    }//end of run
}//end of class
