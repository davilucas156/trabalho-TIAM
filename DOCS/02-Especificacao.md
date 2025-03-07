# Especificação do projeto

<span style="color:red">Pré-requisitos: <a href="01-Contexto.md"> Documentação de contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

## Personas

### 1 - Professor:
Nome: Marcos Oliveira
Idade: 38 anos
Profissão: Professor de História
local de trabalho: Escola Municipal josé fina
- **Descrição**:  
Marcos é um professor dedicado e entusiasta da tecnologia. Ele busca novas formas de tornar as aulas mais interativas e engajantes para seus alunos. Além de ensinar conteúdos históricos, ele gosta de incentivar o pensamento crítico e a participação ativa dos estudantes.

No dia a dia, ele precisa preparar materiais, corrigir avaliações e acompanhar o desempenho dos alunos. No entanto, sente que métodos tradicionais de ensino nem sempre motivam os estudantes a aprender.

- **Necessidades**:  
Uma plataforma que permita criar atividades gamificadas de forma fácil e intuitiva, acompanhar o progresso dos alunos, estímulo à participação dos alunos através de rankings, desafios e recompensas e facilidade na correção de atividades, reduzindo o tempo gasto com avaliações manuais.

### 2 - Aluno:
Nome: Lucas Almeida
Idade: 14 anos
Série: 8° ano do Ensino Fundamental
Instituição de ensino: Escola Municipal josé fina
- **Descrição**:  
Lucas é um aluno esforçado, mas tem dificuldades em se concentrar em atividades tradicionais, como leituras extensas e aulas expositivas. Ele se sente desmotivado quando as aulas seguem um formato muito rígido e repetitivo, pois sua atenção tende a se dispersar com facilidade.

Lucas é um admirador de novas tecnologias, e apesar de suas dificuldades, ele tem potencial para se destacar quando é estimulado de maneira dinâmica e prática. 

- **Necessidades**:  
Atividades interativas e visuais que capturem sua atenção, permitindo acompanhar o progresso de forma leve e divertida, por meio de rankings ou níveis, para se sentir motivado e reconhecido.

### 3 - Aluno:
Nome: Ana Beatriz Oliveira
Idade: 15 anos
Série: 1° ano do Ensino Médio
Instituição de ensino: Escola Estadual Nossa Senhora do Carmo
- **Descrição**:
Ana Beatriz é uma aluna curiosa e criativa, mas muitas vezes se sente desinteressada pelas metodologias tradicionais de ensino, como aulas expositivas e exercícios repetitivos. Ela aprende melhor quando pode interagir com o conteúdo de forma prática e visual, especialmente quando há elementos lúdicos ou competitivos envolvidos.

Ana adora jogos, desafios e atividades em grupo, pois se sente mais engajada quando pode colaborar ou competir com os colegas. No entanto, ela tem dificuldade em manter o foco em atividades longas e monótonas, o que afeta seu desempenho em algumas disciplinas.

- **Necessidades**:
Atividades gamificadas que combinem desafios, recompensas visuais (como badges ou medalhas) e a possibilidade de competir de forma saudável com os colegas. Ela também precisa de feedback imediato sobre seu desempenho para se sentir motivada a melhorar.


// atualizar a partir daqui : //

### 2 - Aluno:
Jovem cursando graduação ou pós-graduação, tecnicamente habilidoso e acostumado a usar plataformas digitais para gerenciar atividades acadêmicas.

- **Descrição**:  
  Usa o sistema para acessar horários, material didático, notas, e comunicar-se com professores e colegas, além de acompanhar seu progresso acadêmico.

- **Necessidades**:  
  Precisa de uma plataforma centralizada e intuitiva para gerenciar informações do curso, acompanhar compromissos acadêmicos e facilitar a comunicação com a instituição e colegas.

### 3 - Secretário:
Profissional que lida com matrículas, registros acadêmicos e atendimento a
alunos e professores.

- **Descrição**:  
  Gerencia documentação, organiza arquivos e atende consultas de
alunos.

- **Necessidades**:  
  Precisa de um sistema que automatize matrículas, mantenha
registros atualizados e simplifique a emissão de documentos,
melhorando a eficiência e reduzindo erros.

