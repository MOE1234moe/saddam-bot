const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "show",
  aliases: ["اظهار"],
  description: "show chat",
  usage: ["!show"],
  category: "admin",
  botPermission: ["MANAGE_CHANNELS"],
  authorPermission: ["MANAGE_CHANNELS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {



                var _0x3a12=["\x6E\x61\x6D\x65","\x40\x65\x76\x65\x72\x79\x6F\x6E\x65","\x66\x69\x6E\x64","\x63\x61\x63\x68\x65","\x72\x6F\x6C\x65\x73","\x67\x75\x69\x6C\x64","\x69\x20\x63\x6F\x75\x6C\x64\x6E\x27\x74\x20\x72\x65\x70\x6C\x79\x20\x74\x6F\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x3A\x77\x68\x69\x74\x65\x5F\x63\x68\x65\x63\x6B\x5F\x6D\x61\x72\x6B\x3A\x20\x2A\x2A\x3C\x23","\x69\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x3E\x20\x44\x6F\x6E\x65\x20\x73\x68\x6F\x77\x20\x74\x68\x69\x73\x20\x72\x6F\x6F\x6D\x2E\x2A\x2A","\x72\x65\x70\x6C\x79","\x74\x68\x65\x6E","\x65\x64\x69\x74","\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x4F\x76\x65\x72\x77\x72\x69\x74\x65\x73"];let everyone=message[_0x3a12[5]][_0x3a12[4]][_0x3a12[3]][_0x3a12[2]]((_0x915dx2)=>{return _0x915dx2[_0x3a12[0]]=== _0x3a12[1]});message[_0x3a12[12]][_0x3a12[17]][_0x3a12[16]](everyone,{VIEW_CHANNEL:true})[_0x3a12[15]](()=>{message[_0x3a12[14]]({content:`${_0x3a12[10]}${message[_0x3a12[12]][_0x3a12[11]]}${_0x3a12[13]}`,ephemeral:true})[_0x3a12[9]]((_0x915dx3)=>{console[_0x3a12[8]](`${_0x3a12[6]}`+ _0x915dx3[_0x3a12[7]])})})
  }
}