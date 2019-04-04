const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"

client.on('ready', () => {
console.log(`سجل الدخول ${client.user.tag}!`);
console.log('')
console.log('')
console.log('╔[═════════════════════════════════════════════════════════════════]╗')
console.log(`[Start] ${new Date()}`);
console.log('╚[═════════════════════════════════════════════════════════════════]╝')
console.log('')
console.log('╔[════════════════════════════════════]╗');
console.log(`تسجيل الدخول ل * [ " ${client.user.username} " ]`);
console.log('')
console.log('معلومات : ')
console.log('')
console.log(`عدد السيرفرات♤ [ " ${client.guilds.size} " ]`);
console.log(`المستخدمين♡ [ " ${client.users.size} " ]`);
console.log(`الرومات♧ [ " ${client.channels.size} " ]`);
console.log('╚[════════════════════════════════════]╝')
console.log('By Jackeo')
console.log('╔[════════════]╗')
console.log(' البوت اون لاين')
console.log('╚[════════════]╝')
console.log('V2 العربية arap ')
console.log('Dev Narox by Jackeo')
});

client.on("message", message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setDescription(`**تم الارسال في الخاص**📬`)
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('Click To Join Support Server')
         .setURL('')
         .setDescription(``)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('**Yandex Bot
   ${prefix} تفعيل/نفسك لتفعيل 
   ${prefix}ييسشي
   ${prefix}ييسشي
   ${prefix}يشسي
   ${prefix}يسيب
   ${prefix}help
   ${prefix}بصثس
   **🔐'))
   
   }
   });

client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'تفعيل')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send('**ليس لدي برمشن حتى اعطي رتب `Manage_roles`**').then(m => m.delete(5000));
       if(message.channel.name !== `order`) return message.channel.send(`**:warning:  انت لست في الروم الصحيح **`).then(m => m.delete(5000));
    else{

var one = Math.floor(Math.random() * 9) + 1;
var two = Math.floor(Math.random() * 9) + 1;
var three = Math.floor(Math.random() * 9) + 1;
var four = Math.floor(Math.random() * 9) + 1;
var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**~~>~~ :pencil2:  `${number}`, اكتب الرقم لتفعيل نفسك**`).then(m => {
    message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 60000}).then(c => {
    if(c.first().content === number) {
       m.delete();
      message.member.addRole(message.guild.roles.find("name", "Visitors"));    
	  message.channel.send(`**~~>~~ :white_check_mark:  | ${message.author.username}, تم تفعيلك بنجاح **`);
    }else if(c.first().content !== number) {
        m.delete();
        }
      });
    });
   }
  }
})
client.on("message", message => {
if(message.content.starsWith(prefix + 'category')) {
message.reply(`Server Have ${msg.guild.channels.filter(m => m.type === 'category').size} Categories`)
}
} )
client.on("message", message => {
    if(message.content.startsWith(prefix + "bot")){
        const embed = new Discord.RichEmbed()
        .setTitle("**Bot Info | 📰**")
        .setDescription(`
» Bot Name: UltraBot
» Bot ID: ${client.user.id}
» Prefix: ${prefix}
» Ping: ${client.ping}
» Guilds: ${client.guilds.size}
» Users: ${client.users.size}
» Channels: ${client.channels.size}
`)
.setFooter("Ultra Bot")
message.channel.sendEmbed(embed)
    }
})
client.on('message', function(msg) {
        var prefix = '#';
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** بلد السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });

client.on('message',message =>{
  var prefix = "#"
  var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.mentions.users.first()
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**⛔ | You dont have **BAN_MEMBERS** Permission!**');
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send('**⛔ | I dont have **BAN_MEMBERS** Permission!**');
        if(!args[1]) return  message.channel.send('**ℹ  `#unban <@id>` يجب تحديد شخص**');
        if(args[1].length < 16) return message.reply('**⛔ | This ID is not id user!**');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === args[1]);
            if(!Found) return message.channel.send(`**:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:**`);
            message.guild.unban(args[1]);
            message.channel.send(`**:white_check_mark: Successfully unban <@${args[1]}> From the server!**`);
            }
 
        )}
      })
client.on("message", (message) => {
    var args = message.content.split(" ");
    var cmd = args[0];
    switch(cmd) {
        case prefix + "roles":
        var role = message.guild.roles.find(role => role.id == args[1]) || message.mentions.roles.first();
        if (!role) return message.reply('لا استطيع إيجاد هذه الرتبة');
        var embed = new Discord.RichEmbed()
        .setTitle("الأعضاء الذين يمتلكون رتبة :  " + role.name)
        .setDescription(role.members.map(member => `- ${member.user.tag}`));
        message.channel.send({
            embed: embed
        });
        break;
    }
});

