# LifeHub - MVP Visual Simulado

Um super app que centraliza tarefas, agenda, lembretes, notas rápidas, previsões do tempo e um resumo diário — tudo com suporte de inteligência artificial simulada.

## Sobre o Projeto

O LifeHub é um protótipo navegável que simula um aplicativo de produtividade com recursos de IA. Este MVP Visual foi desenvolvido com Next.js e Tailwind CSS, focando em uma experiência visual moderna e responsiva.

## Funcionalidades Implementadas

- **Dashboard**: Resumo do dia, clima atual, próximas tarefas e plano diário gerado por IA
- **Tarefas**: Lista de tarefas com prioridades, adição por linguagem natural
- **Calendário**: Visualização por dia e semana, com sugestões de horários por IA
- **Lembretes**: Notificações contextuais com simulação de push e WhatsApp
- **Notas**: Captura rápida de texto e filtro por tags
- **Clima**: Previsão atual e semanal com mensagens contextuais
- **Resumo Diário**: Análise de conquistas, pendências e sugestões geradas por IA

## Tecnologias Utilizadas

- **Frontend**: Next.js (React)
- **Estilização**: Tailwind CSS
- **Dados**: Simulados estaticamente (mockData.ts)

## Como Executar Localmente

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
4. Acesse `http://localhost:3000` no navegador

## Como Publicar

### Opção 1: Netlify

1. Crie uma conta no [Netlify](https://www.netlify.com/)
2. Clique em "New site from Git"
3. Conecte ao repositório do GitHub (caso tenha feito upload)
4. Configure as opções de build:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Clique em "Deploy site"

Alternativamente, você pode fazer upload direto do arquivo zip:
1. Execute `npm run build` localmente
2. No Netlify, vá para "Sites" e arraste a pasta `.next` para a área de upload
3. Configure o domínio conforme necessário

### Opção 2: Vercel

1. Crie uma conta no [Vercel](https://vercel.com/)
2. Clique em "New Project"
3. Importe do GitHub (caso tenha feito upload) ou faça upload do projeto
4. A Vercel detectará automaticamente que é um projeto Next.js
5. Clique em "Deploy"

## Estrutura do Projeto

- `/src/app/`: Páginas do aplicativo (Dashboard, Tarefas, etc.)
- `/src/components/`: Componentes reutilizáveis
- `/src/data/`: Dados simulados para o MVP

## Próximos Passos (Implementação Real)

Para transformar este MVP em um produto completo, seria necessário:

1. Implementar backend real com autenticação de usuários
2. Conectar a APIs reais de clima e calendário
3. Implementar integrações reais de IA para geração de conteúdo
4. Adicionar banco de dados para persistência de tarefas e notas
5. Implementar notificações reais via push, email ou WhatsApp

---

Desenvolvido como MVP Visual Simulado para demonstração de conceito.
