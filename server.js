import app from "./src/app.js";
const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`servidor funcionando na porta http://localhost:${port}`);
});