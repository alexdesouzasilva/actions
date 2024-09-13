const core = require('@actions/core');
const github = require("@actions/github")

console.log("Iniciando processo...")
try {
    const name = core.getInput('name');
    console.log(`Hello ${name}!`);
    const message = `Welcome mister ${name}`
    core.setOutput("message", message);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log('The event payload: ${payload}');
} catch(error) {
    core.setFailed(error.message);
}