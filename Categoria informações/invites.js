module.exports = {
    commands: 'invites',
    callback: (message) => {
      const {guild} = message
  
      guild.fetchInvites().then((invites) => {
        const inviteCounter = {
          
        }
  
        invites.forEach((invite) => {
          const { uses, inviter } = invite
          const { username, discriminator } = inviter
          
          const name = `${username}#${discriminator}`
  
          inviteCounter[name] = (inviteCounter[name] || 0) + uses
        })
  
        let replyText = 'Convites:'
  
        const sortedInvites = Object.keys(inviteCounter).sort((a,b) => inviteCounter[b] - inviteCounter[a])
  
        console.log(sortedInvites)
  
        sortedInvites.length = 10
  
        for (const invite in inviteCounter) {
          const count = inviteCounter[invite]
          replyText += `\n${invite} convidou ${count} membros!`
        }
  
        message.reply(replyText)
      })
    },
  }