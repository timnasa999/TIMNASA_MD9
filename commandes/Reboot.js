




const {zokou}=require("../framework/zokou")







zokou({nomCom:"reset",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝐓𝐈𝐌𝐍𝐀𝐒𝐀 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆...........𝐁𝐀𝐂𝐊 𝐔𝐏 𝐀𝐆𝐀𝐍 𝐓𝐎 𝐎𝐍 ⚽");

  exec("pm2 restart all");
  

  



})
