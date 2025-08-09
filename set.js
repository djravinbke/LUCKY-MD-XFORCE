const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |LUCKY-XFORCE••<=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZqMnR4dFNVdFpwV3pBRVJiK0VicWVHR2NlVERkM1E5NG9ETVdRbEZsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDNjVThtQ3h3N2Q0dTZOemJHUlVVYVg1OG8rcEFFbDl0em5tZTJDN2F6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTTFmeFlQUE02N0VGWVlYVWlXS2RuWjd1blNGQ2w2SFMzeDEvaW01azJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoUEVERjl5NnNYd25rNGpVanJJQStwMXFYSjBINGpraUtCYzdBMlArR0dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLRU5oeHJIT1lEK0E2TllhOW1WeUlSK0NPSjZvMXZsamZPaVQ0QVNwRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing3S01vemxkbGVWTUZCWWcySklDN2VOT3RIampya21qajc3MlZiZSt3UUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lWOTJlcUpqUUxQaGoyVVpIQzFnYi9WcUdXb0JuSm1QSmV2ZXQzdGFtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkJ3dkU2OEZ4cmVLa2pIME5IUVhTbEN6MlBZYmJnNUR5Qkd0c1oxVWlYTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg2Z1I0OFZUNkpxVnZ1MGoxNG5BTmtrU2VDcEJJVWc0ckt4ZzdBNWIrZVFDV0hGenJmSEhicGRPWlBUMThXQ0d4MlM1ZUtSMjJDb1o0T0p5TTJyM0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiI2a3pvdHdwWCs0QWFwVUhqNC9HTkswa0NNYzhlaTlNWkZSRXYxV2lmS21ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwODQzMDM2MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NUEwMTY3MzgzRTMxNURCMEY4QjBCODNCMkRDMjU1NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NzMzNDQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MDg0MzAzNjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0QyQkM1MzE2MzA5RUQ4MTUwNUE0ODQ2NEZENUNBNEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDczMzQ1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiODdOS0hURksiLCJtZSI6eyJpZCI6IjI1NDcwODQzMDM2Mjo2OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MDAyMTgwNjIwNDAxOjY4QGxpZCIsIm5hbWUiOiJUaGUgS2luZydzIFNvbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS205dnAwRUVOaTIzTVFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRUphMkg4aXNIVWNtekVnNjdOalEwQUlyOWRqalVtVlgvWFlGRWNucDZBMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaHhmckRlUVl6M0FnRWo4eUh2MUZSTkQvcTVlMFRVazB0c3VXNm1nWGtLeW5vU25DOS9TSGlwVTl5cytmK204RWNLdTlMemxIQ1RnaXVqZUg5MWxxQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InlQL3A3ZGRRUEVZWDNqdHV3eXBYUTlzNjBCbUNPd1BIZWdlL0hFWHhhTXI3cDYvRkJFWDdKMlFBTWExcWliTCsza0lvdWF2alphTy9adHluNGhxWkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA4NDMwMzYyOjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJDV3RoL0lyQjFISnN4SU91elkwTkFDSy9YWTQxSmxWLzEyQlJISjZlZ04ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDczMzQxNCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDR3AifQ==| 'ezra',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/mr-X-force/LUCKY-MD-XFORCE',
    OWNER_NAME : process.env.OWNER_NAME || "Ravinke",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254708430362",
    DEV : process.env.DEV || "FrediEzra Tz",
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT : process.env.AUTO_REACTION || "no", 
    AUTO_STICKER : process.env.AUTO_STICKER || "no",
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/uw4l17.jpeg",  
    URL2: process.env.URL2 || "https://files.catbox.moe/3o37c5.jpeg",
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'no',              
    CHAT_BOT: process.env.CHAT_BOT || "no",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    GREET : process.env.GREET_MESSAGE || "no", 
    AUTO_STICKER : process.env.AUTO_STICKER || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'Your Status Seen By LUCKY-MD-XFORCE',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    ANTI_BUG : process.env.ANTI_BUG || "no",
    ANTI_MENTION_GROUP : process.env.ANTI_MENTION_GROUP || "on",
    ANTI_TAG : process.env.ANTI_TAG || "on",
    ANTI_BAD : process.env.ANTI_BAD || "on",
    ANTI_SHARE_GROUP : process.env.ANTI_SHARE_GROUP || "on",
    ANTI_LINK_GROUP : process.env.ANTI_LINK_GROUP || "on",
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    WEBSITE :process.env.GURL || "https://fredi-ai-site.vercel.app",
    CAPTION : process.env.CAPTION || "LUCKY-MD-XFORCE",
    BOT : process.env.BOT_NAME || 'LUCKY-MD-XFORCE',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    LUCKY_ADM : process.env.ANTI_DELETE_MESSAGES || 'no',
    ANTI_DELETE_GROUP : process.env.ANTI_DELETE_GROUP || 'no',
    ANTI_CALL: process.env.ANTI_CALL || 'yes', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes', 
    VOICE_CHATBOT_INBOX : process.env.VOICE_CHATBOT_INBOX || "no",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
