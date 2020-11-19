client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);

    client.user.setActivity("Bot created by Djelie06", );

});