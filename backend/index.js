/**
 * $$$$$$$$\                                                                                               
$$  _____|                                                                                              
$$ |       $$$$$$$\  $$$$$$\  $$$$$$\$$$$\  $$$$$$\$$$$\   $$$$$$\   $$$$$$\   $$$$$$$\  $$$$$$\        
$$$$$\    $$  _____|$$  __$$\ $$  _$$  _$$\ $$  _$$  _$$\ $$  __$$\ $$  __$$\ $$  _____|$$  __$$\       
$$  __|   $$ /      $$ /  $$ |$$ / $$ / $$ |$$ / $$ / $$ |$$$$$$$$ |$$ |  \__|$$ /      $$$$$$$$ |      
$$ |      $$ |      $$ |  $$ |$$ | $$ | $$ |$$ | $$ | $$ |$$   ____|$$ |      $$ |      $$   ____|      
$$$$$$$$\ \$$$$$$$\ \$$$$$$  |$$ | $$ | $$ |$$ | $$ | $$ |\$$$$$$$\ $$ |      \$$$$$$$\ \$$$$$$$\       
\________| \_______| \______/ \__| \__| \__|\__| \__| \__| \_______|\__|       \_______| \_______| 
 _______   ________  _______   ______   ______   ________ ________  _______   ______   ______  
/       \ /        |/       \ /      | /      \ /        /        |/       \ /      | /      \ 
$$$$$$$  |$$$$$$$$/ $$$$$$$  |$$$$$$/ /$$$$$$  |$$$$$$$$/$$$$$$$$/ $$$$$$$  |$$$$$$/ /$$$$$$  |
$$ |__$$ |$$ |__    $$ |__$$ |  $$ |  $$ \__$$/ $$ |__   $$ |__    $$ |__$$ |  $$ |  $$ |__$$ |
$$    $$/ $$    |   $$    $$<   $$ |  $$      \ $$    |  $$    |   $$    $$<   $$ |  $$    $$ |
$$$$$$$/  $$$$$/    $$$$$$$  |  $$ |   $$$$$$  |$$$$$/   $$$$$/    $$$$$$$  |  $$ |  $$$$$$$$ |
$$ |      $$ |_____ $$ |  $$ | _$$ |_ /  \__$$ |$$ |     $$ |_____ $$ |  $$ | _$$ |_ $$ |  $$ |
$$ |      $$       |$$ |  $$ |/ $$   |$$    $$/ $$ |     $$       |$$ |  $$ |/ $$   |$$ |  $$ |
$$/       $$$$$$$$/ $$/   $$/ $$$$$$/  $$$$$$/  $$/      $$$$$$$$/ $$/   $$/ $$$$$$/ $$/   $$/ 
                                                                                                                                                                                                                                              
 */
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
    console.log('DB Connected')
    // Agregamos CORS al servidor

    server.listen(3001, () => {
        console.log('Listening on Port: 3001'); // eslint-disable-line no-console
    });
});