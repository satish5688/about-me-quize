//                A Quiz Game


var readline = require('readline-sync');
score = 0

//  Welcome Code

var userName=readline.question("Enter your name : ")
console.log("hello ",userName,",How tough are you about me, i'm satish:")

// Use function & if else

function play(question,answer){
    var Answer=readline.question(question );
    if (Answer.toUpperCase()===answer.toUpperCase()){
        console.log('You are right')
        score+=1
        console.log("")
    }else{
        console.log('You are wrong')
        console.log("")
    }
};

// Data of Highscores

var highScore=[{
  'Roshan':3,
},
{
  'Akash':3
}];

// Call Function

play("1] Where do i come from ?  \n","lobhi")

play("2] which is my favourite Avenger's superhero ?  \n","Ironman")

play("3] Where i study ? \n","dharamshala")

play("4] which is my favourite food ?  \n","Momos")


// For Print Output

console.log(userName,"Your final Score is ",score)
console.log("High Scores -:",highScore[0],highScore[1])