const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const answerSchema = new mongoose.Schema({
    value: { type: String, required: true },
    isTrue: { type: Boolean, required: true }
}, { _id: false });

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answers: { type: [answerSchema], required: true }
});

const questions = [
    {
        "question": "What does HTML stand for?",
        "answers": [
            { "value": "Hyper Text Markup Language", "isTrue": true },
            { "value": "Home Tool Markup Language", "isTrue": false },
            { "value": "Hyperlinks and Text Markup Language", "isTrue": false },
            { "value": "Hyperlinking Textual Markup Language", "isTrue": false },
            { "value": "Hybrid Text Managing Language", "isTrue": false }
        ]
    },
    {
        "question": "Which company developed the React.js library?",
        "answers": [
            { "value": "Facebook", "isTrue": true },
            { "value": "Google", "isTrue": false },
            { "value": "Microsoft", "isTrue": false },
            { "value": "Amazon", "isTrue": false },
            { "value": "Apple", "isTrue": false }
        ]
    },
    {
        "question": "What does CPU stand for?",
        "answers": [
            { "value": "Central Processing Unit", "isTrue": true },
            { "value": "Central Print Unit", "isTrue": false },
            { "value": "Computer Processing Unit", "isTrue": false },
            { "value": "Control Program Unit", "isTrue": false },
            { "value": "Compute Power Unit", "isTrue": false }
        ]
    },
    {
        "question": "Which tag is used to define a JavaScript function in HTML?",
        "answers": [
            { "value": "<script>", "isTrue": true },
            { "value": "<js>", "isTrue": false },
            { "value": "<javascript>", "isTrue": false },
            { "value": "<function>", "isTrue": false },
            { "value": "<code>", "isTrue": false }
        ]
    },
    {
        "question": "Which of the following is a JavaScript framework?",
        "answers": [
            { "value": "Vue.js", "isTrue": true },
            { "value": "Laravel", "isTrue": false },
            { "value": "Django", "isTrue": false },
            { "value": "Flask", "isTrue": false },
            { "value": "Spring", "isTrue": false }
        ]
    },
    {
        "question": "What is the capital of Australia?",
        "answers": [
            { "value": "Canberra", "isTrue": true },
            { "value": "Sydney", "isTrue": false },
            { "value": "Melbourne", "isTrue": false },
            { "value": "Brisbane", "isTrue": false },
            { "value": "Perth", "isTrue": false }
        ]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": [
            { "value": "Mars", "isTrue": true },
            { "value": "Venus", "isTrue": false },
            { "value": "Jupiter", "isTrue": false },
            { "value": "Saturn", "isTrue": false },
            { "value": "Mercury", "isTrue": false }
        ]
    },
    {
        "question": "Which data structure uses LIFO principle?",
        "answers": [
            { "value": "Stack", "isTrue": true },
            { "value": "Queue", "isTrue": false },
            { "value": "Array", "isTrue": false },
            { "value": "Linked List", "isTrue": false },
            { "value": "Tree", "isTrue": false }
        ]
    },
    {
        "question": "Which HTTP method is used to update a resource?",
        "answers": [
            { "value": "PUT", "isTrue": true },
            { "value": "GET", "isTrue": false },
            { "value": "POST", "isTrue": false },
            { "value": "DELETE", "isTrue": false },
            { "value": "OPTIONS", "isTrue": false }
        ]
    },
    {
        "question": "Which organ in the human body is responsible for filtering blood?",
        "answers": [
            { "value": "Kidneys", "isTrue": true },
            { "value": "Heart", "isTrue": false },
            { "value": "Lungs", "isTrue": false },
            { "value": "Liver", "isTrue": false },
            { "value": "Pancreas", "isTrue": false }
        ]
    },
    {
        "question": "Which language is used for styling web pages?",
        "answers": [
            { "value": "CSS", "isTrue": true },
            { "value": "HTML", "isTrue": false },
            { "value": "JavaScript", "isTrue": false },
            { "value": "Python", "isTrue": false },
            { "value": "PHP", "isTrue": false }
        ]
    },
    {
        "question": "Which one is a NoSQL database?",
        "answers": [
            { "value": "MongoDB", "isTrue": true },
            { "value": "MySQL", "isTrue": false },
            { "value": "PostgreSQL", "isTrue": false },
            { "value": "Oracle", "isTrue": false },
            { "value": "SQLite", "isTrue": false }
        ]
    },
    {
        "question": "Which of the following is used to manage project versions?",
        "answers": [
            { "value": "Git", "isTrue": true },
            { "value": "NPM", "isTrue": false },
            { "value": "Docker", "isTrue": false },
            { "value": "Webpack", "isTrue": false },
            { "value": "Yarn", "isTrue": false }
        ]
    },
    {
        "question": "In JavaScript, which keyword is used to declare a constant?",
        "answers": [
            { "value": "const", "isTrue": true },
            { "value": "var", "isTrue": false },
            { "value": "let", "isTrue": false },
            { "value": "static", "isTrue": false },
            { "value": "define", "isTrue": false }
        ]
    },
    {
        "question": "Which protocol is used to transfer web pages?",
        "answers": [
            { "value": "HTTP", "isTrue": true },
            { "value": "FTP", "isTrue": false },
            { "value": "SMTP", "isTrue": false },
            { "value": "SSH", "isTrue": false },
            { "value": "TCP", "isTrue": false }
        ]
    },
    {
        "question": "Which country has the largest population?",
        "answers": [
            { "value": "India", "isTrue": true },
            { "value": "China", "isTrue": false },
            { "value": "USA", "isTrue": false },
            { "value": "Indonesia", "isTrue": false },
            { "value": "Brazil", "isTrue": false }
        ]
    },
    {
        "question": "What is the boiling point of water at sea level?",
        "answers": [
            { "value": "100°C", "isTrue": true },
            { "value": "90°C", "isTrue": false },
            { "value": "80°C", "isTrue": false },
            { "value": "120°C", "isTrue": false },
            { "value": "212°C", "isTrue": false }
        ]
    },
    {
        "question": "Which programming language is used for iOS app development?",
        "answers": [
            { "value": "Swift", "isTrue": true },
            { "value": "Kotlin", "isTrue": false },
            { "value": "Java", "isTrue": false },
            { "value": "React", "isTrue": false },
            { "value": "C#", "isTrue": false }
        ]
    },
    {
        "question": "What is the main function of the OSI model's transport layer?",
        "answers": [
            { "value": "End-to-end communication", "isTrue": true },
            { "value": "Routing packets", "isTrue": false },
            { "value": "Framing data", "isTrue": false },
            { "value": "Encoding media", "isTrue": false },
            { "value": "Encryption", "isTrue": false }
        ]
    },
    {
        "question": "Which keyword is used to create a class in JavaScript?",
        "answers": [
            { "value": "class", "isTrue": true },
            { "value": "struct", "isTrue": false },
            { "value": "object", "isTrue": false },
            { "value": "define", "isTrue": false },
            { "value": "type", "isTrue": false }
        ]
    },
    {
        "question": "Which HTML element is used for inserting a line break?",
        "answers": [
            { "value": "<br>", "isTrue": true },
            { "value": "<hr>", "isTrue": false },
            { "value": "<p>", "isTrue": false },
            { "value": "<div>", "isTrue": false },
            { "value": "<span>", "isTrue": false }
        ]
    },
    {
        "question": "What does the acronym API stand for?",
        "answers": [
            { "value": "Application Programming Interface", "isTrue": true },
            { "value": "Application Protocol Interface", "isTrue": false },
            { "value": "Advanced Programming Interface", "isTrue": false },
            { "value": "Applied Programming Interface", "isTrue": false },
            { "value": "Automated Process Integration", "isTrue": false }
        ]
    },
    {
        "question": "Which tag is used to define an unordered list in HTML?",
        "answers": [
            { "value": "<ul>", "isTrue": true },
            { "value": "<ol>", "isTrue": false },
            { "value": "<li>", "isTrue": false },
            { "value": "<dl>", "isTrue": false },
            { "value": "<list>", "isTrue": false }
        ]
    },
    {
        "question": "Which of the following is a frontend JavaScript framework?",
        "answers": [
            { "value": "React", "isTrue": true },
            { "value": "Node.js", "isTrue": false },
            { "value": "Django", "isTrue": false },
            { "value": "Flask", "isTrue": false },
            { "value": "Laravel", "isTrue": false }
        ]
    },
    {
        "question": "What is the capital of Australia?",
        "answers": [
            { "value": "Canberra", "isTrue": true },
            { "value": "Sydney", "isTrue": false },
            { "value": "Melbourne", "isTrue": false },
            { "value": "Brisbane", "isTrue": false },
            { "value": "Perth", "isTrue": false }
        ]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": [
            { "value": "Mars", "isTrue": true },
            { "value": "Jupiter", "isTrue": false },
            { "value": "Saturn", "isTrue": false },
            { "value": "Venus", "isTrue": false },
            { "value": "Mercury", "isTrue": false }
        ]
    },
    {
        "question": "Which of these is a relational database?",
        "answers": [
            { "value": "MySQL", "isTrue": true },
            { "value": "MongoDB", "isTrue": false },
            { "value": "Redis", "isTrue": false },
            { "value": "Cassandra", "isTrue": false },
            { "value": "Neo4j", "isTrue": false }
        ]
    },
    {
        "question": "Which function is used to print output in Python?",
        "answers": [
            { "value": "print()", "isTrue": true },
            { "value": "echo()", "isTrue": false },
            { "value": "console.log()", "isTrue": false },
            { "value": "log()", "isTrue": false },
            { "value": "display()", "isTrue": false }
        ]
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "answers": [
            { "value": "Carbon dioxide", "isTrue": true },
            { "value": "Oxygen", "isTrue": false },
            { "value": "Nitrogen", "isTrue": false },
            { "value": "Hydrogen", "isTrue": false },
            { "value": "Helium", "isTrue": false }
        ]
    },
    {
        "question": "Which CSS property controls the text size?",
        "answers": [
            { "value": "font-size", "isTrue": true },
            { "value": "text-style", "isTrue": false },
            { "value": "font-weight", "isTrue": false },
            { "value": "text-size", "isTrue": false },
            { "value": "font-style", "isTrue": false }
        ]
    },
    {
        "question": "Which keyword is used to create a constant in JavaScript?",
        "answers": [
            { "value": "const", "isTrue": true },
            { "value": "let", "isTrue": false },
            { "value": "var", "isTrue": false },
            { "value": "constant", "isTrue": false },
            { "value": "define", "isTrue": false }
        ]
    },
    {
        "question": "Which device is used to input data into a computer?",
        "answers": [
            { "value": "Keyboard", "isTrue": true },
            { "value": "Monitor", "isTrue": false },
            { "value": "Speaker", "isTrue": false },
            { "value": "Printer", "isTrue": false },
            { "value": "Projector", "isTrue": false }
        ]
    },
    {
        "question": "Which of the following is not a JavaScript data type?",
        "answers": [
            { "value": "float", "isTrue": true },
            { "value": "string", "isTrue": false },
            { "value": "number", "isTrue": false },
            { "value": "boolean", "isTrue": false },
            { "value": "undefined", "isTrue": false }
        ]
    },
    {
        "question": "Which HTTP method is used to update data?",
        "answers": [
            { "value": "PUT", "isTrue": true },
            { "value": "GET", "isTrue": false },
            { "value": "DELETE", "isTrue": false },
            { "value": "FETCH", "isTrue": false },
            { "value": "SEND", "isTrue": false }
        ]
    },
    {
        "question": "Who invented the World Wide Web?",
        "answers": [
            { "value": "Tim Berners-Lee", "isTrue": true },
            { "value": "Bill Gates", "isTrue": false },
            { "value": "Steve Jobs", "isTrue": false },
            { "value": "Mark Zuckerberg", "isTrue": false },
            { "value": "Alan Turing", "isTrue": false }
        ]
    },
    {
        "question": "Which protocol is used to send emails?",
        "answers": [
            { "value": "SMTP", "isTrue": true },
            { "value": "HTTP", "isTrue": false },
            { "value": "FTP", "isTrue": false },
            { "value": "SNMP", "isTrue": false },
            { "value": "SSH", "isTrue": false }
        ]
    },
    {
        "question": "What is the output of: typeof null in JavaScript?",
        "answers": [
            { "value": "\"object\"", "isTrue": true },
            { "value": "\"null\"", "isTrue": false },
            { "value": "\"undefined\"", "isTrue": false },
            { "value": "\"boolean\"", "isTrue": false },
            { "value": "\"number\"", "isTrue": false }
        ]
    },
    {
        "question": "Which Indian city is known as the 'Pink City'?",
        "answers": [
            { "value": "Jaipur", "isTrue": true },
            { "value": "Mumbai", "isTrue": false },
            { "value": "Chennai", "isTrue": false },
            { "value": "Kolkata", "isTrue": false },
            { "value": "Delhi", "isTrue": false }
        ]
    },
    {
        "question": "What is the main function of RAM in a computer?",
        "answers": [
            { "value": "Temporary storage", "isTrue": true },
            { "value": "Permanent storage", "isTrue": false },
            { "value": "Display output", "isTrue": false },
            { "value": "Print documents", "isTrue": false },
            { "value": "Process graphics", "isTrue": false }
        ]
    },
    {
        "question": "Which company developed the Java programming language?",
        "answers": [
            { "value": "Sun Microsystems", "isTrue": true },
            { "value": "Oracle", "isTrue": false },
            { "value": "Microsoft", "isTrue": false },
            { "value": "Apple", "isTrue": false },
            { "value": "IBM", "isTrue": false }
        ]
    },
    {
        "question": "Which HTML tag is used to define an unordered list?",
        "answers": [
            { "value": "<ul>", "isTrue": true },
            { "value": "<ol>", "isTrue": false },
            { "value": "<li>", "isTrue": false },
            { "value": "<list>", "isTrue": false },
            { "value": "<u>", "isTrue": false }
        ]
    },
    {
        "question": "Which year did India gain independence?",
        "answers": [
            { "value": "1947", "isTrue": true },
            { "value": "1950", "isTrue": false },
            { "value": "1935", "isTrue": false },
            { "value": "1965", "isTrue": false },
            { "value": "1942", "isTrue": false }
        ]
    },
    {
        "question": "Which JavaScript function is used to parse a JSON string?",
        "answers": [
            { "value": "JSON.parse()", "isTrue": true },
            { "value": "JSON.stringify()", "isTrue": false },
            { "value": "JSON.read()", "isTrue": false },
            { "value": "JSON.decode()", "isTrue": false },
            { "value": "parse.JSON()", "isTrue": false }
        ]
    },
    {
        "question": "Which gas do plants absorb during photosynthesis?",
        "answers": [
            { "value": "Carbon dioxide", "isTrue": true },
            { "value": "Oxygen", "isTrue": false },
            { "value": "Nitrogen", "isTrue": false },
            { "value": "Hydrogen", "isTrue": false },
            { "value": "Methane", "isTrue": false }
        ]
    },
    {
        "question": "Which symbol is used for comments in JavaScript?",
        "answers": [
            { "value": "//", "isTrue": true },
            { "value": "/* */", "isTrue": false },
            { "value": "<!-- -->", "isTrue": false },
            { "value": "#", "isTrue": false },
            { "value": "--", "isTrue": false }
        ]
    },
    {
        "question": "Which is the largest planet in our solar system?",
        "answers": [
            { "value": "Jupiter", "isTrue": true },
            { "value": "Earth", "isTrue": false },
            { "value": "Saturn", "isTrue": false },
            { "value": "Mars", "isTrue": false },
            { "value": "Venus", "isTrue": false }
        ]
    },
    {
        "question": "What does CSS stand for?",
        "answers": [
            { "value": "Cascading Style Sheets", "isTrue": true },
            { "value": "Computer Style Sheets", "isTrue": false },
            { "value": "Creative Style Sheets", "isTrue": false },
            { "value": "Colorful Style Sheets", "isTrue": false },
            { "value": "Correct Style Sheets", "isTrue": false }
        ]
    },
    {
        "question": "Which tag is used to insert an image in HTML?",
        "answers": [
            { "value": "<img>", "isTrue": true },
            { "value": "<image>", "isTrue": false },
            { "value": "<pic>", "isTrue": false },
            { "value": "<src>", "isTrue": false },
            { "value": "<media>", "isTrue": false }
        ]
    },
    {
        "question": "Which function is used to delay execution in JavaScript?",
        "answers": [
            { "value": "setTimeout()", "isTrue": true },
            { "value": "wait()", "isTrue": false },
            { "value": "sleep()", "isTrue": false },
            { "value": "pause()", "isTrue": false },
            { "value": "timeout()", "isTrue": false }
        ]
    },
    {
        "question": "Which Indian state has the longest coastline?",
        "answers": [
            { "value": "Gujarat", "isTrue": true },
            { "value": "Maharashtra", "isTrue": false },
            { "value": "Tamil Nadu", "isTrue": false },
            { "value": "Andhra Pradesh", "isTrue": false },
            { "value": "Kerala", "isTrue": false }
        ]
    },
    {
        "question": "What is the capital of Australia?",
        "answers": [
            { "value": "Canberra", "isTrue": true },
            { "value": "Sydney", "isTrue": false },
            { "value": "Melbourne", "isTrue": false },
            { "value": "Brisbane", "isTrue": false },
            { "value": "Perth", "isTrue": false }
        ]
    },
    {
        "question": "Which operator is used for strict equality in JavaScript?",
        "answers": [
            { "value": "===", "isTrue": true },
            { "value": "==", "isTrue": false },
            { "value": "=", "isTrue": false },
            { "value": "!=", "isTrue": false },
            { "value": "<=>", "isTrue": false }
        ]
    },
    {
        "question": "What does HTTP stand for?",
        "answers": [
            { "value": "HyperText Transfer Protocol", "isTrue": true },
            { "value": "HighText Transfer Protocol", "isTrue": false },
            { "value": "HyperText Transmission Protocol", "isTrue": false },
            { "value": "HyperText Transfer Procedure", "isTrue": false },
            { "value": "Hyper Transfer Text Protocol", "isTrue": false }
        ]
    },
    {
        "question": "Which Indian river is the longest?",
        "answers": [
            { "value": "Ganga", "isTrue": true },
            { "value": "Yamuna", "isTrue": false },
            { "value": "Godavari", "isTrue": false },
            { "value": "Brahmaputra", "isTrue": false },
            { "value": "Krishna", "isTrue": false }
        ]
    },
    {
        "question": "What is the correct extension of a JavaScript file?",
        "answers": [
            { "value": ".js", "isTrue": true },
            { "value": ".java", "isTrue": false },
            { "value": ".jvs", "isTrue": false },
            { "value": ".jsx", "isTrue": false },
            { "value": ".ts", "isTrue": false }
        ]
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "answers": [
            { "value": "Japan", "isTrue": true },
            { "value": "China", "isTrue": false },
            { "value": "India", "isTrue": false },
            { "value": "Thailand", "isTrue": false },
            { "value": "South Korea", "isTrue": false }
        ]
    },
    {
        "question": "Which React hook is used to handle state?",
        "answers": [
            { "value": "useState", "isTrue": true },
            { "value": "useEffect", "isTrue": false },
            { "value": "useContext", "isTrue": false },
            { "value": "useReducer", "isTrue": false },
            { "value": "useMemo", "isTrue": false }
        ]
    },
    {
        "question": "Who is known as the Missile Man of India?",
        "answers": [
            { "value": "Dr. A.P.J. Abdul Kalam", "isTrue": true },
            { "value": "Dr. Vikram Sarabhai", "isTrue": false },
            { "value": "Dr. Homi Bhabha", "isTrue": false },
            { "value": "Dr. C.V. Raman", "isTrue": false },
            { "value": "Dr. Kalam Azad", "isTrue": false }
        ]
    },
    {
        "question": "Which of the following is a NoSQL database?",
        "answers": [
            { "value": "MongoDB", "isTrue": true },
            { "value": "MySQL", "isTrue": false },
            { "value": "PostgreSQL", "isTrue": false },
            { "value": "Oracle", "isTrue": false },
            { "value": "SQLite", "isTrue": false }
        ]
    },
    {
        "question": "Which event is fired when a user submits a form in HTML?",
        "answers": [
            { "value": "submit", "isTrue": true },
            { "value": "click", "isTrue": false },
            { "value": "change", "isTrue": false },
            { "value": "focus", "isTrue": false },
            { "value": "keydown", "isTrue": false }
        ]
    }
]

const questionModel = new mongoose.model('Questions', questionSchema);

async function addQuestions() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        await questionModel.insertMany(questions);
        console.log('Questions inserted successfully!');
        await mongoose.disconnect();
    } catch (error) {
        console.log("error while adding qns");
    }
}

addQuestions();