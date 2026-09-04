import mysql from 'mysql2/promise';

let myDB;

export const connectDatabase = async()=> {
    try{
      myDB = await mysql.createConnection({
        host:process.env.DB_HOST || 'localhost',
        user:process.env.DB_USERNAME || 'root',
        password:process.env.DB_PASSWORD || '',
        database:process.env.DB_NAME || ''
      })
      console.log('Database connected successfully');
    }catch(err){
        console.error('Error while connecting database:', err.message)
        process.exit(1)
    }
}

export const getDB = ()=>{
    if(!myDB){
        throw new Error('Database not connected')
    }
    return myDB;
};