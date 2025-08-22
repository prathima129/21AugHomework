import express, { application } from "express"
const app=express();
app.use(express.json());
const PORT=6000;
app.get("/",(req,res)=>{
    res.send("This is Login page");
});
app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
});