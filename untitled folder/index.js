import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
// get, put, post, delete
// GET is to get infomation 
// PUT is to change infomation
// POST is to post/add infomation
// DELETE is to delete infomation

function mid(req, res, next){
console.log(req.query);
console.log(req.params);
next();
}




app.get("/products/:id", mid,(req, res)=> {
    res.json(Products.find((product)=>{
        return +req.params.id === product.id
    }))
    // res.send(req.params.id);
    // req.
    // res.json(Products)
})
// app.post()
// app.delete()
// app.put()


app.post("/add", (req, res)=> {
    console.log(req.body.id)
    res.sendStatus(200);
})



app.listen(port, ()=> console.log(`Listening on port: ${port}`));
