let input = document.querySelector('#input');
let categoria = document.querySelector('#categorias');

document.querySelector('button').addEventListener('click', () => {
    let lista = {
        frutas: document.querySelector('#frutas'),
        laticinios: document.querySelector('#laticinios'),
        congelados: document.querySelector('#congelados'),
        doces: document.querySelector('#doces'),

    }
    let elemento = document.createElement('li');
    let deleteButton = document.createElement('button');
    switch (categoria.value) {
        case 'frutas':
            elemento.setAttribute('class', 'itens');
            elemento.textContent = input.value;
            lista.frutas.appendChild(elemento);
            //Delete button
            deleteButton.setAttribute('class', 'delete');
            deleteButton.textContent = 'Deletar';
            elemento.appendChild(deleteButton);

            deleteButton.addEventListener('click', ()=>{
               lista.frutas.removeChild(elemento);
            })
            input.value = ' ';
            break;
        case 'congelados':
            elemento.setAttribute('class', 'itens');
            elemento.textContent = input.value;
            lista.congelados.appendChild(elemento);
            //delete button
            deleteButton.setAttribute('class', 'delete');
            deleteButton.textContent = 'Deletar';
            elemento.appendChild(deleteButton);

            deleteButton.addEventListener('click', ()=>{
               lista.congelados.removeChild(elemento);
            })
            input.value = ' ';
            break;
        case 'laticinios':
            elemento.setAttribute('class', 'itens');
            elemento.textContent = input.value;
            lista.laticinios.appendChild(elemento);
            //delete button
            deleteButton.setAttribute('class', 'delete');
            deleteButton.textContent = 'Deletar';
            elemento.appendChild(deleteButton);

            deleteButton.addEventListener('click', ()=>{
               lista.laticinios.removeChild(elemento);
            })
            input.value = ' ';
            break;
        case 'doces':
            elemento.setAttribute('class', 'itens');
            elemento.textContent = input.value;
            lista.doces.appendChild(elemento);
            //delete button
            deleteButton.setAttribute('class', 'delete');
            deleteButton.textContent = 'Deletar';
            elemento.appendChild(deleteButton);

            deleteButton.addEventListener('click', ()=>{
               lista.doces.removeChild(elemento);
            })
            input.value = ' ';
            break;
    }


})

