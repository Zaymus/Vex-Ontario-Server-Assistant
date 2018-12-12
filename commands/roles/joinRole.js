const commando = require('discord.js-commando');

let guild;

let roleBlackList = [
    'admin',
    'daily',
    'gucci',
    'memer',
    'robot',
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
        
        let parts = input.split(" ")
        
        console.log("requsting role: " + parts[1]);
        
        let roleRequest = guild.roles.array().filter(
            r => r.name.toLowerCase().includes(parts[1].toLowerCase())
            )[0];      

       // message.member.addRole(roleRequest);

       for(var i = 0; i < roleBlackList.length; i++)
       {
           if (roleRequest.name.toLowerCase().includes(roleBlackList[i])){
            addRole = false;
            break;
           }//end of if
           console.log(i+1 == roleBlackList.length);
       }//end of for

       console.log(addRole);
       if (addRole == true){
           try{
            message.member.addRole(roleRequest);
            message.reply('joined role: ' + roleRequest);
           }//end of try
           catch(typeerror)
           {
                message.reply('role is either mispelled or does not exist...' +  
                'please try again or contact an administrator for assistance');
           }//end of catch

       }//end of if
       else
       {
           message.reply(' has special permissions... please try to join another role');
       }//end of else
        //message.reply('joined role ' + role);
    }//end of run
}//end of class

module.exports = joinRole;
