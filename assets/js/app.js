const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Agregue un punto a la izquierda de name
const $n = document.querySelector('.name');
//Elimine el # para que encuentre la clase, agregue un punto
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
//Agregue el async y los parametros
async function displayUser(usersEndpoint,username,$n,$b,$l) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response);
  data = response.json();//Agreue esta linea
  //Cambie apostrofes por ``
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`; 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser(usersEndpoint,'stolinski',$n,$b,$l).catch(handleError);//Agregue los parametros