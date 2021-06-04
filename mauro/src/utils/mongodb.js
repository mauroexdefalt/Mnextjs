import { MongoClient } from 'mongodb';


const uri = process.env.MONGODB_URI
const dbname = process.env.MONGODB_NAME



const cachedb = ''
const cachedclient = ''

if(!uri){
    throw new Error(
        'Variavel uri não existe'
    )
}

if(!dbname){
    throw new Error(
        'Variavel dbname não existe'
    )
}


export  default async function connectToDataBase(){
    if(cachedclient && cachedb){
        return {client : cachedclient  , db : cachedb}
    }

    const client = await MongoClient.connect(uri , {
        useNewUrlParser:true  , 
        useUnifiedTopology:true
    })
    const db = await client.db(dbname)

    cachedclient  = client
    cachedb = db


    return {client  ,db}

}





