import server from './server'
import dotenv  from "dotenv";
dotenv.config()
import './config'

const PORT = 8080;


server.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
    console.log(` Document in http://localhost:${PORT}/swagger`)
})