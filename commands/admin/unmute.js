const { MessageEmbed } = require("discord.js");
const ms = require("ms")



module.exports = {
  name: "unmute",
  aliases: ["فك الاسكات"],
  description: "To unmute someone from the chat",
  usage: ["!unmute @user"],
  category: "admin",
  botPermission: ["MANAGE_ROLES"],
  authorPermission: ["MANAGE_ROLES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {

  
            var _0xe5a0=["\x66\x69\x72\x73\x74","\x6D\x65\x6D\x62\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64","\x69\x20\x63\x6F\x75\x6C\x64\x6E\x27\x74\x20\x72\x65\x70\x6C\x79\x20\x74\x6F\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x6D\x65\x6D\x62\x65\x72\x20\x6F\x72\x20\x69\x64\x2A\x2A","\x72\x65\x70\x6C\x79","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x49\x20\x63\x61\x6E\x27\x74\x20\x66\x69\x6E\x64\x20\x74\x68\x69\x73\x20\x6D\x65\x6D\x62\x65\x72\x2A\x2A","\x69\x64","\x6D\x65\x6D\x62\x65\x72","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x59\x6F\x75\x20\x63\x61\x6E\x27\x74\x20\x75\x73\x65\x20\x74\x68\x69\x73\x20\x6F\x6E\x20\x79\x6F\x75\x72\x20\x73\x65\x6C\x66\x2A\x2A","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x68\x69\x67\x68\x65\x73\x74","\x72\x6F\x6C\x65\x73","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x59\x6F\x75\x20\x63\x61\x6E\x27\x74\x20\x75\x6E\x6D\x75\x74\x65\x64\x20","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x75\x73\x65\x72","\x20\x68\x61\x76\x65\x20\x68\x69\x67\x68\x65\x72\x20\x72\x6F\x6C\x65\x20\x74\x68\x61\x6E\x20\x79\x6F\x75\x2A\x2A","\x6E\x61\x6D\x65","\x4D\x75\x74\x65","\x66\x69\x6E\x64","\x73\x6F\x6D\x65","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A","\x20\x69\x73\x20\x6E\x6F\x74\x20\x6D\x75\x74\x65\x64\x2E\x2A\x2A","\x72\x65\x6D\x6F\x76\x65","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A","\x20\x75\x6E\x6D\x75\x74\x65\x64\x20\x66\x72\x6F\x6D\x20\x74\x68\x65\x20\x74\x65\x78\x74\x21\x2A\x2A"];const member=message[_0xe5a0[2]][_0xe5a0[1]][_0xe5a0[0]]()|| message[_0xe5a0[5]][_0xe5a0[1]][_0xe5a0[4]][_0xe5a0[3]](args[0]);if(!args[0]){return message[_0xe5a0[11]]({content:`${_0xe5a0[10]}`})[_0xe5a0[9]]((_0x81d8x2)=>{console[_0xe5a0[8]](`${_0xe5a0[6]}`+ _0x81d8x2[_0xe5a0[7]])})};if(!member){return message[_0xe5a0[11]]({content:`${_0xe5a0[12]}`})[_0xe5a0[9]]((_0x81d8x2)=>{console[_0xe5a0[8]](`${_0xe5a0[6]}`+ _0x81d8x2[_0xe5a0[7]])})};if(member[_0xe5a0[13]]=== message[_0xe5a0[14]][_0xe5a0[13]]){return message[_0xe5a0[11]]({content:`${_0xe5a0[15]}`})[_0xe5a0[9]]((_0x81d8x2)=>{console[_0xe5a0[8]](`${_0xe5a0[6]}`+ _0x81d8x2[_0xe5a0[7]])})};if(message[_0xe5a0[14]][_0xe5a0[18]][_0xe5a0[17]][_0xe5a0[16]]<= member[_0xe5a0[18]][_0xe5a0[17]][_0xe5a0[16]]){return message[_0xe5a0[11]]({content:`${_0xe5a0[19]}${member[_0xe5a0[21]][_0xe5a0[20]]}${_0xe5a0[22]}`})[_0xe5a0[9]]((_0x81d8x2)=>{console[_0xe5a0[8]](`${_0xe5a0[6]}`+ _0x81d8x2[_0xe5a0[7]])})};let muteRole=message[_0xe5a0[5]][_0xe5a0[18]][_0xe5a0[4]][_0xe5a0[25]]((_0x81d8x4)=>{return _0x81d8x4[_0xe5a0[23]]== _0xe5a0[24]});if(!member[_0xe5a0[18]][_0xe5a0[4]][_0xe5a0[26]]((_0x81d8x4)=>{return _0x81d8x4[_0xe5a0[23]]== _0xe5a0[24]})){message[_0xe5a0[11]]({content:`${_0xe5a0[27]}${member[_0xe5a0[21]][_0xe5a0[20]]}${_0xe5a0[28]}`})[_0xe5a0[9]]((_0x81d8x2)=>{console[_0xe5a0[8]](`${_0xe5a0[6]}`+ _0x81d8x2[_0xe5a0[7]])})}else {member[_0xe5a0[18]][_0xe5a0[29]](muteRole);message[_0xe5a0[11]]({content:`${_0xe5a0[30]}${member[_0xe5a0[21]][_0xe5a0[20]]}${_0xe5a0[31]}`})[_0xe5a0[9]]((_0x81d8x2)=>{console[_0xe5a0[8]](`${_0xe5a0[6]}`+ _0x81d8x2[_0xe5a0[7]])})}
  }
}