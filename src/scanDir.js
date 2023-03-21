import fs from 'fs'
import { OpenAI } from "./OpenAI.js"
const openAI = new OpenAI('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')
const topic = 'NodeJs'
const model = 'text-davinci-003'
const args = process.argv.slice(2)
let sourceDir = args[0]

const generatePrompt = (topic) => {
    return `Write an blog post about "${topic}", it should in HTML format, include 5 unique points, using informative tone.`
};

function readFiles(dirname, onError) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err)
            return
        }
        filenames.forEach(function (filename) {
            fs.readFile(dirname + filename, 'utf-8', async function (err, content) {
                if (err) {
                    onError(err);
                    return
                }
                console.log("CONTENT OF FILE", content) // replace with opeai api
            });
        });
    });
}

readFiles(sourceDir, (err) => console.log("Error occured:", err))