var hastebin = require('hastebin.js');
var h = new hastebin({});
 
 client.on('message', message => {
     if (!message.content.startsWith(prefix)) return;
     var args = message.content.split(' ');
     var command = args[0];
     switch(command) {
        case "-clear":
            if (message.channel.type !== "text") return message.reply("** This Command is Only For Servers | ❌ **");
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("** You Don't Have Access To Do This Command | ❌ **");
            if (!args[1]) args[1] = 100;
            var count = parseInt(args[1]);
            if (isNaN(count)) return message.reply("** You Have To Type Number | ❌ **");
            message.channel.bulkDelete(count).then(msgs => {
                message.channel.send(`** Done ** | I have Deleted ${msgs.size} Messages ...`).then(m => m.delete(3000));
                var x = 0;
                var messages = msgs.map(m => `${++x} - ${m.author.tag}  :  ${m.content.split(" ").join(" ")}`).join(`
    `);
                fs.writeFile(`${message.guild.id}.txt`, messages, (err) => {
                    if (err) console.log(err.message);
                    h.post(messages).then(url => {
                        var c = message.guild.channels.find("name", "log");
                        if (!c) return;
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Bulk delete. | ${msgs.size} messages`)
                        .setAuthor(client.user.tag, client.user.avatarURL)
                        .setThumbnail(message.guild.iconURL)
                        .setColor("RANDOM")
                        .setDescription(`By \`${message.author.tag}\`\n\n In #${message.channel.name}\n\n [Vew Messages on : \`HasteBin\`](${url})`)
                        .attachFile(`./${message.guild.id}.txt`);
                        c.send(`Download messages : `, {embed : embed});
                    });
                });
            });
        break;
    };
});
client.on('message', function(message) {
	let mohammad = client.channels.get("546006520895242240");
	let gamer = message.content.split(" ");  
	if(message.author.bot) return;
  if(message.content.startsWith("yandex")) return mohammad.send("`هناك ناس ذكرت اسمك هل تريد رأيت الرسالة ؟`").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
   let Rembed = new Discord.RichEmbed()
   .setThumbnail(message.author.avatarURL)
   .addField("**# - الرسالة:**",gamer,true)
   .addField("**# -  الشخص:**",message.author.tag,true)
   .addField("**# - الوقت:**",message.createdAt,true)   
   mohammad.send(Rembed)
   
})
reaction2.on("collect", r => {
    mohammad.send("**# - Canceled!**");
});
  });
});

const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "invite-checker");
    welcome.send(` ||${member.user.tag}|| invited by ||${inviter.tag}|| invites =  ||${invite.uses}|| `)
  });
});

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد :pencil:\nبرودكاست بدون امبد:pencil2: \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
  .setTitle('`-Broadcast-`')
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setDescription(`Message : ${args}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});
client.on('message',async message => {


    if (message.content.startsWith(prefix + "inviteserver")) {
        if(message.author.bot) return;
        const args = message.content.split(' ').slice(prefix.length);
    var uses = args[0];
    var age = args[1];

    if (!uses) {
        return message.reply('لقد نسيت ان تقول كم عدد المستخدمين');
    }
    if (!age) {
        message.reply('لقد نسيت ان تقول كم مده انتهاء الرابط');
        age = await 0;
    }

    uses = await uses.toString(); 

    if (uses.indexOf('.') !== -1) {
        return message.reply(''); 
    }

    age = await age.toString();

    if (age.indexOf('s') !== -1) { 
        age = await age.replace(/s.*/, '');
    } else if (age.indexOf('m') !== -1) { 
        var agemin = await age.replace(/m.*/, '');
        age = await agemin * 60;
    } else if (age.indexOf('h') !== -1) { 
        var agehour = await age.replace(/h.*/, '');
        age = await agehour * 60 * 60;
    } else if (age.indexOf('d') !== -1) { 
        var ageday = await age.replace(/d.*/, '');
        age = await ageday * 60 * 60 * 24;
    } else {
        if (age.indexOf('.') !== -1) {
            return message.reply('لا. فقط ارقام'); 
        }
        age = await age; 
    }

    message.channel.createInvite({ maxUses: uses, maxAge: age }).then((invite) => {

        message.channel.send(`**
هذا رابطك:  \`${invite}\`
المستخدمين : \`${uses}\`
مده الانتهى : \`${age}\`
**`);
    });
};
});
const ms = require('ms'); // npm i ms
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;

  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

  
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;

    var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}**`);
  } 
  
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;

      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);

    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
}); 
client.on("message", function(message) {                   
    if(!message.channel.guild) return;
       if(message.content.startsWith("الوان")) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendFile(`https://media.discordapp.net/attachments/444071272503050241/450979273206005780/colors.png`).then(msg => {
        
        
        
        msg.react('❤').then(r=>{
        msg.react('💛').then(r=>{
        msg.react('💚').then(r=>{
        msg.react('🖤').then(r=>{
        msg.react('💜').then(r=>{
        msg.react('💙').then(r=>{
        msg.react('❌').then(r=>{


       
   


    
     
     let activeFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
      
                                    //red                    
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#ff0000")

      .setDescription("**:art:تم اعطائك اللون الاحمر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})


//لون اسود


 let y1Filter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
     
       let y1 = msg.createReactionCollector(y1Filter, { time: 15000 });
      
                                    //t                    
                               y1.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "black"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#0c0606")

      .setDescription("**:art:تم اعطائك اللون الاسود**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();



   })

 //لون اصفر 
let y2Filter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
     
       let y2 = msg.createReactionCollector(y2Filter, { time: 15000 });
      
                                                    
                               y2.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "yellow"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#e7fa02")

      .setDescription("**:art:تم اعطائك اللون الاصفر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


 
                               })
                               
                               //الون الاخضر

let y3Filter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
     
       let y3 = msg.createReactionCollector(y3Filter, { time: 15000 });
      
                                                    
                               y3.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "y1"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#09fa2a")

      .setDescription("**:art:تم اعطائك اللون الاخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
 })
    //الون البنفسجي

let y4Filter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
     
       let y4 = msg.createReactionCollector(y4Filter, { time: 15000 });
      
                                                    
                               y4.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "y2"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#9e1bce")

      .setDescription("**:art:تم اعطائك اللون البنفسجي**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
})
   //الون الازرق فاتح

let y5Filter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "y3"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#0bc0f7")

      .setDescription("**:art:تم اعطائك اللون اللبني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
let y6Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
       let y6 = msg.createReactionCollector(y6Filter, { time: 15000 });
      
                                                    
                               y6.on("collect", r => {
                                   message.member.removeRole(message.guild.roles.find("name", "red"))
                                   
                                   message.member.removeRole(message.guild.roles.find("name", "y3"))
                                   message.member.removeRole(message.guild.roles.find("name", "black"))
                                   message.member.removeRole(message.guild.roles.find("name", "yellow"))
                                  message.member.removeRole(message.guild.roles.find("name", "y1"))
                                  message.member.removeRole(message.guild.roles.find("name", "y2"))
                                  
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#666161")

      .setDescription("**:art:تم ازالة اللون**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


                               })
        })
})
})
        
})
})
})
})
                               
                                   })
       }
                                   
                                   });
