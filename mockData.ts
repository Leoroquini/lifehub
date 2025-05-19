// Dados simulados para o aplicativo LifeHub

// Dados do usuário
export const userData = {
  nome: "Carlos",
  email: "carlos@exemplo.com",
  foto: "/images/avatar.png"
};

// Dados de tarefas
export const tarefasData = [
  {
    id: 1,
    titulo: "Reunião com equipe de marketing",
    prioridade: "alta",
    concluida: false,
    horario: "10:00",
    categoria: "trabalho"
  },
  {
    id: 2,
    titulo: "Preparar apresentação para cliente",
    prioridade: "alta",
    concluida: false,
    horario: "14:00",
    categoria: "trabalho"
  },
  {
    id: 3,
    titulo: "Comprar presente de aniversário",
    prioridade: "média",
    concluida: true,
    horario: "16:30",
    categoria: "pessoal"
  },
  {
    id: 4,
    titulo: "Academia",
    prioridade: "média",
    concluida: false,
    horario: "18:00",
    categoria: "saúde"
  },
  {
    id: 5,
    titulo: "Ler capítulo do livro",
    prioridade: "baixa",
    concluida: false,
    horario: "21:00",
    categoria: "pessoal"
  }
];

// Dados de eventos do calendário
export const eventosData = [
  {
    id: 1,
    titulo: "Reunião de planejamento",
    data: "2025-05-19",
    inicio: "09:00",
    fim: "10:30",
    tipo: "trabalho",
    local: "Sala de reuniões 3",
    participantes: ["Ana", "Pedro", "Mariana"]
  },
  {
    id: 2,
    titulo: "Almoço com cliente",
    data: "2025-05-19",
    inicio: "12:30",
    fim: "14:00",
    tipo: "trabalho",
    local: "Restaurante Central",
    participantes: ["João", "Cliente XYZ"]
  },
  {
    id: 3,
    titulo: "Consulta médica",
    data: "2025-05-20",
    inicio: "15:00",
    fim: "16:00",
    tipo: "saúde",
    local: "Clínica São Lucas",
    participantes: []
  },
  {
    id: 4,
    titulo: "Aniversário de Júlia",
    data: "2025-05-21",
    inicio: "19:00",
    fim: "22:00",
    tipo: "pessoal",
    local: "Casa da Júlia",
    participantes: ["Amigos", "Família"]
  },
  {
    id: 5,
    titulo: "Entrega de relatório",
    data: "2025-05-22",
    inicio: "17:00",
    fim: "17:30",
    tipo: "trabalho",
    local: "",
    participantes: []
  }
];

// Dados de lembretes
export const lembretesData = [
  {
    id: 1,
    texto: "Está chovendo hoje, leve guarda-chuva",
    tipo: "clima",
    horario: "07:30",
    lido: false
  },
  {
    id: 2,
    texto: "Reunião em 30 minutos, prepare os documentos",
    tipo: "trabalho",
    horario: "08:30",
    lido: true
  },
  {
    id: 3,
    texto: "Tráfego intenso na sua rota, saia 15 minutos antes",
    tipo: "transporte",
    horario: "08:45",
    lido: false
  },
  {
    id: 4,
    texto: "Aniversário da sua mãe em 3 dias",
    tipo: "pessoal",
    horario: "09:00",
    lido: false
  },
  {
    id: 5,
    texto: "Bateria do celular em 20%, carregue antes de sair",
    tipo: "dispositivo",
    horario: "12:15",
    lido: true
  }
];

// Dados de notas
export const notasData = [
  {
    id: 1,
    titulo: "Ideias para projeto",
    conteudo: "Implementar sistema de notificações inteligentes baseado em contexto e localização",
    tags: ["Ideias", "Trabalho"],
    data: "2025-05-18"
  },
  {
    id: 2,
    titulo: "Lista de compras",
    conteudo: "Pão, leite, ovos, frutas, papel higiênico, detergente",
    tags: ["Pessoal", "Compras"],
    data: "2025-05-19"
  },
  {
    id: 3,
    titulo: "Referência de artigo",
    conteudo: "Silva, J. (2024). Inteligência Artificial no cotidiano. Revista Tech, 45(2), 78-92.",
    tags: ["Referência", "Estudo"],
    data: "2025-05-17"
  },
  {
    id: 4,
    titulo: "Feedback da reunião",
    conteudo: "Equipe mostrou interesse no novo projeto. Pontos a melhorar: cronograma mais detalhado e orçamento revisado.",
    tags: ["Trabalho", "Ação"],
    data: "2025-05-19"
  },
  {
    id: 5,
    titulo: "Citação inspiradora",
    conteudo: "A persistência é o caminho do êxito. - Charles Chaplin",
    tags: ["Pessoal", "Inspiração"],
    data: "2025-05-16"
  }
];

