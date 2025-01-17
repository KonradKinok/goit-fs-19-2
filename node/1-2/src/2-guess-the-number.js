import fs from "node:fs";
import * as commander from "commander";
import readline from "readline";
import colors from "colors";

const getResultsFileName = () => {
  commander.program.option(
    "-f, --file [type]",
    "File where we will save our game results",
    "results.txt"
  );

  commander.program.parse(process.argv);

  return commander.program.opts().file;
};

const isNumber = (val) => typeof val === "number" && !isNaN(val);

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(colors.cyan("Please provide a number!"));

const MAX = 1_000;
const SECRET_NUMBER = Math.round(Math.random() * MAX);

let tries = 0;

lineReader.on("line", (answer) => {
  const guess = Number.parseInt(answer);

  if (!isNumber(guess)) {
    return console.log(
      colors.red(`${answer} is not a number. Please provide a legit value...`)
    );
  }

  tries++;

  if (guess === SECRET_NUMBER) {
    console.log(
      colors.green(
        `Hooray! You've won! ${SECRET_NUMBER} was the secret number!`
      )
    );

    const msg = `You guessed after ${tries} tries!`;
    console.log(colors.rainbow(msg));

    fs.appendFileSync(
      getResultsFileName(),
      `${new Date().toISOString()} ${msg}\n`
    );

    process.exit();
  }

  if (guess < SECRET_NUMBER) console.log(colors.magenta("More"));
  if (guess > SECRET_NUMBER) console.log(colors.magenta("Less"));
});
