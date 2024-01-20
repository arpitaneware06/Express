const express = require('express')
const app = express();
const path =require("path");
const port = 3000;



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("you hello");
});

app.get("/search",(req,res)=>{
    let {q}=req.query;
   
    res.send(`<h1>search results for query: ${q}</h1>`);
});

/*app.get("/orange",(req,res)=>{
    res.send("you contected orange path");
});

app.get("/apple",(req,res)=>{
    res.send("you contected apple path");
});



/*app.use((req, res) => {
    res.send({
        name:"Arpita",
        color:"red",
        text:"sweet",
    });
  });*/
  