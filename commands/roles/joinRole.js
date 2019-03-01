const commando = require('discord.js-commando');

let guild;

let roleBlackList = [ //roles that no one can join through the bot
    'admin',
    'daily',
    'gucci',
    'memer',
    'overlords',
]

let gerneralRoles = [ //roles that will not @mention the role
    'programmers',
    'drivers',
    'coaches',
    'engineers',
    'captains',
    'scouts',
]

class joinRole extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'joinrole',
            group: 'roles',
            memberName: 'role',
            description: 'adds the user to the role they type'
        });//end of super
    }//end of constructor

    async run(message, args)
    {
        let addRole = true;

        guild = message.channel.guild;

        let input = message.content;
        
        let reply;
        
        let parts = input.split(" ")//splits the command into parts 
        
        console.log("Requsting role: " + parts[1]);
        
        let roleRequest = guild.roles.array().filter( //finds the role object using the input
            r => r.name.toLowerCase().includes(parts[1].toLowerCase())
            )[0];      

       for(var i = 0; i < roleBlackList.length; i++) 
       {
           if (roleRequest.name.toLowerCase().includes(roleBlackList[i]))
           {
            addRole = false;
            reply = 3;
            break;
           }//end of if
       }//end of for

       console.log(addRole);
       if (addRole == true)
       {
           try
           {
            message.member.addRole(roleRequest); //adds the role to the user who sent the command
            
            for(var i = 0; i < generalRoles.length; i++)
            {
                if (roleRequest.name.toLowerCase().includes(generalRoles[i]))
                {
                    reply = 1;
                    break;
                }//end of if

                else
                {
                    reply = 2;
                    break;
                }//end of else
            }//end of for
           }//end of try
           catch (e)
           {
               reply = 0;
           }//end of catch

           
        }//end of if
        
        switch(reply) // handles all the replies and to ensure only one message is sent and is the correct message.
        {
            case 0:
               message.reply('Role is either mispelled or does not exist...' +  
               'please try again or contact an administrator for assistance'); //sends a reply to the user
                break;
                
            case 1:
                message.reply('Joined role: ' + roleRequest.name); //replies with a success message without an @mention
                break;
                
            case 2:
                message.reply('Joined role: ' + roleRequest); //replies with a success message with an @mention
                break;
                
            case 3:
                message.reply(roleRequest.name + ' has special permissions... please try to join another role'); // replies with a denied message without an @mention
                break;
        }//end of switch
    }//end of run
}//end of class

module.exports = joinRole;
