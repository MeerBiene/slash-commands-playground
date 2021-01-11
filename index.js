const { DiscordInteractions }  = require("slash-commands");

const { applicationId, authToken, publicKey } = require("./config.json");

const interaction = new DiscordInteractions({
    applicationId,
    authToken,
    publicKey
})

const command = {
    name: "avatar",
    description: "get a users avatar",
    options: [
      {
        name: "hello",
        description: "tells the world hello",
        type: ApplicationCommandOptionType.BOOLEAN,
      },
    ],
  };
  
(async function main() {
  // Create Global Command
  await interaction
    .createApplicationCommand(command)
    .then(console.log)
    .catch(console.error);
})()