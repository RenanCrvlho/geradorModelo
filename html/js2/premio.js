window.onload = () => {
    
        let contadorPremio = 0;
        let contadorRegra = 0;

        function adicionarPremio(){
            contadorPremio++;

            const novaDiv = document.createElement('div');
            novaDiv.classList.add('estoque-brinde');

    
            const novoLabelPremio = document.createElement('label');
            novoLabelPremio.setAttribute('for', `nome-premio${contadorPremio}`);
            novoLabelPremio.classList.add('label-negrito');
            novoLabelPremio.classList.add('label-premio');
            novoLabelPremio.textContent = 'Prêmio:';
    
            const novoInputPremio = document.createElement('input');
            novoInputPremio.setAttribute('type', 'text');
            novoInputPremio.setAttribute('name', `nome-premio${contadorPremio}`);
            novoInputPremio.setAttribute('id', `premio${contadorPremio}`);
            novoInputPremio.classList.add('nome-premio');

            const novoLabelQtd = document.createElement('label');
            novoLabelQtd.setAttribute('for', 'qtd-premio');
            novoLabelQtd.classList.add('label-negrito');
            novoLabelQtd.classList.add('label-premio');
            novoLabelQtd.textContent = 'Qtd do Prêmio:';

            const novoInputQtd = document.createElement('input');
            novoInputQtd.setAttribute('type', 'number');
            novoInputQtd.setAttribute('name', 'qtd-premio');
            novoInputQtd.classList.add('qtd-premio');


            const novoBotaoRemover = document.createElement('button');
            novoBotaoRemover.setAttribute('type', 'button');
            novoBotaoRemover.setAttribute('id', `btn-remover${contadorPremio}`);
            
            const iconButton = document.createElement('i');

            iconButton.classList.add("fas", "fa-trash");

            novoBotaoRemover.appendChild(iconButton);

            novoBotaoRemover.addEventListener('click', function() {
                novaDiv.remove();  // Remove a div correspondente
            });

            novaDiv.appendChild(novoLabelPremio);
            novaDiv.appendChild(novoInputPremio);

            novaDiv.appendChild(novoLabelQtd);
            novaDiv.appendChild(novoInputQtd);

            novaDiv.appendChild(novoBotaoRemover);

            document.getElementById('container-estoque').appendChild(novaDiv);
        }
        const btnPremio = document.getElementById('btn-premio');

        btnPremio.addEventListener('click', adicionarPremio);   
        

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


        function adicionarRegra() {
            contadorRegra++;
    
            const novaDiv = document.createElement('div');
            novaDiv.classList.add('regra');
    
            const novoLabelRegra = document.createElement('label');
            novoLabelRegra.setAttribute('for', `regra-quantidade${contadorRegra}`);
            novoLabelRegra.classList.add('label-negrito');
            novoLabelRegra.textContent = `Regra de Quantidade:`;
    
            const novoInputRegra = document.createElement('textarea');
            novoInputRegra.setAttribute('name', `regra-quantidade${contadorRegra}`);
            novoInputRegra.setAttribute('id', `regra-quantidade${contadorRegra}`);
    
            novaDiv.appendChild(novoLabelRegra);
            novaDiv.appendChild(novoInputRegra);
    
            document.getElementById('container-regra').appendChild(novaDiv);
        }
    
        const btnRegra = document.getElementById('btn-regra');
    
        btnRegra.addEventListener('click', adicionarRegra);
    
        function gerarModelos() { 

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
        
            const nomeShopping = document.getElementById('nome-shopping').value;
            const nomeCampanha = document.getElementById('nome-campanha').value;
            const modalidadeCampanha = 'PRÊMIO';
        
            const opcaoTecnologiaSelecionada = [];
        
            document.querySelectorAll('input[name="opcao-tecnologia"]:checked').forEach((checkbox) =>{
                opcaoTecnologiaSelecionada.push(checkbox.value);
            });
        
            
            
        
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
        
            const qtdEstoque = document.getElementById('qtd-estoque').value;
            // const nomePremio = document.getElementById('nome-premio').value;
        
        
        
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
    
            const qtdPremios = document.querySelectorAll('input[name^="qtd-premio"]');
            const premios = document.querySelectorAll('input[name^="nome-premio"]');

            const regrasQuantidade = document.querySelectorAll('textarea[name^="regra-quantidade"]');

            const qtdValoresPremios = [];
            const valoresPremiosInput = [];

            const listaRegraQtd = [];

            qtdPremios.forEach(input => {
                if (input.value.trim()) {
                    qtdValoresPremios.push(input.value);
                }
            })

            premios.forEach(input => {
                if (input.value.trim()) {
                    valoresPremiosInput.push(input.value);
                }
            });  

            regrasQuantidade.forEach(input => {
                if (input.value.trim()) {
                    listaRegraQtd.push(input.value);
                }
            });

            function premioRedmine() {
                let listaQtdPremioRedmine = '';

                if(valoresPremiosInput.length === qtdValoresPremios.length) {                
                    for (let i = 0; i < valoresPremiosInput.length; i++) {
                        listaQtdPremioRedmine += `<li style="list-style: none;">** ${qtdValoresPremios[i]} ${valoresPremiosInput[i]}</li>`;
                    }
                } else {
                    console.log('As listas têm tamanhos diferentes.')
                }

                return listaQtdPremioRedmine;
            }

            function premioLog() {
                let listaQtdPremioLog = '';

                if(valoresPremiosInput.length === qtdValoresPremios.length) {                
                    for (let i = 0; i < valoresPremiosInput.length; i++) {
                        listaQtdPremioLog += `<li>${qtdValoresPremios[i]} ${valoresPremiosInput[i]}</li>`
                    }
                } else {
                    console.log('As listas têm tamanhos diferentes.')
                }

                return listaQtdPremioLog;
            }

            function regraQuantidadeRedmine() {
                let listaRegraQuantidadeRedmine = '';

                if(listaRegraQtd.length) {
                    for (let i = 0; i < listaRegraQtd.length; i++) {
                        listaRegraQuantidadeRedmine += `<li style="list-style: none;">** ${listaRegraQtd[i]}</li>`;
                    }
                } else {
                    console.log('A lista está vazia!');
                }

                return listaRegraQuantidadeRedmine;
            }

            function regraQuantidadeLog() {
                let listaRegraQuantidadeLog = '';

                if(listaRegraQtd.length) {
                    for (let i = 0; i < listaRegraQtd.length; i++) {
                        listaRegraQuantidadeLog += `<li>${listaRegraQtd[i]}</li>`;
                    }
                } else {
                    console.log('A lista está vazia!');
                }

                return listaRegraQuantidadeLog;
            }


            const valoresPremiosRedmine = premioRedmine();
            const valoresPremioLog = premioLog();

            const regraQtdRedmine = regraQuantidadeRedmine();
            const regraQtdLog = regraQuantidadeLog();
    
            const modelo1 = `
                <h1>Modelo para o Redmine</h1>
                <p style="margin: 0;">*${modalidadeCampanha}*</p>
                <br></br>
                <p style="margin: 0;">*${nomeShopping} - ${nomeCampanha}</p>
                <p style="margin: 0;">_Tipo: ${modalidadeCampanha} - / ${opcoesTecno} /*_</p>
                <br></br>
                <p style="margin: 0;">* *Período*</p>
                <p style="margin: 0;">** PERÍODO DA PROMOÇÃO: ${dataInicioPromoFormatada} até o dia ${dataFimPromoFormatada}</p>
                <p style="margin: 0;">** PERÍODO DE PARTICIPAÇÃO: do dia ${dataHoraInicioPartFormatada} até o dia ${dataHoraFimPartFormatada}</p>
                <br></br>
                <p style="margin: 0;">* *Regra de participação:*</p>
                <ul style="padding-left: 0; margin: 0;">${listaOpcoesRegraRedmine}</ul>
                <br></br>
                <p style="margin: 0;">* *Mecânica Geral:*</p>
                <p style="margin: 0;">** ${mecanica}</p>
                <br></br>
                <p style="margin: 0;">* *Observações:*</p>
                ${observacaoAtivaRedmine}
                <br></br>
                <p style="margin: 0;">* *Regras Quantidade - Regra de quantidade não soma saldo com outros valores para gerar bônus:*</p>
                <ul style="padding-left: 0; margin: 0;">${regraQtdRedmine}</ul>
                <br></br>
                <p style="margin: 0;">* *Regras Extra - Soma com o saldo comum da campanha para gerar bônus:*</p>
                <p style="margin: 0;">** ${regraExtra}</p>
                <br></br>
                <p style="margin: 0;">* *Limite de notas _(Exemplo: Apenas duas notas da mesma loja no mesmo dia por pessoa)_:*</p>
                <p style="margin: 0;">** ${limiteQuiosque} comprovantes de compra emitidos pelas mesmas lojas e/ou quiosques participantes</p>
                <p style="margin: 0;">** ${limiteFast} comprovantes de compra emitidos pelos mesmos Fast-foods e/ou restaurantes participantes</p>
                <br></br>
                <p style="margin: 0;">* *Limite de Valor de nota _(Exemplo: Acima de 20 mil a nota vai para moderação)_:*</p>
                <p style="margin: 0;">** Acima de R$${limiteValor},00</p>
                <br></br>
                <p style="margin: 0;">* *Estoque:*</p>
                <p style="margin: 0;">** Serão distribuídos ${qtdEstoque} brindes</p>
                <br></br>
                <p style="margin: 0;">* *Prêmio:*</p>
                <ul style="padding-left: 0; margin-left: 0;">${valoresPremiosRedmine}</ul>
                <br></br>
                <p style="margin: 0;">* *Meio de entrada de notas:*</p>
                <ul style="padding-left: 0; margin-left: 0;">${listaOpcoesTecnoRedmine}</ul> 
                <br></br>
                <p style="margin: 0;">* *Dados obrigatórios:*</p>
                <ul style="padding-left: 0; margin-left: 0;">${listaOpcoesDadosRedmine}</ul> 
                <br></br>
                <p style="margin: 0;">* *Enquete:*</p>
                <ul style="padding-left: 0; margin-left: 0;">${listaOpcoesEnqueteRedmine}</ul>
                <br></br>
                <p style="margin: 0;">* *Termos LGPD:*</p>
                <p style="margin: 0;">** ${opcoesTermo}</p>
                <br></br>
                <p style="margin: 0;">* *Bebidas Alcoólicas:*</p>
                <p style="margin: 0;">** ${opcoesBebida}</p>
                <br></br>
                <p style="margin: 0;">*Certificado de Autorização SPA/MF Nº ${certificado}*</p>
                <br></br>
                <p style="margin: 0;">________________________________________________</p>
                <br></br>
                <p style="margin: 0;">*Contato*</p>
                <br></br>
                <p style="margin: 0;">* *Responsável: ${nomeResponsavel} - ${telefoneResponsavel}*</p>
                <p style="margin: 0;">* *Comercial: ${contatoComercial}*</p>
                <p style="margin: 0;">* *Link 4C: ${link4C}*</p>
            `;
        
            const modelo2 = `
                <h1>Modelo para a Logística</h1>
                <h2>${nomeShopping} - ${nomeCampanha} (${modalidadeCampanha})</h2>
                <h3><strong>Período:</strong></h3>
                <ul>
                    <li><strong>PERÍODO DA PROMOÇÃO: </strong>${dataInicioPromoFormatada} até o dia ${dataFimPromoFormatada}</li>
                    <li><strong>PERÍODO DE PARTICIPAÇÃO: </strong>do dia ${dataHoraInicioPartFormatada} até o dia ${dataHoraFimPartFormatada}</li>
                </ul>
                <br></br>
                <h3><strong>Regra de participação:</strong></h3>
                <ul>${listaOpcoesRegraLog}</ul>
                <br></br>
                <h3><strong>Mecânica Geral ${modalidadeCampanha}:</strong></h3>
                <ul>
                    <li>${mecanica}</li>
                </ul>
                <br></br>
                <h3><strong>Observações:</strong></h3>
                <ul>
                    <li>${observacaoAtivaLog}</li>
                </ul>
                <br></br>
                <h3><strong>Regras de Quantidade:</strong></h3>
                <ul>${regraQtdLog}</ul>
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
                <p><strong>Estoque:</strong></p>
                <ul>
                    <li>Serão distribuídos ${qtdEstoque} brindes</li>
                </ul>
                <br></br>
                <p><strong>Prêmio:</strong></p>
                <ul>${valoresPremioLog}</ul>
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