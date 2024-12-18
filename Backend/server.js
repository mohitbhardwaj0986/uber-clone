import app from "./app.js"
app.listen(process.env.PORT||3000,()=>{
    console.log(`Server running on port 3000`)  // Log the server's port number in the console
})