### 4 - Professor:
 Profissional com formação acadêmica, responsável por ministrar aulas,
avaliar alunos e orientar atividades pedagógicas.

- **Descrição**:  
  Utiliza o sistema para registrar notas, acompanhar o desempenho
dos alunos, acessar materiais didáticos e se comunicar com a
administração e os alunos.
- **Necessidades**:  
 Precisa de uma ferramenta que facilite a gestão de turmas, a
organização de avaliações e a comunicação rápida com estudantes,
otimizando o tempo dedicado ao ensino e à orientação.

## Histórias de usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`   | QUERO/PRECISO ... `FUNCIONALIDADE`                 | PARA ... `MOTIVO/VALOR`                                              |
|------------------------|----------------------------------------------------|----------------------------------------------------------------------|
| eu como professor      | preciso de uma ferramenta que facilite a criação de atividades interativas, que torne o aprendizado mais dinâmico e divertido. Além disso, Marcos precisa de um sistema que permita acompanhar o desempenho dos alunos em tempo real, com relatórios, e que incentive a participação dos estudantes por meio de gamificação, como pontuação e rankings. |
| Aluno | Preciso de uma plataforma que disponibilize atividades interativas que prendam minha atenção. | Para que me motive e ajude a concentrar nas atividades acadêmicas. | 
| Aluno | Ver meu progresso e posição no ranking da turma | Eu possa me motivar a melhorar. |

<!--ATUALIZAR a partir daqui:-->

| `PERSONA`     |                                   |  |
| `PERSONA`              | Gerenciar turmas e disciplinas               | Alocar alunos e professores nas respectivas turmas e disciplinas de maneira eficiente.    |

| `PERSONA`              | Realizar o registro de notas                        | Avaliar e informar os alunos sobre seu desempenho acadêmico.               |

| `PERSONA`              | Realizar o controle de frequência                   | Marcar a presença de alunos de forma simples e rápida.                  |

|`PERSONA`               | Postar o calendário de aulas, provas e eventos acadêmicos | Informar os alunos sobre o cronograma das atividades acadêmicas.   |

| `PERSONA`              | Acessar o portal do professor                       | Emitir relatórios de notas, acompanhar alunos em dependência, e gerenciar disciplinas pelas quais sou responsável. |

| `PERSONA`                  | Acessar os materiais de aula                        | Estudar e revisar conteúdos disponibilizados pelos professores a qualquer momento. |
| `PERSONA`                  | Visualizar o calendário acadêmico                   | Acompanhar as datas de aulas, provas e eventos importantes para me organizar. |
| `PERSONA`                  | Usar o portal do aluno                              | Consultar notas, horários de aula e histórico acadêmico de forma fácil. |
| `PERSONA`     | Receber notificações sobre eventos importantes      | Informar-me sobre provas, aulas, atividades, e outras atualizações relevantes. |
| `PERSONA`     | Acessar o portal principal                          | Obter informações sobre a instituição, bolsas, grades curriculares, professores, e currículo acadêmico. |

## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade dos requisitos, aplique uma técnica de priorização e detalhe como essa técnica foi aplicada.

### Requisitos funcionais

## 2.2.1 Requisitos Funcionais

|ID|Descrição do Requisito                                                                                          | Prioridade |
|-------|----------------------------------------------------------------------------------------------------|------------|
|RF-01|**Cadastro de usuario**: O sistema deve permitir que professores e alunos se cadastrem com login e senha. | Alta |
|RF-02|**Perfis de usuario**: O sistema deve diferenciar perfis de professor e aluno, fornecendo permissões distintas. | Alta |
|RF-03|**Criar quizzes**: O sistema deve permitir que os professores cadastrados criem atividades com diferentes tipos de perguntas. | Alta |
|RF-04|**Realizar os quizzes**: O sistema deve permitir que os alunos cadastrados acessem os quizzes e respondam às questões já disponíveis. | Alta |
|RF-05|**Criação de turmas por disciplina**: O sistema deve permitir aos professores a criação de turmas de acordo com as disciplinas que os alunos possuem. | Alta |
|RF-06|**Ranking e progresso dos alunos**: O sistema deve exibir rankings gerais e por turma, mostrando o progresso dos alunos. | Alta |

