const player = require("../../client/player");

module.exports = {
    name: "queue",
    description: "Display the queue of the current tracks in the playlist.",
    run: async (client, message, args) => {
           var _0xd528=["\x63\x68\x61\x6E\x6E\x65\x6C","\x76\x6F\x69\x63\x65","\x6D\x65\x6D\x62\x65\x72","\x3A\x6E\x6F\x5F\x65\x6E\x74\x72\x79\x5F\x73\x69\x67\x6E\x3A\x20\x2A\x2A\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x6A\x6F\x69\x6E\x20\x61\x20\x76\x6F\x69\x63\x65\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x61\x74\x21\x2A\x2A","\x72\x65\x70\x6C\x79","\x6D\x65","\x67\x75\x69\x6C\x64","\x69\x64","\x3A\x6E\x6F\x5F\x65\x6E\x74\x72\x79\x5F\x73\x69\x67\x6E\x3A\x20\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x6C\x69\x73\x74\x65\x6E\x69\x6E\x67\x20\x69\x6E\x20\x2A\x2A","\x6E\x61\x6D\x65","\x2A\x2A\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x61\x74\x21","\x67\x65\x74\x51\x75\x65\x75\x65","\x70\x6C\x61\x79\x69\x6E\x67","\x3A\x6E\x6F\x5F\x65\x6E\x74\x72\x79\x5F\x73\x69\x67\x6E\x3A\x20\x2A\x2A\x54\x68\x65\x72\x65\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x6D\x75\x73\x69\x63\x20\x70\x6C\x61\x79\x69\x6E\x67\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x61\x74\x21\x2A\x2A","\x63\x75\x72\x72\x65\x6E\x74","","\x2E\x20\x5B\x2A\x2A","\x74\x69\x74\x6C\x65","\x2A\x2A\x5D\x28","\x75\x72\x6C","\x29\x20\x2D\x20","\x74\x61\x67","\x72\x65\x71\x75\x65\x73\x74\x65\x64\x42\x79","\x6D\x61\x70","\x73\x6C\x69\x63\x65","\x74\x72\x61\x63\x6B\x73","\x53\x6F\x6E\x67\x20\x51\x75\x65\x75\x65","\x0A","\x6A\x6F\x69\x6E","\x6C\x65\x6E\x67\x74\x68","\x5C\x6E\x2E\x2E\x2E","\x20\x6D\x6F\x72\x65\x20\x74\x72\x61\x63\x6B","\x20\x6D\x6F\x72\x65\x20\x74\x72\x61\x63\x6B\x73","\x32\x66\x33\x31\x33\x36","\x4E\x6F\x77\x20\x50\x6C\x61\x79\x69\x6E\x67","\uD83C\uDFB6\x20\x7C\x20\x5B\x2A\x2A"];if(!message[_0xd528[2]][_0xd528[1]][_0xd528[0]]){return message[_0xd528[4]]({content:_0xd528[3]})};if(message[_0xd528[6]][_0xd528[5]][_0xd528[1]][_0xd528[0]]&& message[_0xd528[2]][_0xd528[1]][_0xd528[0]][_0xd528[7]]!== message[_0xd528[6]][_0xd528[5]][_0xd528[1]][_0xd528[0]][_0xd528[7]]){return message[_0xd528[4]]({content:`${_0xd528[8]}${message[_0xd528[6]][_0xd528[5]][_0xd528[1]][_0xd528[0]][_0xd528[9]]}${_0xd528[10]}`})};const queue=player[_0xd528[11]](message[_0xd528[6]][_0xd528[7]]);if(!queue[_0xd528[12]]){return message[_0xd528[4]]({content:_0xd528[13]})};const currentTrack=queue[_0xd528[14]];const tracks=queue[_0xd528[25]][_0xd528[24]](0,10)[_0xd528[23]]((_0x6134x4,_0x6134x5)=>{return `${_0xd528[15]}${_0x6134x5+ 1}${_0xd528[16]}${_0x6134x4[_0xd528[17]]}${_0xd528[18]}${_0x6134x4[_0xd528[19]]}${_0xd528[20]}${_0x6134x4[_0xd528[22]][_0xd528[21]]}${_0xd528[15]}`});return message[_0xd528[4]]({embeds:[{title:_0xd528[26],description:`${_0xd528[15]}${tracks[_0xd528[28]](_0xd528[27])}${_0xd528[15]}${queue[_0xd528[25]][_0xd528[29]]> tracks[_0xd528[29]]?`${_0xd528[30]}${queue[_0xd528[25]][_0xd528[29]]- tracks[_0xd528[29]]=== 1?`${_0xd528[15]}${queue[_0xd528[25]][_0xd528[29]]- tracks[_0xd528[29]]}${_0xd528[31]}`:`${_0xd528[15]}${queue[_0xd528[25]][_0xd528[29]]- tracks[_0xd528[29]]}${_0xd528[32]}`}${_0xd528[15]}`:_0xd528[15]}${_0xd528[15]}`,color:_0xd528[33],fields:[{name:_0xd528[34],value:`${_0xd528[35]}${currentTrack[_0xd528[17]]}${_0xd528[18]}${currentTrack[_0xd528[19]]}${_0xd528[20]}${currentTrack[_0xd528[22]][_0xd528[21]]}${_0xd528[15]}`}]}]})
    }
}