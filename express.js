// main application file / entry file
// many files makes one application
// which file to start to execute the program

// express --> typically app.js  file

// load express module
// get return value
const express = require("express");

// express var --> control express module
// thru express module --> create express object
const app = express();

// set template engine = view engine to Pug
app.set("view engine", "pug");

// Pug files go to views folder
app.set("views", "./views"); // this can be muted

// Static File
// express finds file in public directory
app.use(express.static("public"));

//- express using pug tempalte engine
//- ugly code <--> pretty or beautyfyl
//- Google search: pug express code pretty
//- https://stackoverflow.com/questions/5276892/how-can-i-get-express-to-output-nicely-formatted-html
app.locals.pretty = true;

// homepage
// get --> user can use GET or POST
// type URL == get
// to get  --> call get methods
// find who's from homepage --> /
app.get("/", function (req, res) {
    // send method
    // responding Hello home page
    res.send("Hello home page");
});

// Login
app.get("/login", (req, res) => {
    res.send("<h1>Login please</h1>");
});

/* when user comes into a path 
what to execute --> get method 
get method == router 
router --> finds GET  */

app.get("/route", (req, res) => {
    res.send('"Hello Router, <img src="/pb.jpg">');
});

/* 
static ---> once made --> always same HTML 
    - public dicrtorey 
    - put html  */

app.get("/dynamic", (req, res) => {
    let lis = "";

    // repetition changes programmatically

    for (let i = 0; i < 5; i++) {
        lis = lis + "<li>coding</li>";
    }

    // show current time
    const time = Date();

    let output = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
    </html>
    `;

    // html code
    res.send(output);

    // use commented text
    /* 
    ex) var output = `something` */

    // JS multi line --> put \
    /*     <!DOCTYPE html>\
    <html>\
        <head>\
            <meta charset="utf-8" />\
            <title></title>\
        </head>\
        <body>\
            Hello Static!\
            <!-- change content... edit & save -->\
            <!-- static file... edit... then applied immediately -->\
        </body>\
    </html>\ */
});

/* app.get --> execute when node is started 
not-static --> written code must be run again --> so node has to be turned on & off
static --> node application doesn't need to be turned back  

tools to automate this*/

// router to get template engines
app.get("/template", (req, res) => {
    // send data --> send
    // this time --> render template --> take source code & generate web pages
    res.render("temp", { time: Date(), _title: "Pug" }); // check browser page source
    // users in template route --> calls function --> render temp file to web page

    // time parameter flows into temp.pug
    // _title --> get Pug ... --> later access in temp.pug
});

// query string
app.get("/topic/:id", (req, res) => {
    // Semantic URL
    /* 
    /topic?id=2 --> /topic/2
    semantic = 의미
    
    change query string --> to path 

    1. path format in url --> hook to router (/topic)
    catch all mutable data --> use ":"
    /topic --> anything comes behind 
    */
    let topics = ["Javascript is ...", "Node JS is ...", "Express is ..."];

    // create links instead
    let output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Node js</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.params.id]}`;
    // find data from url --> params
    // id matches with "/topic/:id"

    res.send(output);

    /* query string --> query 
    path (semantic url) --> params 
    */

    // -----------------------------------
    // store information
    /* let topics = ["Javascript is ...", "Node JS is ...", "Express is ..."];

    // create links instead
    let output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Node js</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}`;

    res.send(output); */

    /* 
    query string --> pass data --> agreement 
    req --> query method --> id object  */

    // -----------------------------------
    // array syntax
    // res.send(topics[req.query.id]);

    //---------------------------------
    // response is made from you
    // request information comes into req
    // res.send(req.query.id); // id property = query string
    // res.send(req.query.name);

    /* 
    look at documentation
    express calls req & res 
    1st parameter = request object 
    */

    // get multiple query values
    // res.send(req.query.id + "," + req.query.name);
    // use & to separate values
});

// semantic url 2
app.get("/topic/:id/:mode", (req, res) => {
    res.send(req.params.id + "," + req.params.mode);
    // url: /topic/1/edit
    // mode --> edit
});

// use app --> make application
// app.listen method --> give port
app.listen(3000, function () {
    // listen complete --> call cb
    console.log(`Connected port 3000`);
});

/* app listen 3000 --> calls connected function
 */