// atualizar a partir daqui : // 

|RF-03|**Gerenciamento de Turmas**: O sistema deve permitir que o secretário aloque alunos e professores em turmas e disciplinas. | Média      |
|RF-04|**Registro de Notas**: O sistema deve permitir que professores registrem e alterem as notas dos alunos. | Alta       |
|RF-05|**Controle de Frequência**: O sistema deve permitir que professores marquem a presença dos alunos nas aulas. | Alta       |
|RF-06|**Postagem do Calendário**: O sistema deve permitir que o professor monte um calendário com as datas de aulas, provas e eventos acadêmicos. | Média      |
|RF-07|**Portal do Professor**: O sistema deve permitir que professores acessem e emitam os relatórios de notas e de frequência dos alunos. | Alta       |
|RF-08|**Postagem de Aulas**: O sistema deve permitir que professores enviem as aulas disponibilizadas pelos mesmos. | Alta       |
|RF-09|**Visualização do Calendário**: O sistema deve permitir que alunos vejam o calendário com as datas de aulas, provas e eventos acadêmicos. | Alta       |
|RF-10|**Portal do Aluno**: O sistema deve permitir que alunos vejam as suas notas, horários de aula e histórico escolar. | Alta       |
|RF-11|**Envio de Notificações**: O sistema deve enviar notificações aos usuários sobre eventos, como provas e alterações nas aulas. | Alta       |
|RF-12|**Portal Principal**: O sistema deve permitir que qualquer pessoa veja as informações sobre a instituição, bolsas, grades curriculares, professores e currículo acadêmico. | Baixa      |


### Requisitos não funcionais

|ID    | Descrição                                                                                    |
|------|----------------------------------------------------------------------------------------------|
|RNF-01| Segurança: O sistema deve proteger os dados dos usuários contra acessos não autorizados.|
|RNF-02| Manutenibilidade: O código-fonte deve ser modular e documentado, permitindo que novas funcionalidades sejam adicionadas com facilidade.|

// atualizar a partir daqui : // 

|RNF-02| Rapidez: O sistema deve responder rapidamente às ações dos usuários, sem demoras.|
|RNF-03| Facilidade de Uso: O sistema deve ser fácil de usar, mesmo para quem não tem muita experiência com tecnologia.|
|RNF-04| Disponibilidade: O sistema deve estar disponível para uso quase o tempo todo, com raras interrupções. |
|RNF-05| Acessibilidade: O sistema deve funcionar bem em diferentes dispositivos, como computadores e celulares.|
|RNF-06| Facilidade de Manutenção: O sistema deve ser fácil de atualizar e corrigir problemas, sem complicações.|
|RNF-07| Confiabilidade: O sistema deve garantir que os dados não sejam perdidos ou corrompidos.|
|RNF-08| Compatibilidade: O sistema deve funcionar bem junto com outros programas que a instituição já usa.|
|RNF-09| Escalabilidade: O sistema deve ser capaz de crescer e acomodar mais usuários conforme necessário.|
|RNF-10| Eficiência: O sistema deve usar os recursos de hardware de forma eficaz, sem desperdício de energia ou capacidade.|

## Restrições

O projeto está restrito aos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|001| O projeto deverá ser entregue até o final do semestre |
|002| O escopo do projeto deve ser mantido dentro dos requisitos mínimos viáveis (MVP), priorizando funcionalidades essenciais para a gamificação de quizzes. |
|003| O projeto deve utilizar tecnologias acessíveis e amplamente documentadas, como HTML, CSS, JavaScript (React ou Vue.js), e Node.js. |
|004| O sistema não terá acesso a dados sensíveis dos alunos, como informações financeiras ou médicas, limitando-se a dados acadêmicos básicos (nome, e-mail, desempenho em quizzes). |

## Diagrama de casos de uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos. Ele utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. O diagrama contempla a fronteira do sistema e o detalhamento dos requisitos funcionais, com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “diagrama de casos de uso”.

> **Links úteis**:
> - [Criando casos de uso](https://www.ibm.com/docs/pt-br/engineering-lifecycle-management-suite/design-rhapsody/10.0?topic=cases-creating-use)
> - [Como criar diagrama de caso de uso: tutorial passo a passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
