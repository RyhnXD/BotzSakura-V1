import fetch from 'node-fetch'
import fs from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()
let emoj = `${pickRandom(['đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ ','đĄī¸','đ¤ī¸','đĨī¸','đĻī¸','đ§ī¸','đ¨ī¸','đŠī¸','đĒī¸','đĢī¸','đŦī¸','đ­','đŽ','đ¯','đ°','đą','đ˛','đŗ','đ´','đĩ','đļī¸','đˇ','đ¸','đš','đē','đģ','đŧ','đŊ','đž','đŋ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ ','đĄ','đĸ','đŖ','đ¤','đĨ','đĻ','đ§','đ¨','đŠ','đĒ','đĢ','đŦ','đ­','đŽ','đ¯','đ°','đą','đ˛','đŗ','đ´','đĩ','đļ','đˇ','đ¸','đš','đē','đģ','đŧ','đŊī¸','đž','đŋ','đ','đ','đ','đ','đ','đđģ','đđŧ','đđŊ','đđž','đđŋ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đ ','đĄ','đĸ','đŖ','đ¤','đĨ','đĻ','đ§','đ¨','đŠ','đĒ','đĢ','đŦ','đ­','đŽ','đ¯','đ°','đą','đ˛','đŗ','đ´','đĩ','đļ','đˇ','đ¸','đš','đē','đģ','đŧ','đŊ','đž','đŋ','đ','đ','đī¸','đī¸','đ','đ','đ','đ','đ','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đī¸','đ ','đĄ','đĸ','đŖ','đ¤','đĨ','đĻ','đ§','đ¨','đŠ','đĒ','đĢ','đŦ','đ­','đŽ','đ¯','đ°','đŗī¸âđ','đŗī¸','đ´ķ §ķ ĸķ Ĩķ Žķ §ķ ŋ','đ´ķ §ķ ĸķ ŗķ Ŗķ ´ķ ŋ','đ´ķ §ķ ĸķ ˇķ Ŧķ ŗķ ŋ','đ´','đĩī¸','đˇī¸','đ¸','đš','đē','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đâđĻē','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ ','đĄ','đĸ','đŖ','đ¤','đĨ','đĻ','đ§','đ¨','đŠ','đĒ','đĢ','đŦ','đ­','đŽ','đ¯','đ°','đą','đ˛','đŗ','đ´','đĩ','đļ','đˇ','đ¸','đš','đē','đģ','đŧ','đŊ','đž','đŋī¸','đ','đâđ¨','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ ','đĄ','đĸ','đŖ','đ¤','đĨ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ','đ ','đĄ','đĸ','đŖ','đ¤','đĨ','đĻ','đ§','đ¨','đŠ'])}`

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/rtf"]
     let lin_ = ["https://www.youtube.com","https://www.instagram.com","https://www.facebook.com"]
     
  let cap = `*${htki} Information ${htka}*
*đˇī¸ Nama:* *(${name})*
*đ˛ Money:* *RP* ${money}
*đ Level* ${level}
*đ Role:* ${role}
*đ§Ŧ XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
*đ¨ Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*âąī¸Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik ${usedPrefix}inv untuk melihat Inventory RPG`

let weem = `đŽ *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`

  let buttonMessage= {
'document': {'url': sgc},
'mimetype': mim_.getRandom(),
'fileName': 'Silahkan Pilih Menu Dibawah.',
'fileLength': fsizedoc,
'pageCount': fpagedoc,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': lin_.getRandom(),
'mediaType': 2,
'previewType': 'pdf',
'title': 'đ Hai, ' + name ,
'body': 'Role ' + role + ' bang',
'thumbnail': await( await fetch(pp)).buffer(),
'sourceUrl': sgc}},
'caption': cap,
'footer': weem,
'buttons': [
{'buttonId': usedPrefix + 'm','buttonText': {'displayText': `${emoj} Menu`},'type': 1},
{'buttonId': usedPrefix + 'runtime','buttonText': {'displayText': `${emoj} Runtime`},'type': 1}
],
'headerType': 6}
    await conn.sendMessage(m.chat, buttonMessage, fdoc)
    
}

handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menu|.menu|\?)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }