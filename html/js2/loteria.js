window.onload = () => {

    let contadorLoteria = 0;
    let contadorSpa = 0;

    function adicionarSorteio(){
        contadorLoteria++;

        const novaDiv = document.createElement('div');
        novaDiv.classList.add('sorteio');


        const novoLabelLoteria = document.createElement('label');
        novoLabelLoteria.setAttribute('for', `data-sorteio${contadorLoteria}`);
        novoLabelLoteria.classList.add('label-negrito');

        const novoInputLoteria = document.createElement('input');
        novoInputLoteria.setAttribute('type', 'date');
        novoInputLoteria.setAttribute('name', `data-sorteio${contadorLoteria}`);
        novoInputLoteria.setAttribute('id', `sorteio${contadorLoteria}`);

        novaDiv.appendChild(novoLabelLoteria);
        novaDiv.appendChild(novoInputLoteria);


        document.getElementById('container-data-sorteio').appendChild(novaDiv);
    }
    const btnLoteria = document.getElementById('btn-loteria');

    btnLoteria.addEventListener('click', adicionarSorteio);  

    function adicionarSpa(){
        contadorSpa++;

        const novaDiv = document.createElement('div');
        novaDiv.classList.add('sorteio');


        const novoLabelSpa = document.createElement('label');
        novoLabelSpa.setAttribute('for', `data-hora-relatorio${contadorSpa}`);
        novoLabelSpa.classList.add('label-negrito');

        const novoInputSpa = document.createElement('input');
        novoInputSpa.setAttribute('type', 'datetime-local');
        novoInputSpa.setAttribute('name', `data-hora-relatorio${contadorSpa}`);
        novoInputSpa.setAttribute('id', `sorteio${contadorSpa}`);

        novaDiv.appendChild(novoLabelSpa);
        novaDiv.appendChild(novoInputSpa);


        document.getElementById('container-spa').appendChild(novaDiv);
    }
    const btnSpa = document.getElementById('btn-spa');

    btnSpa.addEventListener('click', adicionarSpa); 

    
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
        const modalidadeCampanha = 'LOTERIA';

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
        const dataInicioPromoFormatada = formatarData(dataInicioPromo);
    
        const dataFimPromo = document.getElementById('data-fim-promo').value;
        const dataFimPromoFormatada = formatarData(dataFimPromo);
    
        const dataHoraInicioPart = document.getElementById('data-hora-inicio-part').value;
        const dataHoraInicioPartFormatada = formatarDataHora(dataHoraInicioPart);
    
        const dataHoraFimPart = document.getElementById('data-hora-fim-part').value;
        const dataHoraFimPartFormatada = formatarDataHora(dataHoraFimPart);

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

        const qtdSerie = document.getElementById('qtd-serie').value;
        const qtdNumero = document.getElementById('qtd-numero').value;



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



            const dtaSorteio = document.querySelectorAll('input[name^="data-sorteio"]');
            const dtaSpa = document.querySelectorAll('input[name^="data-hora-relatorio"]');

            const listaDataSorteio = [];
            const listaDataSpa = [];

            dtaSorteio.forEach(input => {
                if (input.value.trim()) {
                    listaDataSorteio.push(input.value);
                }
            })

            dtaSpa.forEach(input => {
                if (input.value.trim()) {
                    listaDataSpa.push(input.value);
                }
            });  

            function loteriaSorteioRedmine() {
                let listaDataLoteriaRedmine = '';

                if(listaDataSorteio.length) {                
                    for (let i = 0; i < listaDataSorteio.length; i++) {
                        listaDataLoteriaRedmine += `<li style="list-style: none;">** ${formatarData(listaDataSorteio[i])};</li>`;
                    }
                } else {
                    console.log('A lista está vazia!');
                }

                return listaDataLoteriaRedmine;
            }
            function loteriaSorteioLog() {
                let listaDataLoteriaLog = '';

                if(listaDataSorteio.length) {                
                    for (let i = 0; i < listaDataSorteio.length; i++) {
                        listaDataLoteriaLog += `<li>${formatarData(listaDataSorteio[i])};</li>`;
                    }
                } else {
                    console.log('A lista está vazia!');
                }

                return listaDataLoteriaLog;
            }


            function relatorioSpaRedmine() {
                let listaDataSpaRedmine = '';

                if(listaDataSpa.length) {
                    for (let i = 0; i < listaDataSpa.length; i++) {
                        listaDataSpaRedmine += `<li style="list-style: none;">** ${formatarDataHora(listaDataSpa[i])};</li>`;
                    }
                } else {
                    console.log('A lista está vazia!');
                }

                return listaDataSpaRedmine;
            }

            function relatorioSpaLog() {
                let listaDataSpaLog = '';

                if(listaDataSpa.length) {
                    for (let i = 0; i < listaDataSpa.length; i++) {
                        listaDataSpaLog += `<li>${formatarDataHora(listaDataSpa[i])};</li>`;
                    }
                } else {
                    console.log('A lista está vazia!');
                }

                return listaDataSpaLog;
            }

            const dataSorteioRedmine = loteriaSorteioRedmine();
            const dataSorteioLog = loteriaSorteioLog();

            const dataRelatorioRedmine = relatorioSpaRedmine();
            const dataRelatorioLog = relatorioSpaLog();


        const modelo1 = `
            <h1>Modelo para o Redmine</h1>
            <p>*${modalidadeCampanha}*</p>
            <br></br>
            <p>*${nomeShopping} - ${nomeCampanha}</p>
            <p>_Tipo: ${modalidadeCampanha} - / ${opcoesTecno} /*_</p>
            <br></br>
            <p>* *Período*</p>
            <p>** PERÍODO DA PROMOÇÃO: ${dataInicioPromoFormatada} até o dia ${dataFimPromoFormatada}.</p>
            <p>** PERÍODO DE PARTICIPAÇÃO: do dia ${dataHoraInicioPartFormatada} até o dia ${dataHoraFimPartFormatada}.</p>
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
            <p>* *Quantidade de séries e números da sorte:*</p>
            <p>** ${qtdSerie} séries;</p>
            <p>** ${qtdNumero} números.</p>
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
            <p>* *Data(s) do(s) sorteio(s):*</p>
            <ul style="padding-left: 0; margin-left: 0;">${dataSorteioRedmine}</ul>
            <br></br>
            <p>* *Envio do relatório SPA:*</p>
            <ul style="padding-left: 0; margin-left: 0;">${dataRelatorioRedmine}</ul>
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
                <li><strong>PERÍODO DA PROMOÇÃO: </strong>${dataInicioPromoFormatada} à ${dataFimPromoFormatada}.</li>
                <li><strong>PERÍODO DE PARTICIPAÇÃO: </strong>do dia ${dataHoraFimPartFormatada} até o dia ${dataHoraFimPartFormatada}.</li>
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
            <p><strong>Quantidade de Séries e Números da Sorte:</strong></p>
            <ul>
                <li>${qtdSerie} séries;</li>
                <li>${qtdNumero} números da sorte.</li>
            </ul>
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
            <p><strong>Data(s) do(s) sorteio(s):</strong></p>
            <ul>${dataSorteioLog}</ul>
            <br></br>
            <p><strong>Envio do relatório SPA:</strong></p>
            <ul>${dataRelatorioLog}</ul>
            <br></br>
            <p><strong>Bebidas Alcoólicas:</strong></p>
            <ul>
                <li>${opcoesBebida}</li>
            </ul>
            <br></br>
            <p><strong>Certificado de Autorização SPA/MF Nº ${certificado}</strong></p>
        `;

        const novaJanela = window.open('', '', 'width=1400, height=800');

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

    