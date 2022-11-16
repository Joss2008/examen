const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./src/database');
const config = require('./src/config');

const ControlidiomaRoute = require('./src/routes/controlidioma.routes');



class Server 
{
    constructor()
    {
        this.app = express.Router();
        
        this.router = express.Router();

        this.port = config.PORT;


        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/api', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use('/public', express.static('public'));

    }
    routes(){

    this.app.use(('/controlidioma'),ControlidiomaRoute)
        
    }
    
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        }) 
    }


}


module.exports = Server;