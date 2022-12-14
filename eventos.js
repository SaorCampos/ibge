fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then((resposta) => resposta.json())
    .then((regiao) => {
        regiao.forEach((cadaRegiao) => {            
            document.getElementById('regiao').innerHTML += `<option value ="${cadaRegiao.id}">${cadaRegiao.nome}</option>`;
        });
        // console.log(regiao);
    });

function buscarEstado(){
    document.getElementById('estado').innerHTML = `<option id="nuloEstado" value="0">--Selecione--</option>`;
    let regiaoSelecionada = regiao.value;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiaoSelecionada}/estados`)
    .then((resposta) => resposta.json())
    .then((estado) => {
        estado.map((cadaUF) => {            
            document.getElementById('estado').innerHTML += `<option value ="${cadaUF.id}">${cadaUF.nome}</option>`;
        });
        // console.log(estado);
    });
}

function buscarCidade(){
    document.getElementById('cidade').innerHTML = `<option id="nuloCidade" value="0">--Selecione--</option>`;
    let cidadeSelecionada = estado.value;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cidadeSelecionada}/municipios`)
    .then((resposta) => resposta.json())
    .then((cidade) => {
        cidade.map((cadaCidade) => {
            document.getElementById('cidade').innerHTML += `<option value="${cadaCidade.id}">${cadaCidade.nome}</option>`;
        });
        // console.log(cidade);
    })
}