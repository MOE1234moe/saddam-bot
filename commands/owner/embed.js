const { MessageEmbed } = require("discord.js");




module.exports = {
  name: "embed",
  aliases: [""],
  description: "sends a message to the target channel",
  usage: ["!embed"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  
  run: async (client, message, args, config) => {

var _0x3379=["\x20","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x20\x73\x6F\x6D\x65\x20\x61\x72\x67\x73\x2E\x2A\x2A","\x72\x65\x70\x6C\x79","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x64\x69\x73\x70\x6C\x61\x79\x48\x65\x78\x43\x6F\x6C\x6F\x72","\x6D\x65","\x67\x75\x69\x6C\x64","\x73\x65\x74\x43\x6F\x6C\x6F\x72","","\x6E\x61\x6D\x65","\x69\x63\x6F\x6E\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x66\x69\x72\x73\x74","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x73","\x70\x72\x6F\x78\x79\x55\x52\x4C","\x73\x65\x74\x49\x6D\x61\x67\x65","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x64\x65\x6C\x65\x74\x65","\x74\x68\x65\x6E","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C"];let args1=args[_0x3379[2]](0)[_0x3379[1]](_0x3379[0]);if(!args1){message[_0x3379[4]]({content:`${_0x3379[3]}`})};let embed= new MessageEmbed()[_0x3379[13]](`${_0x3379[10]}${message[_0x3379[8]][_0x3379[11]]}${_0x3379[10]}`,message[_0x3379[8]][_0x3379[12]]({dynamic:true}))[_0x3379[9]](message[_0x3379[8]][_0x3379[7]][_0x3379[6]])[_0x3379[5]]();let attach=message[_0x3379[15]][_0x3379[14]]();if(attach){embed[_0x3379[17]](attach[_0x3379[16]]);if(args1){embed[_0x3379[18]](`${_0x3379[10]}${args1}${_0x3379[10]}`)}};if(args1){embed[_0x3379[18]](`${_0x3379[10]}${args1}${_0x3379[10]}`);message[_0x3379[22]][_0x3379[21]]({embeds:[embed]})[_0x3379[20]](()=>{message[_0x3379[19]]()})}
  }
}