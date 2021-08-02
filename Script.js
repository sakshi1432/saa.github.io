const quizDB =[
    {
        question:"Q1:What is the Array in js?",
        a:"variable",
        b:"function",
        c:"data",
        d:"Object",
        ans:"ans4"
    },
       {
        question:"Q2:What is the full form of Css?",
        a:"Cascading style sheet",
        b:"stylish Language",
        c:"Hey markup cascading",
        d:"sheet Text Markup Langauge",
        ans:"ans1"
    },
    {
        question:"Q3:What is javascript?",
        a:"javascript",
        b:"programming Language",
        c:"cascading language",
        d:"sheet  Markup Langauge",
        ans:"ans2"
    },
    {
        question:"Q4:What Object stores in js",
        a:"propertis",
        b:"entity",
        c:"variable",
        d:"array",
        ans:"ans1"
    }
    
];

const a =document.querySelector('.a');
const question =document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const sho = document.querySelector('#showScore');
const play = document.querySelector('.t');
const tim =document.querySelector('.r');
const exp =document.querySelector('.exp');

let questionCount = 0;
let score = 0;

const loadQuestion =() =>{


        const questionList = quizDB[questionCount];
    
        question.innerHTML=questionList.question;
        option1.innerHTML=questionList.a;
        option2.innerHTML=questionList.b;
        option3.innerHTML=questionList.c;
        option4.innerHTML=questionList.d;
        
}

loadQuestion();

var countDownDate = new Date().getTime() + 15 * 60 * 1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  tim.innerHTML =  hours + ":"
  + minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    exp.innerHTML = "<button>EXPIRED</button>";
  }
}, 1000);

const getCheckAnswer = ()=>{
    let answer;
    answers.forEach((currentElem) =>{
            if(currentElem.checked){
                answer=currentElem.id;
            }

         });
    return answer;
};

submit.addEventListener('click',() =>{
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer === quizDB[questionCount].ans )
            {
                score++;
            
            };

            questionCount++;
            a.innerHTML = 'Q.' +questionCount+ '  from ' +quizDB.length;

            if(questionCount < quizDB.length)
                {
                   loadQuestion();
                }
                else{
                      sho.innerHTML = '<span>your score</span>'+' ' +score+ "✌️" + 
                    '<button onClick ="location.reload()">Play again</button>';   
                
                }
              
});

