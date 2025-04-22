require("dotenv").config();
const express =require("express");
const app=express()
const PORT=process.env.PORT || 500
app.use(express.json())
let users = [
    {id:1, name:"rcb" ,unit:200},
    {id:2, name:"csk" ,unit:200},
    {id:3, name:"kkr" ,unit:200},
    {id:4, name:"srh" ,unit:200}
]

app.get("/users" , (req,res,next)=>{
  try {
    res.json(users)
  } catch (err) {
    next(err);
  }
})
app.post("/users/", (req,res,next) =>{
  try{
  const {name}=req.body
  if (!name) {
    return res.status(400).json({error: "name requried"})
  }
  const newUser= {id:users.length+1, name}
  users.push(newUser)
  res.status(200).json(newUser)
} catch (err){
  next(err)
}
}
)
app.put("/users/:id", (req,res,next)=>{
  try {
    const id= parseInt(req.params.id)
    const name=req.body
    if (!name) {
      return res.status(400).json({error: "name req"})
    }
    const user=users.find(u=>u.id===id);
    if (!user) {
      return res.status(404).json({error: "not found"})
  }
  user.name=name
  res.json(user)
}
catch (err) {
  next(err)
}})
app.delete("users/:id", (req,res,next)=>{
  try{
    const id=parseInt(req.params.id)
    const user=users.some(u=>u.id===id)
    if (!user) {
      res.status(400).json({error:"not found"})
    }
    users=users.filter(u=>u.id!==id)
    res.send(`user name ${id}deleted`)
  } catch (err) {
    next(err)
  }
})
app.use((err,req,res,next)=>{
  console.error("unssdfd:",err.message);
  res.status(500).json({error: "server prblm"})

})
app.listen(PORT, ()=>{
  console.log(`server running at https://localhost${PORT}`)
})
