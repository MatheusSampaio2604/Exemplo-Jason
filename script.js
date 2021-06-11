//Referencias do DOM - HTML

//const inpRepo = document.getElementsById('inpRepo');
const inpRepo = document.getElementById('inpRepo');
const btnConsultar = document.getElementById('btnConsultar');

const Lista = document.getElementById("Lista");


//Código - Lógica ///

const apiGithub = axios.create({
    baseURL:'https://api.github.com/users/'
});

function consultaDados(){
    let list = '';
    let nomeRepo = inpRepo.value;

    apiGithub.get(nomeRepo + '/repos').then(res=>{
        const data = res.data;
        data.map(repo => {
            list += `<li>${repo.name}</li>`;
            Lista.innerHTML = list;
        });
    });
};

btnConsultar.onclick = ()=>{
    consultaDados();
};













/*
let pessoa = {
    nome: 'Matheus',
    peso: 65,
    altura: 175,
    email: 'matheusdecarvalhosampaio@gmail.com'
};
let {nome} = pessoa;

console.log(nome);


let hardware = ['Mouse','Teclado', 'Monitor'];

let item = hardware[1];

let [ item1, ...oi ] = hardware;

console.log();
*/
