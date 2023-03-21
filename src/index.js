import { OpenAI } from "./OpenAI.js"
const openAI = new OpenAI('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')
const topic = 'NodeJs'
const model = 'text-davinci-003'

const generatePrompt = (topic) => {
    return `Write an blog post about "${topic}", it should in HTML format, include 5 unique points, using informative tone.`
};

await openAI.generateText(generatePrompt(topic), model, 800)
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.error(error);
    });