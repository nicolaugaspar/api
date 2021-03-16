const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())
app.get('/', async(req, res)=>{
try{

const { data }= await axios('https://jsonplaceholder.typicode.com/photos')
return res.json(data)
console.log(data)


}catch(erro){
console.log(erro)

}

})


app.listen(3838, ()=>{
	console.log('servidor criado com sucesso')
})