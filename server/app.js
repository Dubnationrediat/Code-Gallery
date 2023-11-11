import express from 'express'
import cors from 'cors'
import connectionInfo from './schema/database.config.js'
import tableR from './Routes/tableCreationR.js'
import registerR from './Routes/registerR.js'
import uploaderR from './Routes/uploaderR.js'
import datas from './Routes/getAllDataR.js'
import imageToFront from './Routes/showPicsR.js'
import imageRoute from './Routes/imageSenderR.js'
import deleteR from './Routes/deleteR.js'

let app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin :'http://localhost:3000',
    credentials:true
}))
app.use(express.static('./Resources'))

// * main routes
app.use('/admin',tableR)
app.use('/user',registerR)
app.use('/user',uploaderR)
app.use('/user',datas)
app.use('/user',imageToFront)
app.use('/user',imageRoute)
app.use('/user',imageToFront)
app.use('/user',deleteR)

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


