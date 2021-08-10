var readlineSync = require("readline-sync"); //Library to take the input
const chalk = require("chalk");
var Address = require("public-ip");
var weather = require("weather-js");
let fs = require("fs");
const hyperlinker = require('hyperlinker');
const figlet = require('figlet')
var score = 0;
let count = 1;

printname();
// ============================================= ADD YOUR NAME ========================================================//;
var userName = readlineSync.question(
  chalk.greenBright.bold("What is your Name?\n")
);

console.log(
  chalk.whiteBright.bold("\nWelcome " + "🎉\n") +
    chalk.black.bgYellowBright.italic(" " + userName + " ") +
    chalk.white(" To ") +
    chalk.whiteBright.bold("Fun-With-CLI" + "😃\n")
);

// ============================================= ADD YOUR AGE ========================================================//;
var Age = readlineSync.question(chalk.greenBright.bold("What is your Age ?\n"));
console.log(
  chalk.yellowBright.bold("\nWell!! ") +
    chalk.magenta.italic.bold(userName) +
    chalk.yellowBright.bold(" I'm ") +
    chalk.yellowBright.bold(
      "Glad to know about your age my Age is 20 " + "😊\n"
    )
);

// ============================================= ADD YOUR HOMETOWN ========================================================//;
var Hometown = readlineSync.question(
  chalk.bold.white.italic(userName + " ") +
    chalk.greenBright.bold("Where Do You Put Up? \n")
);
console.log(
  chalk.yellowBright("\n Oh La La !! " + "😍 ") +
    chalk.white.bold(" " + Hometown + " ") +
    chalk.yellowBright(" Is ") +
    chalk.yellowBright.bold("Amazing :)) \n")
);

// ============================================= PLAY QUIZ  ========================================================//;
var ans1 = readlineSync.question(
  chalk.greenBright.bold("Would you Like to play a quiz? \n")
);

if (ans1 == "no" || ans1 == "NO" || ans1 == "No") {
  console.log(
    chalk.redBright.bold(
      "That's OK 😍 , Let's Move ahead for something more interesting \n\n"
    )
  );
} else {
  console.log("Yayy! let's Begin");
  console.log(
    "-----------------------🧠🧠💡🤯💡🤯💡🤯💡🤯💡🤯💡🤯💡🧠🧠-----------------------"
  );
  console.log(
    chalk.blue.italic(
      "Rules:\n1)💡For each question, enter the option number as 1, 2, 3 or 4. \n2)💡 You DO NOT need to press enter after the option number.\n"
    )
  );
  console.log(
    "-----------------------🧠🧠💡🤯💡🤯💡🤯💡🤯💡🤯💡🤯💡🧠🧠-----------------------"
  );
  console.log(
    chalk.yellowBright("💡💡Lets see if you are a genius or not.💡💡\n")
  );

  // Questions List

  let questions = [
    (questionOne = {
      question: "What Is The Name of our President?",
      options: [
        "Iron Man",
        "Ram Nath Kovind",
        "Narendra Modi",
        "None Of The Above",
      ],
      answer: "Ram Nath Kovind",
    }),
    (questionTwo = {
      question: "Who Came First An egg or A  Hen?",
      options: ["Egg", "Hen", "Still A Mystery", "I Bet On Egg"],
      answer: "I Bet On Egg",
    }),
    (questionThree = {
      question: "The more it dries, the wetter it gets. What is it?",
      options: ["Towel", "Snow"],
      answer: "Towel",
    }),
    (questionFour = {
      question:
        "84% of people reading this will not find the the mistake in this A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z.",
      options: ["L", "Z", "The", "This"],
      answer: "The",
    }),
    (questionFive = {
      question: "Who Won The Gold For India IN 2021 Tokyo Olympics",
      options: [
        "Neeraj Chopra",
        "Mirabai Chanu",
        "Mary Kom",
        "Ravi Kumar Dhaiya",
      ],
      answer: "Neeraj Chopra",
    }),
  ];
  for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    CLIQUIZ(
      currentQuestion.question,
      currentQuestion.options,
      currentQuestion.answer
    );
  }

  var highScores = [
    {
      playerName: "Nishant",
      score: 10,
    },

    {
      playerName: "Kishor ",
      score: 9,
    },
    {
      playerName: "Swapnanil",
      score: 8,
    },
  ];

  console.log(chalk.cyanBright("Check out the top three scores: \n"));
  console.table(highScores);
}

//// Quiz execution

function CLIQUIZ(question, options, answer) {
  console.log(chalk.cyanBright(question));
  var yourAnswer = readlineSync.keyInSelect(options, "Enter option number:", {
    cancel: false,
  });
  if (options[yourAnswer] === answer) {
    score++;
    console.log(chalk.green("You are Right !\n"));
    console.log(chalk.green("Your Score is:" + score + "\n"));
    console.log(chalk.red("-----------------------------------\n"));
  } else {
    //// score--;
    console.log(chalk.red("Oops !! So Close !!! \n"));
    console.log(chalk.red("Your Score is:" + score + "\n"));
    console.log(chalk.red("------------------------------------"));
  }
}

