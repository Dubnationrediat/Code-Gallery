import express from 'express'
import cors from 'cors'
import connectionInfo from './schema/database.config.js'
import tableR from './Routes/tableCreationR.js'
import registerR from './Routes/registerR.js'
import uploaderR from './Routes/uploaderR.js'

let app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use('/',express.static('./Resources'))


// * main routes
app.use('/admin',tableR)
app.use('/user',registerR)
app.use('/user',uploaderR)

function connectionCreator() {
    try {
        connectionInfo.connect((err)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log('connection with database created successfully');
                app.listen(4800,()=>{
                    console.log("server is listening to port 4800")
                })
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

connectionCreator()


