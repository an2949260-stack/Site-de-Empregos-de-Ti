# DevJobs — Mural de Vagas de TI

## Visão geral
Este projeto é uma página estática de apresentação de vagas de tecnologia, com foco em um layout moderno e limpo para um mural de oportunidades de trabalho em TI.

A interface foi construída em HTML e estilizada com CSS, com uma identidade visual clara, destaque para vagas e um campo de busca para filtrar oportunidades.

## Estrutura do projeto

- `index.html`: contém a estrutura principal da página, incluindo o cabeçalho, a busca, os cards de vagas e o rodapé.
- `css/style.css`: define a aparência visual da página, como cores, tipografia, espaçamento, bordas e responsividade básica.

## Conteúdo da página

### Cabeçalho
A página inicia com um header contendo:

- logo com o nome `DevJobs`
- slogan: `Encontre sua próxima vaga em tecnologia`

### Área de busca
Há uma seção de busca com:

- label: `Buscar vagas`
- campo de entrada do tipo `search`
- placeholder: `Ex: React, Node, Remoto...`

### Lista de vagas
A seção principal apresenta cards de vagas, cada um com:

- tipo de trabalho: `Remoto` ou `Presencial`
- título da vaga
- nome da empresa
- tecnologias envolvidas
- faixa salarial
- localização
- botão de ação: `Ver detalhes`

No momento, a página exibe duas vagas de exemplo:

- Desenvolvedor(a) Frontend React
- Data Scientist

### Rodapé
O rodapé traz a mensagem:

- `© 2026 DevJobs — Projeto acadêmico`

## Estilo visual
O CSS define uma paleta de cores com tons de azul roxo, fundo claro e elementos em branco. O uso de variáveis facilita a manutenção da identidade visual.

Também há:

- fonte principal em `Inter`, com fallback para `system-ui`
- bordas suaves e cantos arredondados
- sombras discretas
- layout centralizado em container de largura limitada

## Como visualizar
Abra o arquivo `index.html` em um navegador para ver a página.

## Observação
Este README foi elaborado com base exclusivamente no conteúdo dos arquivos `index.html` e `css/style.css`.
