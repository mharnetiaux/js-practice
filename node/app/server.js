import express from 'express';
let app = express();


app.get('/home', function(req,res,next){
    "use strict";
    ///res.status(200);
    res.set({'Content-Type': 'text/html'});
    console.log(res.statusCode);
    console.log(res.get('contentType'));
    next();
});

app.use('/home', express.static('app/home'));

let server = app.listen(3000, function(){
    "use strict";
    console.log("listening on port:3000");
});

