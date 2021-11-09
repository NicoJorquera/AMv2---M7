const {Pool} = require("pg");
const config ={
    user: "postgres",
    host: "localhost",
    password: "",
    database: "alwaysMusicV2",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillies: 2000,
}

/*let estudiante =[['Pedro Campos', '22.460.938-7', 'Tercero', 'A'], ['Hernan Campos', '22.554.018-7', 'Tercero', 'A'], 
['Andrea Lima', '23.114.365-2', 'Tercero', 'A'], ['Constanza Heracruz', '22.008.472-6', 'Tercero', 'A']];
estudiante.forEach((el)=>{
    const pool = new Pool(config);
    pool.connect().then(client =>{
        return client.query("insert into estudiante (nombre, rut, curso, nivel) values ($1,$2,$3,$4) RETURNING *", el)
        .then(res =>{
            client.release()
            console.log(res.rows[0])
        })
        .catch(err =>{
            client.release()
            console.log(err)
        })
    })
})*/

/*const pool = new Pool(config);
pool.connect((error_conexion, client, release) =>{
    client.query(
        "insert into estudiante (nombre, rut, curso, nivel) values ('Clemente Brown', '23.663.482-5', 'Cuarto', 'B') RETURNING *",
        (error_query, result) =>{
            release();
            console.log(result)
            console.log("Ultimo registro agregado: ", result.rows[0]);
        }
    );
    pool.end();
});*/

/*const pool = new Pool(config);
pool.connect(async (error_conexion, client, release) =>{
    const SQLQuery ={
        rowMode: "array", //puede ser "object"
        text: "select * from estudiante order by id asc",
    };
    const res = await client.query(SQLQuery);
    release();
    console.log(res.rows);
    pool.end();
});*/

/*const pool = new Pool(config);
pool.connect(async (error_conexion, client, release)=>{
    if(error_conexion) return console.error(error_conexion.code); //aqui puede ir sin el code
    try{
        const res = await client.query("select * from estudiante order by id asc");
        console.log(res.rows);
    }catch (error_consulta){
        console.log(`Existe un error ${error_consulta.code} al momento de ejecutar la linea de comando`) //puede ir el code
        console.log(error_consulta)
    }
    release();
    pool.end();
});*/