// Dados de clima
export const climaData = {
  atual: {
    temperatura: 23,
    condicao: "parcialmente nublado",
    sensacao: 24,
    umidade: 65,
    vento: 12,
    icone: "partly-cloudy"
  },
  mensagem: "Dia ótimo para atividades ao ar livre pela manhã. Possibilidade de chuva à tarde.",
  previsao: [
    {
      dia: "Segunda",
      data: "19/05",
      maxima: 25,
      minima: 18,
      condicao: "parcialmente nublado",
      probabilidadeChuva: 30,
      icone: "partly-cloudy"
    },
    {
      dia: "Terça",
      data: "20/05",
      maxima: 27,
      minima: 19,
      condicao: "ensolarado",
      probabilidadeChuva: 10,
      icone: "sunny"
    },
    {
      dia: "Quarta",
      data: "21/05",
      maxima: 26,
      minima: 20,
      condicao: "chuvoso",
      probabilidadeChuva: 80,
      icone: "rainy"
    },
    {
      dia: "Quinta",
      data: "22/05",
      maxima: 22,
      minima: 17,
      condicao: "chuvoso",
      probabilidadeChuva: 90,
      icone: "rainy"
    },
    {
      dia: "Sexta",
      data: "23/05",
      maxima: 24,
      minima: 18,
      condicao: "parcialmente nublado",
      probabilidadeChuva: 20,
      icone: "partly-cloudy"
    }
  ]
};

// Dados de resumo diário
export const resumoDiarioData = {
  data: "19 de maio de 2025",
  conquistas: [
    "Concluiu 3 de 5 tarefas programadas",
    "Participou de 2 reuniões importantes",
    "Finalizou a apresentação para o cliente"
  ],
  pendencias: [
    "Academia (remarcada para amanhã)",
    "Leitura do livro (30 minutos restantes)"
  ],
  sugestoes: [
    "Prepare-se para a reunião de amanhã às 9h",
    "Reserve 1h para finalizar o relatório pendente",
    "Considere sair mais cedo devido à previsão de chuva"
  ],
  analiseIA: "Seu dia foi produtivo, com foco em tarefas de trabalho. Para amanhã, recomendo priorizar atividades físicas e de lazer para equilibrar sua rotina."
};

// Simulação de resposta da IA para o plano do dia
export const planoIAData = {
  mensagem: "Bom dia, Carlos! Analisei sua agenda e preparei um plano otimizado para hoje:",
  plano: [
    {
      horario: "08:00 - 09:00",
      atividade: "Revisar emails e preparar para reunião",
      contexto: "Você tem 12 emails não lidos e uma reunião às 9h"
    },
    {
      horario: "09:00 - 10:30",
      atividade: "Reunião de planejamento (Sala 3)",
      contexto: "Leve os relatórios de vendas do último trimestre"
    },
    {
      horario: "10:30 - 12:00",
      atividade: "Trabalhar na apresentação para o cliente",
      contexto: "Prioridade alta, prazo para hoje"
    },
    {
      horario: "12:30 - 14:00",
      atividade: "Almoço com cliente (Restaurante Central)",
      contexto: "Confirme reserva 30min antes"
    },
    {
      horario: "14:30 - 16:30",
      atividade: "Finalizar apresentação e enviar para revisão",
      contexto: "Compartilhe com a equipe até 16:30"
    },
    {
      horario: "17:00 - 18:00",
      atividade: "Comprar presente de aniversário",
      contexto: "Shopping está com promoções hoje"
    },
    {
      horario: "18:30 - 19:30",
      atividade: "Academia",
      contexto: "Aula de musculação às 18:45"
    },
    {
      horario: "21:00 - 21:30",
      atividade: "Leitura do livro",
      contexto: "30 minutos para manter o hábito diário"
    }
  ],
  dicas: [
    "Leve guarda-chuva, previsão de chuva à tarde",
    "Tráfego intenso previsto às 17h, considere rota alternativa",
    "Beba mais água hoje, previsão de temperatura alta"
  ]
};