client.on("message", message => {
    var prefix = "#";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("#clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});
client.on('message', msg => {
    if(msg.content.startsWith( prefix + 'invitebot')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('`منشن بوت`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {
 
 
 message.author.sendMessage(`
 
 __~~Bot Staff~~__
??
 __Powered By__: ! AK ƦØĊƘĒŦMĀƝ#8193
Server Support : https://discord.gg/kFAzFHj
`);
 
message.channel.send('**تم الارسال في الخاص**');
 
    }
});
client.on('message', message => {
    var prefix = '#'
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
const moment = require("moment")
const fs = require("fs")
 
client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find('name', `code`)
let memberavatar = member.user.avatarURL
if (!welcomer) return;
if(welcomer) {
moment.locale('ar-ly');
var mrx = member.user;
let mrxembed = new Discord.RichEmbed()
.setTitle(mrx.username,`#${mrx.discriminator}`)
.addField('» Joined Discord ago',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
.addField('» Your Number',`${member.guild.memberCount}`,true)
.setThumbnail(mrx.avatarURL)
.setFooter("Zombie Games.")
welcomer.send({embed:mrxembed});          
}})
 
client.on('guildMemberAdd', member => {
member.guild.fetchInvites().then(guildInvites => {
const ei = invites[member.guild.id];
invites[member.guild.id] = guildInvites;
const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
const inviter = client.users.get(invite.inviter.id);
const logChannel = member.guild.channels.find(channel => channel.name === `main-chat`);
if(!logChannel) return;
setTimeout(() => {
logChannel.send(`Invited By: <@${inviter.id}>`);
},2000)
});
});
 
client.on('guildMemberAdd',async member => {
const Canvas = require('canvas');
const jimp = require('jimp');
const w = ['./welcome_4.png'];
let Image = Canvas.Image,
    canvas = new Canvas(800, 300),
    ctx = canvas.getContext('2d');
ctx.patternQuality = 'bilinear';
ctx.filter = 'bilinear';
ctx.antialias = 'subpixel';
ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.stroke();
ctx.beginPath();
 
fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
    if (err) return console.log(err);
    let BG = Canvas.Image;
    let ground = new Image;
    ground.src = Background;
    ctx.drawImage(ground, 0, 0, 800, 300);
 
})
 
        let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
        jimp.read(url, (err, ava) => {
            if (err) return console.log(err);
            ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
         if (err) return console.log(err);
 
  ctx.font = '36px Arial';
  ctx.fontSize = '72px';
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(member.user.username, 545, 177);
 
  ctx.font = '16px Arial Bold';
  ctx.fontSize = '72px';
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
 
  let Avatar = Canvas.Image;
  let ava = new Avatar;
  ava.src = buf;
  ctx.beginPath();
  ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(ava, 36, 21, 260, 260);
   
  let c = member.guild.channels.find('name', `روم الترحيب`)
  if(!c) return;
  c.sendFile(canvas.toBuffer());
 
});
});
});
 
const invites = {};
 
const wait = require('util').promisify(setTimeout);
 
client.on('ready', () => {
wait(1000);
 
client.guilds.forEach(g => {
g.fetchInvites().then(guildInvites => {
invites[g.id] = guildInvites;
});
});
});
client.on("message", message => {
    const prefix = "#"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
client.login(process.env.BOT_TOKEN)