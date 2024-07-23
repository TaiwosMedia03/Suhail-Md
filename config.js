const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9116009244";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_17_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6L3ZMZzZKdW80Kzk5c1R1TzhBVEFyK2Zlb2lVZEJDMThNcUlIN3JmS0ZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4WG8tNVp3eVJ5ZVM0MHVfdHNnRkxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4ZDc4OTI3LTg2ZTQtNDAyYy1iNTYzLTFhYTAwNWQ4YzYyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDIzNCxcbiAgICAgIDI0MCxcbiAgICAgIDIsXG4gICAgICA3OSxcbiAgICAgIDIyOSxcbiAgICAgIDE2NSxcbiAgICAgIDEzLFxuICAgICAgMjQ5LFxuICAgICAgMTg3LFxuICAgICAgMTA5LFxuICAgICAgMjM0LFxuICAgICAgMTI2LFxuICAgICAgMTksXG4gICAgICAxNzQsXG4gICAgICA1NixcbiAgICAgIDExMCxcbiAgICAgIDE1MyxcbiAgICAgIDU5LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAyMjEsXG4gICAgICAyMTIsXG4gICAgICAxMTgsXG4gICAgICAxNjAsXG4gICAgICAzOCxcbiAgICAgIDE2NSxcbiAgICAgIDUwLFxuICAgICAgOTksXG4gICAgICAxNDgsXG4gICAgICAyNDUsXG4gICAgICAyMjIsXG4gICAgICA3NSxcbiAgICAgIDE2MSxcbiAgICAgIDE5MixcbiAgICAgIDE5NCxcbiAgICAgIDI1NCxcbiAgICAgIDE5MyxcbiAgICAgIDE1OCxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVZNEExR1E1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE2MDA5MjQ0OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGFpd29zTWVkaWFcIixcbiAgICBcImxpZFwiOiBcIjEzMDcxNzczMjMyMzMzNjo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV3NvNElCRVBhUy83UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjM4QXg5S3kxUjhXbXRERU9vU1Y2Q1BTdDVHYkJJOTQ4ang2U05DWTUyd0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3BiQmdJVlBqYUFyZHZvVTZRRTBaaFBjWUFlZnZBRkl0NGxtUkFTRlp3czU3dWwzYS96WUZDV0tHUFZuQ2pIeExLSmxING9kNVdrME1PY0JQVlprQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwialB6Kys2dmR5RVlSODVmaDQ1bjlzZXRoMkZhOEVwYVM4ZEpCbHU3Z044NmRaMVI5dkoycmtOYVpob05RNnRQM2U3ZzRWdlpYR3VCQTBySDZmeTM4Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNjAwOTI0NDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc0NzgzNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