console.log(
  chalk.cyanBright("So ,  ") +
    chalk.cyanBright.italic(userName) +
    chalk.cyanBright(" Your Final Score is: ", score + "\n")
);
if (score >= 4) {
  console.log(chalk.black.bgGreenBright.bold("You are a Genuis.\n"));
} else {
  console.log(
    chalk.bgRed.bold(
      "Someday will see you in the Genius list. Till Then Explore For More With Me  \n" +
        "😃"
    )
  );
}
// =============================================  ADD A TODO  ========================================================//;
var addtodo = readlineSync.question(
  chalk.bold.white.italic(userName + " ") +
    chalk.greenBright.bold("Would You Like To Add A Todo ? \n")
);
if (addtodo == "Yes" || addtodo == "yes") {
  let todoArr = "";

  let todolength = readlineSync.question(chalk.bold.white.italic(userName + " ") +chalk.greenBright.bold("Tell Me The Length Of Your List ?\n")
  );

  for (let i = 0; i < todolength; i++) {
    let task = readlineSync.question(
      chalk.bold.white.italic(userName + " ") +
        chalk.greenBright.bold(
          "Tell Me The " + chalk.yellow.bold(count) + " task! \n"
        )
    );
    todoArr += count + ")" + "." + task + " \n";
    count++;
    let filename = ".//Todo.txt";
    fs.writeFileSync(filename, todoArr);
  }
} else {
  console.log("Okay 🙂! We might have got something that will interest you 🙂");
}
// ============================================= UPDATE YOUR EXISTING TODO ========================================================//;
var Updatetodo = readlineSync.question(chalk.bold.white.italic(userName + " ") + chalk.greenBright.bold("Would You Like To Update A Todo ? \n")
);
if (Updatetodo == "Yes" || Updatetodo == "yes") {
  let task = readlineSync.question(chalk.bold.white.italic(userName + " ") + chalk.greenBright.bold("Tell Me The Updated Task! \n")
  );

  let filename = "./Todo.txt";
  fs.appendFileSync(filename, count + ")" + "." + task);
  count++;
} else {
  console.log("Okay 🙂! We might have got something that will interest you 🙂");
}

// ============================================= DELETE YOUR TODO ========================================================//;
// ============================================= DELETE YOUR TODO ========================================================//;
var deletetodo = readlineSync.question(
  chalk.bold.white.italic(userName+ " ") +
    chalk.greenBright.bold("Would You Like To Delete A Todo ? \n")
);
if (deletetodo == "Yes" || deletetodo == "yes") {

let rawdata = fs.readFileSync('./Todo.txt', 'utf8');
// console.log(rawdata); //in string form

let anarr = rawdata.split("\n"); //[ '', '1', '2', '3' ]
let index=[]
 index.push(readlineSync.question(
  chalk.bold.white.italic(userName+ "\n") +
    chalk.greenBright.bold("Tell Me The Task Number You Want To Delete? \n")
)) 

  // console.log(anarr[i]);
 index=  index.toString();
  
    
    anarr.splice(index, 1); 
    fs.writeFileSync("./updatedTodo.txt" , anarr.toString())
 

console.log(anarr+"244");



} else {
  console.log("Okay 🙂! We might have got something that will interest you 🙂");
}
// ============================================= GET YOUR IP ADDRESS ========================================================//;
var IP = readlineSync.question( chalk.greenBright.bold(userName + " ") +chalk.greenBright.bold("Would You Like To Get Your Ip Address? \n")
);
if (IP == "Yes" || IP == "yes") {
  (async () => {
    fs.appendFileSync("ip.txt","💻 Your IP Address Is:-" + (await Address.v4()));

  
  })();
} else {
  console.log("Okay ! We've got more that might interest you \n\n");
}

// ============================================= GET WEATHER ========================================================//
var Weather = readlineSync.question(chalk.bold.white.italic(userName + " ") +chalk.greenBright.bold( "Would You Like To Get The Weather Updates Around you ? \n")
);
if (Weather == "Yes" || Weather == "yes") {
  let Area = readlineSync.question(
    chalk.bold.white.italic(userName + " ") +
      chalk.greenBright.bold("Mention Area(State , Country) :- \n")
  );
  weather.find({ search: Area, degreeType: "F" }, function (err, result) {
    if (err) console.log(err);
    fs.writeFileSync("weather.json", JSON.stringify(result, null, 2));
    
  });
} else {
  console.log(" AHH! That's All For Now!");
  
}

console.log('Github :--', 'https://github.com/lakshita15 \n');

console.log('Linkedin :--', 'https://www.linkedin.com/in/lakshita-m-a1935b196/ \n') 

console.log('My Website :--', 'https://lakshita15.github.io/ \n') 

console.log("Made With Love ❤️"+"  "+"  By Lakshita Mahajan");
function printname(){
  console.log(`${chalk.green(
    figlet.textSync(' FUN-WITH-CLI ', {
        horizontalLayout: 'full',
    })
)}\n`)
}
// //=====================================================================================================//
//                                             /* END */
// //=====================================================================================================//
