window.onload = () => {

    let contadorLote = 0;

    function adicionarLote(){
        contadorLote++;

        const novaDiv = document.createElement('div');
        novaDiv.classList.add('lote');


        const novoLabelLote = document.createElement('label');
        novoLabelLote.setAttribute('for', `data-horario-lote${contadorLote}`);
        novoLabelLote.classList.add('label-negrito');

        const novoInputLote = document.createElement('input');
        novoInputLote.setAttribute('type', 'datetime-local');
        novoInputLote.setAttribute('name', `data-horario-lote${contadorLote}`);
        novoInputLote.setAttribute('id', `lote${contadorLote}`);

        novaDiv.appendChild(novoLabelLote);
        novaDiv.appendChild(novoInputLote);


        document.getElementById('container-lote').appendChild(novaDiv);
    }
    const btnLote = document.getElementById('btn-lote');

    btnLote.addEventListener('click', adicionarLote); 



    function adicionarObs() {
        const containerTrue = document.getElementById('container-obs');

        if(containerTrue.classList.contains('ativo')) {
            const novaDiv = document.createElement('div');
            novaDiv.classList.add('observacao');

            const novoLabelObs = document.createElement('label');
            novoLabelObs.setAttribute('for', 'observacao');
            novoLabelObs.setAttribute('style', 'color: red; font-size: 20px');
            novoLabelObs.classList.add('label-negrito');
            novoLabelObs.textContent = 'Observações da Campanha:';

            containerTrue.classList.remove('ativo');

            const novoInputObs = document.createElement('textarea');
            novoInputObs.setAttribute('name', 'observacao');
            novoInputObs.setAttribute('id', 'observacao');

            novaDiv.appendChild(novoLabelObs);
            novaDiv.appendChild(novoInputObs);

            containerTrue.appendChild(novaDiv);
        }
        
    }
    
    const btnObs = document.getElementById('btn-obs');

    btnObs.addEventListener('click', adicionarObs);




    function gerarModelos(){

        const nomeShopping = document.getElementById('nome-shopping').value;
        const nomeCampanha = document.getElementById('nome-campanha').value;
        const modalidadeCampanha = document.getElementById('modalidade-campanha').value;

        const opcaoTecnologiaSelecionada = [];

        document.querySelectorAll('input[name="opcao-tecnologia"]:checked').forEach((checkbox) =>{
            opcaoTecnologiaSelecionada.push(checkbox.value);
        });

        
        function formatarData(dataISO) {
    
            const [ano, mes, dia] = dataISO.split('-');
    
            const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    
            const dataFormatada = `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${ano}`;
    
            return dataFormatada;
        }

        function formatarDataHora(dataHoraISO) {
            const [data, hora] = dataHoraISO.split('T');
    
            const [ano, mes, dia] = data.split('-');
    
            const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    
            const dataFormatada = `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${ano}`;
    
            return `${dataFormatada} às ${hora}h`;
        }

        

        const opcoesTecno = opcaoTecnologiaSelecionada.length ? opcaoTecnologiaSelecionada.join(' / ') : '';

        const dataInicioPromo = document.getElementById('data-inicio-promo').value;
        const dataFimPromo = document.getElementById('data-fim-promo').value;

        const dataInicioPart = document.getElementById('data-inicio-part').value;
        const horaInicioPart = document.getElementById('hora-inicio-part').value;
        const dataFimPart = document.getElementById('data-fim-part').value;
        const horaFimPart = document.getElementById('hora-fim-part').value;

        const mecanica = document.getElementById('mecanica').value;

        const containerObservacao = document.getElementById('container-obs');
        const observacao = document.getElementById('observacao');
        

        function obsRedmine() {                
            let colocarObs = '';
            if(!containerObservacao.classList.contains('ativo')){
                colocarObs = `<p>** ${observacao.value}.</p>`; 
            } else {
                colocarObs = '';
            }

            return colocarObs;
        }

        function obsLog() {
            let colocarObs = '';
            if(!containerObservacao.classList.contains('ativo')){
                colocarObs = `${observacao.value}`;
            } else {
                colocarObs = '';
            }

            return colocarObs;
        }

        const observacaoAtivaRedmine = obsRedmine();
        const observacaoAtivaLog = obsLog();


        const regraQtd = document.getElementById('regra-quantidade').value;
        const regraExtra = document.getElementById('regra-extra').value;

        const limiteQuiosque = document.getElementById('limite-quiosque').value;
        const limiteFast = document.getElementById('limite-fast').value;

        const limiteValor = document.getElementById('limite-valor').value;



        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS REGRAS DE PARTICIPAÇÃO PARA O REDMINE //

        const opcaoRegraSelecionadaRedmine = document.querySelectorAll('input[name="opcao-regra"]:checked');
        let listaOpcoesRegraRedmine = '';
        opcaoRegraSelecionadaRedmine.forEach(function(opcao) {
            listaOpcoesRegraRedmine += `<li style="list-style: none;">** ${opcao.value};</li>`;
        });

        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS REGRAS DE PARTICIPAÇÃO PARA O REDMINE //


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS REGRAS DE PARTICIPAÇÃO PARA A LOGÍSTICA //

        const opcaoRegraSelecionadaLog = document.querySelectorAll('input[name="opcao-regra"]:checked');
        let listaOpcoesRegraLog = '';
        opcaoRegraSelecionadaLog.forEach(function(opcao) {
            listaOpcoesRegraLog += `<li>${opcao.value};</li>`;
        });

        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS REGRAS DE PARTICIPAÇÃO PARA A LOGÍSTICA //


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENTRADAS DE NOTAS PARA O REDMINE //

        const entradaNotasSelecionadaRedmine = document.querySelectorAll('input[name="opcao-tecnologia"]:checked');
        let listaOpcoesTecnoRedmine = '';
        entradaNotasSelecionadaRedmine.forEach(function(opcao) {
            listaOpcoesTecnoRedmine += `<li style="list-style: none;">** ${opcao.value};</li>`;
        });

        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENTRADAS DE NOTAS PARA O REDMINE //


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENTRADAS DE NOTAS PARA A LOGÍSTICA //

        const entradaNotasSelecionadaLog = document.querySelectorAll('input[name="opcao-tecnologia"]:checked');
        let listaOpcoesTecnoLog = '';
        entradaNotasSelecionadaLog.forEach(function(opcao) {
            listaOpcoesTecnoLog += `<li>${opcao.value};</li>`;
        });

        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENTRADAS DE NOTAS PARA A LOGÍSTICA //


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DOS DADOS OBRIGATÓRIOS PARA O REDMINE //

        const dadosObrigatoriosSelecionadoRedmine = document.querySelectorAll('input[name="opcao-dados"]:checked');
        let listaOpcoesDadosRedmine = '';
        dadosObrigatoriosSelecionadoRedmine.forEach(function(opcao) {
            listaOpcoesDadosRedmine += `<li style="list-style: none;">** ${opcao.value};</li>`;
        });

        // CÓDIGO PARA SELECIONAR AS OPÇÕES DOS DADOS OBRIGATÓRIOS PARA O REDMINE //


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DOS DADOS OBRIGATÓRIOS PARA A LOGÍSTICA //

        const dadosObrigatoriosSelecionadoLog = document.querySelectorAll('input[name="opcao-dados"]:checked');
        let listaOpcoesDadosLog = '';
        dadosObrigatoriosSelecionadoLog.forEach(function(opcao) {
            listaOpcoesDadosLog += `<li>${opcao.value};</li>`;
        });


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DOS DADOS OBRIGATÓRIOS PARA A LOGÍSTICA //


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENQUETES PARA O REDMINE //

        const enqueteRedmine = document.querySelectorAll('input[name="opcao-enquete"]:checked');
        let listaOpcoesEnqueteRedmine = '';
        enqueteRedmine.forEach(function(opcao){
            listaOpcoesEnqueteRedmine += `<li style="list-style: none;">** ${opcao.value};</li>`;
        })

        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENQUETES PARA O REDMINE //


        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENQUETES PARA A LOGÍSTICA //

        const enqueteLog = document.querySelectorAll('input[name="opcao-enquete"]:checked');
        let listaOpcoesEnqueteLog = '';
        enqueteLog.forEach(function(opcao){
            listaOpcoesEnqueteLog += `<li>${opcao.value};</li>`;
        })

        // CÓDIGO PARA SELECIONAR AS OPÇÕES DAS ENQUETES PARA A LOGÍSTICA //


        const opcaoTermoSelecionada = [];

        document.querySelectorAll('input[name="opcao-termos"]:checked').forEach((checkbox) =>{
            opcaoTermoSelecionada.push(checkbox.value);
        });

        const opcoesTermo = opcaoTermoSelecionada.length ? opcaoTermoSelecionada + '.' : '';

        const opcaoBebidaSelecionada = [];

        document.querySelectorAll('input[name="opcao-bebidas"]:checked').forEach((checkbox) =>{
            opcaoBebidaSelecionada.push(checkbox.value);
        });

        const opcoesBebida = opcaoBebidaSelecionada.length ? opcaoBebidaSelecionada + '.' : '';


        const certificado = document.getElementById('certificado').value;

        const nomeResponsavel = document.getElementById('nome-responsavel').value;
        const telefoneResponsavel = document.getElementById('telefone-responsavel').value;
        const contatoComercial = document.getElementById('contato-comercial').value;
        const link4C = document.getElementById('link-4c').value;



        const dtaLote = document.querySelectorAll('input[name^="data-horario-lote"]');

        const listaDataLote = [];

        dtaLote.forEach(input => {
            if (input.value.trim()) {
                listaDataLote.push(input.value);
            }
        });


        function loteRedmine() {
            let listaLoteRedmine = '';

            if(listaDataLote.length) {                
                for (let i = 0; i < listaDataLote.length; i++) {
                    listaLoteRedmine += `<li style="list-style: none;">** ${formatarDataHora(listaDataLote[i])};</li>`;
                }
            } else {
                console.log('A lista está vazia!');
            }

            return listaLoteRedmine;
        }
        function loteLog() {
            let listaLoteLog = '';

            if(listaDataLote.length) {                
                for (let i = 0; i < listaDataLote.length; i++) {
                    listaLoteLog += `<li>${formatarDataHora(listaDataLote[i])};</li>`;
                }
            } else {
                console.log('A lista está vazia!');
            }

            return listaLoteLog;
        }

        
        const dataLoteRedmine = loteRedmine();
        const dataLoteLog = loteLog();





        const modelo1 = `
            <h1>Modelo para o Redmine</h1>
            <p>*${modalidadeCampanha}*</p>
            <br></br>
            <p>*${nomeShopping} - ${nomeCampanha}</p>
            <p>_Tipo: ${modalidadeCampanha} - / ${opcoesTecno} /*_</p>
            <br></br>
            <p>* *Período*</p>
            <p>** PERÍODO DA PROMOÇÃO: ${dataInicioPromo} até o dia ${dataFimPromo}.</p>
            <p>** PERÍODO DE PARTICIPAÇÃO: ${horaInicioPart} do dia ${dataInicioPart} até às ${horaFimPart} do dia ${dataFimPart}.</p>
            <br></br>
            <p>* *Regra de participação:*</p>
            <ul style="padding-left: 0; margin-left: 0;">${listaOpcoesRegraRedmine}</ul>
            <br></br>
            <p>* *Mecânica Geral:*</p>
            <p>** ${mecanica}.</p>
            <br></br>
            <p>* *Observações:*</p>
            ${observacaoAtivaRedmine}
            <br></br>
            <p>* *Regras Quantidade - Regra de quantidade não soma saldo com outros valores para gerar bônus:*</p>
            <p>** ${regraQtd}.</p>
            <br></br>
            <p>* *Regras Extra - Soma com o saldo comum da campanha para gerar bônus:*</p>
            <p>** ${regraExtra}.</p>
            <br></br>
            <p>* *Limite de notas _(Exemplo: Apenas duas notas da mesma loja no mesmo dia por pessoa)_:*</p>
            <p>** ${limiteQuiosque} comprovantes de compra emitidos pelas mesmas lojas e/ou quiosques participantes;</p>
            <p>** ${limiteFast} comprovantes de compra emitidos pelos mesmos Fast-foods e/ou restaurantes participantes.</p>
            <br></br>
            <p>* *Limite de Valor de nota _(Exemplo: Acima de 20 mil a nota vai para moderação)_:*</p>
            <p>** Acima de R$${limiteValor},00</p>
            <br></br>
            <p>* *Lotes de impressão de cupons - Data/horário dos agendamentos dos lotes:*</p>
            <ul style="padding-left: 0; margin-left: 0;">${dataLoteRedmine}</ul>
            <br></br>
            <p>* *Meio de entrada de notas:*</p>
            <ul style="padding-left: 0; margin-left: 0;">${listaOpcoesTecnoRedmine}</ul> 
            <br></br>
            <p>* *Dados obrigatórios:*</p>
            <ul style="padding-left: 0; margin-left: 0;">${listaOpcoesDadosRedmine}</ul> 
            <br></br>
            <p>* *Enquete:*</p>
            <ul style="padding-left: 0; margin-left: 0;">${listaOpcoesEnqueteRedmine}</ul>
            <br></br>
            <p>* *Termos LGPD:*</p>
            <p>** ${opcoesTermo}</p>
            <br></br>
            <p>* *Bebidas Alcoólicas:</p>
            <p>** ${opcoesBebida}</p>
            <br></br>
            <p>*Certificado de Autorização SPA/MF Nº ${certificado}*</p>
            <br></br>
            <p>________________________________________________</p>
            <br></br>
            <p>*Contato*</p>
            <br></br>
            <p>* *Responsável: ${nomeResponsavel} - ${telefoneResponsavel}*</p>
            <p>* *Comercial: ${contatoComercial}*</p>
            <p>* *Link 4C: ${link4C}*</p>
        `;

        const modelo2 = `
            <h1>Modelo para a Logística</h1>
            <h2>${nomeShopping} - ${nomeCampanha} (${modalidadeCampanha})</h2>
            <h3><strong>Período:</strong></h3>
            <ul>
                <li><strong>PERÍODO DA PROMOÇÃO: </strong>${dataInicioPromo} à ${dataFimPromo}.</li>
                <li><strong>PERÍODO DE PARTICIPAÇÃO: </strong>${horaInicioPart} do dia ${dataInicioPart} até às ${horaFimPart} do dia ${dataFimPart}.</li>
            </ul>
            <br></br>
            <h3><strong>Regra de participação:</strong></h3>
            <ul>${listaOpcoesRegraLog}</ul>
            <br></br>
            <h3><strong>Mecânica Geral ${modalidadeCampanha}:</strong></h3>
            <ul>
                <li>${mecanica}.</li>
            </ul>
            <br></br>
            <h3><strong>Observações:</strong></h3>
            <ul>
                <li>${observacaoAtivaLog}</li>
            </ul>
            <br></br>
            <h3><strong>Regras de Quantidade:</strong></h3>
            <ul>
                <li>${regraQtd}.</li>
            </ul>
            <br></br>
            <h3><strong>Regras de Extra:</strong></h3>
            <ul>
                <li>${regraExtra}.</li>
            </ul>
            <br></br>
            <h3><strong>Limite de notas:</strong></h3>
            <ul>
                <li><strong>${limiteQuiosque}</strong> comprovantes de compra emitidos pelas mesmas lojas e/ou quiosques participantes;</li>
                <li><strong>${limiteFast}</strong> comprovantes de compra emitidos pelos mesmos Fast-foods e/ou restaurantes participantes.</li>
            </ul>
            <br></br>
            <p><strong>Limite de Valor de Nota:</strong></p>
            <ul>
                <li>Acima de <strong>R$${limiteValor},00</strong></li>
            </ul>
            <br></br>
            <p><strong>Lotes de impressão de cupons - Data/horário dos agendamentos dos lotes:</strong></p>
            <ul>${dataLoteLog}</ul>
            <br></br>
            <p><strong>Meio de Entrada de Notas:</strong></p>
            <ul>${listaOpcoesTecnoLog}</ul> 
            <br></br>
            <p><strong>Dados Obrigatórios:</strong></p>
            <ul>${listaOpcoesDadosLog}</ul> 
            <br></br>
            <p><strong>Enquete:</strong></p>
            <ul>${listaOpcoesEnqueteLog}</ul>
            <br></br>
            <p><strong>Termos LGPD:</strong></p>
            <ul>
                <li>${opcoesTermo}</li>
            </ul>
            <br></br>
            <p><strong>Bebidas Alcoólicas:</strong></p>
            <ul>
                <li>${opcoesBebida}</li>
            </ul>
            <br></br>
            <p><strong>Certificado de Autorização SPA/MF Nº ${certificado}</strong></p>
        `;

        const novaJanela = window.open('', '', 'width=800, height=600');

        novaJanela.document.write(`
            <html>
            <head>
                <title>Modelos Preenchidos</title>
                <style>
                    body{
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    h1{
                        color: #333;
                    }
                    p{
                        font-size: 16px;
                    }
                    .model{
                        border: 1px solid #ccc;
                        padding: 20px;
                        margin-bottom: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                </style>
            </head>
            <body>
                <div class="model">${modelo1}</div>
                <div class="model">${modelo2}</div>
            </body>
            </html>        
        `);

        novaJanela.document.close();

    }

    const btnGerador = document.getElementById('btn-gerador');

    btnGerador.addEventListener('click', gerarModelos);

    

}




    