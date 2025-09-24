let listaDeAmigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('INGRESE UN NOMBRE VÁLIDO');
    return;
  }

  if (listaDeAmigos.includes(nombre)) {
    alert('Ese nombre ya fue agregado.');
    return;
  }

  listaDeAmigos.push(nombre);
  mostrarLista();
  input.value = '';
}

function mostrarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';

  for (let amigo of listaDeAmigos) {
    const li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (listaDeAmigos.length === 0) {
    alert('La lista está vacía. Agrega al menos un nombre.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const nombreSorteado = listaDeAmigos[indiceSorteado];

  const li = document.createElement('li');
  li.textContent = `El amigo sorteado es: ${nombreSorteado}`;
  resultado.appendChild(li);
}
