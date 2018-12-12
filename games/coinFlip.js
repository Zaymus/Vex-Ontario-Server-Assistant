const commando = require('discord.js-commando');

class coinFlip extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'games',
            memberName: 'flip',
            description: 'Flips a coin that lands on heads or tails'
        });//end of super
    }//end of construcor

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply('your coin landed on heads!');
        }//end of if
        else
        {
            message.reply('your coin landed on tails!');
        }//end of e;se
    }//end of run
}//end of class

module.exports = coinFlip;