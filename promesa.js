const myPromise = new Promise((resolve, reject) => { 
    if(true)
        resolve('¡Promesa resuelta amigo!');
    else
        reject('Promesa fallida')
});

function exito(funciona){
  console.log(funciona);
}

function falla(error){
  console.log(error);
}

myPromise
.then((funciona) => exito(funciona))
.catch((error) => falla(error));


///function exito(funciona){
  console.log(funciona);
}

function falla(error){
  console.log(error);
}

const promesa = new Promise((parametrox, parametroy) => { 
    if(true)
        parametrox('¡Promesa resuelta amigo!');
    else
        parametroy('Promesa fallida')
});

promesa
.then((funciona) => exito(funciona))
.catch((error) => falla(error));

(parametros) => nombredefuncion(parametros)


///function exito(funciona){
  console.log(funciona);
}

function falla(error){
  console.log(error);
}

const promesa = new Promise((parametrox, parametroy) => { 
    false ? parametrox('¡Promesa resuelta amigo!') : parametroy('Promesa fallida')  });
        
promesa
.then((funciona) => exito(funciona))
.catch((error) => falla(error));
