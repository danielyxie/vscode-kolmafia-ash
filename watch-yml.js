const fs = require('fs');
const yaml = require('js-yaml');

function recompile() {
    const obj = yaml.safeLoad(fs.readFileSync('syntaxes/ash.yml'));
    fs.writeFileSync('dist/ash.json', JSON.stringify(obj));
}

fs.watchFile('syntaxes/ash.yml', () => {
    console.log('Recompiling ash.json...');
    try {
        recompile();
    } catch (err) {
        console.error(err);
    }
    console.log('Done recompiling.');
});

recompile();

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));
const forever = async () => {
  await snooze(1000);
};

forever();