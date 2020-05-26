const fs = require('fs');
const yaml = require('js-yaml');

fs.watchFile('syntaxes/ash.yml', () => {
    console.log('Recompiling ash.json...');
    try {
        const obj = yaml.safeLoad(fs.readFileSync('syntaxes/ash.yml'));
        fs.writeFileSync('syntaxes/ash.json', JSON.stringify(obj));
    } catch (err) {
        console.error(err);
    }
    console.log('Done recompiling.');
});

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));
const forever = async () => {
  await snooze(1000);
};

forever();