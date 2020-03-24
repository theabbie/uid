var app = require('express')();

app.get("/*", function(req,res) {
res.type("text/html").end();
})

app.listen(process.env.PORT);
