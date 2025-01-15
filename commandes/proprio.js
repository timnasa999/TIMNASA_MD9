const {zokou}=require("../framework/zokou")







zokou({nomCom:"reboot",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("*𝐓𝐈𝐌𝐍𝐀𝐒𝐀 𝐌𝐃 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆......𝐍𝐎𝐖 𝐈𝐒 𝐎𝐅𝐅 𝘄𝗮𝗶𝘁 𝗳𝗼𝗿 𝗼𝗻 𝗮𝗴𝗮𝗻𝗶 ...*");

  exec("pm2 restart all");
  

  



})
