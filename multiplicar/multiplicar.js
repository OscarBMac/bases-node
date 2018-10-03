//erquire
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`== tabla de ${base} ==`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i*base}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base  '${ base }' no es un número!`);
            recturn;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            // let x = i * 2;
            data += (`${i} * ${base} = ${i*base}\n`);
        }

        fs.writeFile(`tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}