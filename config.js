const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Ben-toxic/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/ITR670wpQ7SEodVyLx4NcC";
global.website=process.env.GURL || "https://chat.whatsapp.com/ITR670wpQ7SEodVyLx4NcC" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254719485000";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "DR BEN ❤️🥀",

  sessionName:process.env.SESSION_ID || "SUHAIL_03_51_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOUExaVJ3b01Cdmo5d1lrbDR1SUc5Q0YxWE9mUGRNSCs4bjdJWG91NHNGZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSG5WLWJjTHRTYy11MHA3NFA2QWM2d1wiLFxuICBcInBob25lSWRcIjogXCJmOTI1ZDliZi0zZDAyLTRhZGUtODIyYi0xZjE5M2UzODViODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAxMDIsXG4gICAgICAxMDAsXG4gICAgICA3MSxcbiAgICAgIDExNSxcbiAgICAgIDE2OCxcbiAgICAgIDI0NSxcbiAgICAgIDIxMyxcbiAgICAgIDc4LFxuICAgICAgMjM4LFxuICAgICAgMTcxLFxuICAgICAgMjM4LFxuICAgICAgMjUwLFxuICAgICAgMzMsXG4gICAgICAxMDYsXG4gICAgICAyNDksXG4gICAgICAxMTYsXG4gICAgICAyMTIsXG4gICAgICAyNTMsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAxOTAsXG4gICAgICAxNjEsXG4gICAgICAxMTYsXG4gICAgICAxOTMsXG4gICAgICAyMixcbiAgICAgIDYzLFxuICAgICAgMyxcbiAgICAgIDQyLFxuICAgICAgMTk4LFxuICAgICAgMTQxLFxuICAgICAgMzYsXG4gICAgICAxNjUsXG4gICAgICAxMzUsXG4gICAgICAxNjcsXG4gICAgICA3NCxcbiAgICAgIDI1NSxcbiAgICAgIDE0NSxcbiAgICAgIDY0LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUFOTTdIR0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxOTQ4NTAwMDo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRSIEJFTlwiLFxuICAgIFwibGlkXCI6IFwiMTc2MTYyODMxNjIyMzU3OjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTdXJkZ0dFSjc0NmJZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzB3VEhGanAwTWQvVzA0MHJMdERkbmVjbWh6UWNPRlg3SnpYS0N5TCt6TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCamFwM3NJK3liV0l6TmZRdG9iZlVpNHRBYlJGQVlOa095MkU0Rm5iQTVkNXNaQU5XZEFHSVZoeitxRXRxUGVYV3llZzZ0WkxRdStLV01BNVExZ3NBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKNmYwSjA5MTNCSjZaRThxNVFrOW45TFFTYXR6OCtpQlVwdFhBb21Bb0JQNXFwZGd5eXEwN1FtMG56NGVlOEdPYnhVSStOV055Q292K0pwWnRDcGhpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTk0ODUwMDA6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTU5NDY2MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
