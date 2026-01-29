 const questions = [
  // HTML
    {
        question: "1.What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        correct: "Hyper Text Markup Language",
        category: "HTML"
    },
    {
        question: "2.Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: "<a>",
        category: "HTML"
    },
    {
        question: "3.Which tag is used to insert an image?",
        options: ["<picture>", "<img>", "<image>", "<src>"],
        correct: "<img>",
        category: "HTML"
    },
    {
        question: "4.Which tag is used to create an unordered list?",
        options: ["<ol>", "<li>", "<ul>", "<list>"],
        correct: "<ul>",
        category: "HTML"
    },
    {
        question: "5.Which attribute is used to provide an alternative text for an image?",
        options: ["title", "src", "alt", "href"],
        correct: "alt",
        category: "HTML"
    },
    {
        question: "6.Which  HTML tag is used to create a table row?",
        options: ["<td>", "<th>", "<tr>", "<table>"],
        correct: "<tr>",
        category: "HTML"
    },
    {
        question: "7.Which tag is used to create a link break?",
        options: ["<break>", "<br>", "<lb>", "<hr>"],
        correct: "<br>",
        category: "HTML"
    },
    {
        question: "8.Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: "<a>",
        category: "HTML"
    },
    {
        question: "9.Which tag is used to create a paragraph?",
        options: ["<h1>", "<p>", "<pre>", "<br>"],
        correct: "<p>",
        category: "HTML"
    },
    {
        question: "10.Which tag is used to create a link break?",
        options: ["<hr>", "<break>", "<br>", "<lb>"],
        correct: "<br>",
        category: "HTML"
    },
    // CSS
     {
        question: "1.What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correct: "Cascading Style Sheets",
        category: "CSS"
    },
    {
        question: "2.Which HTML tag is used to apply CSS ?",
        options: ["<css>", "<script>", "<style>", "<linkcss>"],
        correct: "<style>",
        category: "CSS"
    },
    {
        question: "3.Which property is used to change text color in css?",
        options: ["text-color", "font-color", "color", "text-style"],
        correct: "color",
        category: "CSS"
    },
    {
        question: "4.Which CSS property controls the font size ?",
        options: ["font-style", "text-size", "font-size", "size"],
        correct: "font-size",
        category: "CSS"
    },
    {
        question: "5.Which symbol is used for class selector in css?",
        options: ["#", ".", "*", "@"],
        correct: ".",
        category: "CSS"
    },
    {
        question: "6.Which symbol is used for ID selector in CSS?",
        options: ["#", "%", "*", "@"],
        correct: "#",
        category: "CSS"
    },
    {
        question: "7.Which property is used to change background color?",
        options: ["bg-color", "color", "background-color", "background-style"],
        correct: "background-color",
        category: "CSS"
    },
    {
        question: "8.Which CSS property is used to align text?",
        options: ["align", "text-align", "position", "float"],
        correct: "text-align",
        category: "CSS"
    },
    {
        question: "9.Which CSS property is used to make text bold?",
        options: ["font-style", "text-weight", "font-weight", "bold"],
        correct: "font-weight",
        category: "CSS"
    },
    {
        question: "10.Which CSS property ads space inside an element?",
        options: ["margin", "padding", "border", "spacing"],
        correct: "padding",
        category: "CSS"
    },

    // react.js
     {
        question: "1.React is a ----",
        options: ["database", "javascript library", "programming language", "web server"],
        correct: "javascript library",
        category: "react.js"
    },
    {
        question: "2.Who developed React.js ?",
        options: ["Google", "Microsoft", "Facebook", "Amazon"],
        correct: "Facebook",
        category: "react.js"
    },
    {
        question: "3.What is used to build user interfaces in React?",
        options: ["Components", "Modules", "packages", "classes"],
        correct: "Components",
        category: "react.js"
    },
    {
        question: "4.What is JSX?",
        options: ["javascript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
        correct: "javascript XML",
        category: "react.js"
    },
    {
        question: "5.Which  command is used to create a new React app?",
        options: ["npm start react", "npx create-react-app myApp", "npm react-new", "react-create-app"],
        correct: "npx create-react-app myApp",
        category: "react.js"
    },
    {
        question: "6.React components should start with a --- letter?",
        options: ["Small", "Capital", "Numeric", "Special"],
        correct: "Capital",
        category: "react.js"
    },
    {
        question: "7.Which hook is used to manage state in functional?",
        options: ["useEffect", "useRef", "useState", "useMomo"],
        correct: "useState",
        category: "react.js"
    },
    {
        question: "8.What is the default port number of React development server?",
        options: ["3000", "8000", "4200", "8080"],
        correct: "3000",
        category: "react.js"
    },
    {
        question: "9.Which symbol is used to pass props to a component?",
        options: ["#", "@", "{}", "<>"],
        correct: "{}",
        category: "react.js"
    },
    {
        question: "10.React follows---data flow?",
        options: ["Two-way", "Multi-way", "One-way", "Circular"],
        correct: "One-way",
        category: "react.js"
    },
  // java script
    {
        question: "1.javascript is a ---language",
        options: ["compiled", "Interpreted", "Both A and B", "None"],
        correct: "Interpreted",
        category: "javascript"
    },
    {
        question: "2.Which symbol is used for single-line comments in javascript",
        options: ["<--!-->", "//", "/*/*", "#"],
        correct: "//",
        category: "javascript"
    },
    {
        question: "3.Which keyword is used to declare a varibal in javascript?",
        options: ["var", "let", "const", "All of the above"],
        correct: "All of the above",
        category: "javascript"
    },
    {
        question: "4. Which method is used to display a message in an alert box?",
        options: ["console.log()", "alert()", "prompt()", "print()"],
        correct: "alert()",
        category: "javascript"
       
    },
    {
        question: "5. What is the correct file extension for javascript?",
        options: [".java", ".js", ".javascript", ".html"],
        correct: ".js",
        category: "javascript"
    } , 
     {
        question: "6. Which operator is used to assign a value?",
        options: ["==", "===", "=", "!="],
        correct: "=",
        category: "javascript"
    } , 
     {
        question: "7. What will type of 10 return",
        options: ["number", "string", "boolean", "object"],
        correct: "number",
        category: "javascript"
    } ,
     {
        question: "8.Which funtion is used to write output to the browser console?",
        options: ["document.write()", "alert()", "console.log()", "prompt()"],
        correct: "console.log()",
        category: "javascript"
    } , 
     {
        question: "9. Which value is NOT a javascript data type?",
        options: ["Underfined", "Number", "Float", "Boolean"],
        correct: "Float",
        category: "javascript"
    } , 
     {
        question: "10. Which keyword is used for conditional statements?",
        options: ["if", "switch", "else", "All of the above"],
        correct: "All of the above",
        category: "javascript"
    } 
]
  
let username = "";
let category = "";
let questionCount = 0;
let categoryQuestions = [];
let score = 0;

function getName(event){
    username = document.getElementById('name-input').value;
    document.getElementById('message').innerText = `Hello, ${username} you can start the quiz now`;
    event.preventDefault();
}

function startQuiz(event){
    if(username == "") {
        alert('Enter your name first');
        return false;
    }
    category = event.target.value;

    questionCount = 0;
    score = 0; 

    document.getElementById('quiz-container').innerHTML = "";

    const quiz = `
    <h1>${category}</h1>
    <div id="question-container"></div>
    <div id="option-container"></div>
    <p id="score-display">Score: 0</p>
    <button id="next-btn" onclick="nextQuestion()">Next Question</button>
    `

    document.getElementById('quiz-container').innerHTML = quiz;
    displayQuestion(questionCount);
}

function displayQuestion(questionCount){
    document.getElementById('question-container').innerHTML = "";

    categoryQuestions = questions.filter((question)=>{
        return question.category == category;
    });
   
    document.getElementById('question-container').innerHTML = categoryQuestions[questionCount].question;

    displayOptions(categoryQuestions, questionCount);
}

function displayOptions(categoryQuestions, questionCount){
    document.getElementById('option-container').innerHTML = "";

    categoryQuestions[questionCount].options.map((opt) => {
        const option = document.createElement('button');
        option.innerText = opt;
        option.classList.add("option-btn");

        
        option.addEventListener("click", () => {
            const allOptions = document.querySelectorAll(".option-btn");
            allOptions.forEach(btn => btn.disabled = true);

            if (opt === categoryQuestions[questionCount].correct) {
                option.style.backgroundColor = "green";
                option.style.color = "white";
                score++; 
                // document.getElementById("score-display").innerText = `score: ${score}`;
            } else {
                option.style.backgroundColor = "red";
                option.style.color = "white";

                
                allOptions.forEach(btn => {
                    if (btn.innerText === categoryQuestions[questionCount].correct) {
                        btn.style.backgroundColor = "green";
                        btn.style.color = "white";
                    }
                });
            }
        });

        option.addEventListener("mouseover", () => {
            if (opt === categoryQuestions[questionCount].correct && !option.disabled) {
                // option.style.backgroundColor = "#90ee90"; 
            }
        });

        option.addEventListener("mouseout", () => {
            if (!option.disabled) {
                option.style.backgroundColor = "";
            }
        });

        document.getElementById('option-container').appendChild(option);
    });
}

function nextQuestion() {
    questionCount++;
    if (questionCount < categoryQuestions.length) {
        displayQuestion(questionCount);
    } else {
        showResult();
    }
}


function showResult() {
    document.getElementById('quiz-container').innerHTML = `
        <h2> Finished </h2>
        <p>Well done, <strong>${username}</strong>!</p>
        <p>Your final score is <strong>${score}</strong> out of ${categoryQuestions.length}</p>
        <button onclick="restartQuiz()">Play Again</button>
    `;
}


function restartQuiz() {
  location.reload();  
}
