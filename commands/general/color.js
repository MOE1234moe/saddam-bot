const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');



module.exports = {
  name: "color",
  aliases: ["لون"],
  description: "to choose  specific color",
  usage: ["!color"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [10],
  ownerOnly: false,
  run: async (client, message, args, config) => {


      



var _0xdbb0=["\x2A\x2A\x20\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x74\x79\x70\x65\x20\x61\x20\x6E\x75\x6D\x62\x65\x72\x20\x6F\x66\x20\x63\x6F\x6C\x6F\x72\x20\x70\x6C\x65\x61\x73\x65\x21\x2A\x2A","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x31","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39","\x31\x30","\x31\x31","\x31\x32","\x31\x33","\x31\x34","\x31\x35","\x31\x36","\x31\x37","\x31\x38","\x31\x39","\x32\x30","\x32\x31","\x32\x32","\x32\x33","\x32\x34","\x32\x35","\x32\x36","\x32\x37","\x32\x38","\x32\x39","\x33\x30","\x33\x31","\x33\x32","\x33\x33","\x33\x34","\x33\x35","\x33\x36","\x33\x37","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x20\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x54\x68\x65\x20\x63\x6F\x6C\x6F\x72\x20\x79\x6F\x75\x20\x73\x65\x6C\x65\x63\x74\x65\x64\x20\x64\x6F\x65\x73\x6E\x27\x74\x20\x65\x78\x69\x73\x74\x21\x2A\x2A","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x6E\x61\x6D\x65","","\x20","\x6A\x6F\x69\x6E","\x66\x69\x6E\x64","\x63\x61\x63\x68\x65","\x72\x6F\x6C\x65\x73","\x67\x75\x69\x6C\x64","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x43\x6F\x75\x6C\x64\x6E\x27\x74\x20\x66\x69\x6E\x64\x20\x74\x68\x61\x74\x20\x63\x6F\x6C\x6F\x72\x20\x72\x6F\x6C\x65\x21\x2A\x2A","\x65\x64\x69\x74\x61\x62\x6C\x65","\x20\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x49\x20\x64\x6F\x6E\x27\x74\x20\x68\x61\x76\x65\x20\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x73\x20\x74\x6F\x20\x65\x64\x69\x74\x2F\x67\x69\x76\x65\x20\x74\x68\x61\x74\x20\x72\x6F\x6C\x65\x21\x2A\x2A","\x76\x61\x6C\x75\x65\x73","\x6D\x65\x6D\x62\x65\x72","\x69\x64","\x6D\x65\x73\x73\x61\x67\x65","\x63\x61\x74\x63\x68","\x72\x65\x6D\x6F\x76\x65","\x66\x6F\x72\x45\x61\x63\x68","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x43\x6F\x6C\x6F\x72\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x63\x68\x61\x6E\x67\x65\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x6C\x79\x2E\x2A\x2A\x20","\x74\x68\x65\x6E","\x61\x64\x64"];if(!args[0]){return message[_0xdbb0[2]][_0xdbb0[1]](_0xdbb0[0])};const allowedColors=[_0xdbb0[3],_0xdbb0[4],_0xdbb0[5],_0xdbb0[6],_0xdbb0[7],_0xdbb0[8],_0xdbb0[9],_0xdbb0[10],_0xdbb0[11],_0xdbb0[12],_0xdbb0[13],_0xdbb0[14],_0xdbb0[15],_0xdbb0[16],_0xdbb0[17],_0xdbb0[18],_0xdbb0[19],_0xdbb0[20],_0xdbb0[21],_0xdbb0[22],_0xdbb0[23],_0xdbb0[24],_0xdbb0[25],_0xdbb0[26],_0xdbb0[27],_0xdbb0[28],_0xdbb0[29],_0xdbb0[30],_0xdbb0[31],_0xdbb0[32],_0xdbb0[33],_0xdbb0[34],_0xdbb0[35],_0xdbb0[36],_0xdbb0[37],_0xdbb0[38],_0xdbb0[39]];if(!allowedColors[_0xdbb0[40]](args[0])){return message[_0xdbb0[2]][_0xdbb0[1]](_0xdbb0[41])};let a=message[_0xdbb0[50]][_0xdbb0[49]][_0xdbb0[48]][_0xdbb0[47]]((_0x512cx3)=>{return _0x512cx3[_0xdbb0[43]][_0xdbb0[42]]()=== `${_0xdbb0[44]}${args[_0xdbb0[46]](_0xdbb0[45])[_0xdbb0[42]]()}${_0xdbb0[44]}`});if(!a){return message[_0xdbb0[2]][_0xdbb0[1]](_0xdbb0[51])};if(!a[_0xdbb0[52]]){return message[_0xdbb0[2]][_0xdbb0[1]](_0xdbb0[53])};const memberRoles=[...message[_0xdbb0[55]][_0xdbb0[49]][_0xdbb0[48]][_0xdbb0[54]]()];memberRoles[_0xdbb0[60]]((_0x512cx5)=>{if(allowedColors[_0xdbb0[40]](_0x512cx5[_0xdbb0[43]][_0xdbb0[42]]())&& args[_0xdbb0[46]](_0xdbb0[45])[_0xdbb0[42]]()!== _0x512cx5[_0xdbb0[43]][_0xdbb0[42]]()){if(message[_0xdbb0[55]][_0xdbb0[49]][_0xdbb0[48]][_0xdbb0[47]]((_0x512cx3)=>{return (_0x512cx3[_0xdbb0[56]]= _0x512cx5[_0xdbb0[56]])})){message[_0xdbb0[55]][_0xdbb0[49]][_0xdbb0[59]](_0x512cx5)[_0xdbb0[58]]((_0x512cx6)=>{return message[_0xdbb0[2]][_0xdbb0[1]](_0x512cx6[_0xdbb0[57]])})}}}); await message[_0xdbb0[55]][_0xdbb0[49]][_0xdbb0[63]](a)[_0xdbb0[62]](()=>{return message[_0xdbb0[2]][_0xdbb0[1]](`${_0xdbb0[61]}`)})[_0xdbb0[58]]((_0x512cx6)=>{return message[_0xdbb0[2]][_0xdbb0[1]](_0x512cx6[_0xdbb0[57]])})
  }
}