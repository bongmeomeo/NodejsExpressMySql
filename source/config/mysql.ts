import mysql from 'mysql';
import config from './config';

const params = {
    user: config.mysql.user,
    password : config.mysql.password,
    host : config.mysql.host,
    database : config.mysql.database,
};

const Connect = async ()=> new Promise<mysql.Connection>((res, rej)=>{
    const connection = mysql.createConnection(params);

    connection.connect((err)=>{
        if (err){
            rej(err);
            
            
            return;
        }

        res(connection);
    });
});

const Query = async(connection : mysql.Connection , query: string)=>new Promise((res, rej)=>{
    connection.query(query, connection, (err, result)=>{
        if (err){
            rej(err);
            return;
        }
        res(result);
    });
});

export {Connect, Query};