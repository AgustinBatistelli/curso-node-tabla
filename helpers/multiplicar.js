const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar, hasta) => {
    try{
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `\n${base}`.brightRed.italic.bold + " x ".brightWhite + `${i}`.brightCyan.italic.bold  + " = ".brightWhite + `${base * i}`.brightYellow.italic.bold;
        }
        
        if (listar){
            console.log("==========================".rainbow);
            console.log(`     Tabla del:${base}        `.bgWhite.black);
            console.log("==========================".rainbow);
            console.log(consola, "\n");
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return`tabla-${base}.txt`.rainbow;
    }catch(error){
        throw error;
    }  
};

module.exports = {
  crearArchivo,
};
