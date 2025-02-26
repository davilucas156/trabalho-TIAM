# Especificação do projeto

<span style="color:red">Pré-requisitos: <a href="01-Contexto.md"> Documentação de contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

## Personas

### 1 - Coordenador Acadêmico:
Profissional responsável por supervisionar atividades pedagógicas, organizar o calendário acadêmico e acompanhar o desempenho de alunos e professores.

- **Descrição**:  
  Atua entre direção, professores e alunos, gerenciando a alocação de professores, monitorando o progresso acadêmico e participando de reuniões pedagógicas para melhorar o ensino.

- **Necessidades**:  
  Precisa de uma ferramenta que centralize informações acadêmicas, agilize tarefas administrativas e forneça relatórios pedagógicos detalhados para facilitar a tomada de decisões e melhorar a eficiência na gestão acadêmica.

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
| Secretaria             | Gerar relatórios de notas, frequência, histórico escolar e relação de professores | Gerenciar todas as informações referente à instituição, suprindo dúvidas de alunos e professores, além de auxiliar nas consultas e tomadas de decisão. |
| Secretaria             | Gerenciar usuários                                  | Registrar e atualizar informações de alunos, professores e usuários do sistema. |
| Secretaria             | Gerenciar turmas e disciplinas                      | Alocar alunos e professores nas respectivas turmas e disciplinas de maneira eficiente. |
| Professor              | Realizar o registro de notas                        | Avaliar e informar os alunos sobre seu desempenho acadêmico.          |
| Professor              | Realizar o controle de frequência                   | Marcar a presença de alunos de forma simples e rápida.                |
| Professor              | Postar o calendário de aulas, provas e eventos acadêmicos | Informar os alunos sobre o cronograma das atividades acadêmicas.      |
| Professor              | Acessar o portal do professor                       | Emitir relatórios de notas, acompanhar alunos em dependência, e gerenciar disciplinas pelas quais sou responsável. |
| Aluno                  | Acessar os materiais de aula                        | Estudar e revisar conteúdos disponibilizados pelos professores a qualquer momento. |
| Aluno                  | Visualizar o calendário acadêmico                   | Acompanhar as datas de aulas, provas e eventos importantes para me organizar. |
| Aluno                  | Usar o portal do aluno                              | Consultar notas, horários de aula e histórico acadêmico de forma fácil. |
| Usuário do sistema     | Receber notificações sobre eventos importantes      | Informar-me sobre provas, aulas, atividades, e outras atualizações relevantes. |
| Usuário do sistema     | Acessar o portal principal                          | Obter informações sobre a instituição, bolsas, grades curriculares, professores, e currículo acadêmico. |

## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade dos requisitos, aplique uma técnica de priorização e detalhe como essa técnica foi aplicada.

### Requisitos funcionais

## 2.2.1 Requisitos Funcionais

|ID|Descrição do Requisito                                                                                          | Prioridade |
|-------|----------------------------------------------------------------------------------------------------|------------|
|RF-001|**Portal do Secretário**: O sistema deve permitir que o secretário gere os relatórios de notas, frequência, histórico escolar e relação de professores. | Média      |
|RF-02|**Gerenciamento de Usuários**: O sistema deve permitir que o secretário cadastre e gerencie usuários, como alunos e professores. | Alta       |
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
|002| O custo total do projeto não deve exceder o orçamento definido       |

## Diagrama de casos de uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos. Ele utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. O diagrama contempla a fronteira do sistema e o detalhamento dos requisitos funcionais, com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “diagrama de casos de uso”.

> **Links úteis**:
> - [Criando casos de uso](https://www.ibm.com/docs/pt-br/engineering-lifecycle-management-suite/design-rhapsody/10.0?topic=cases-creating-use)
> - [Como criar diagrama de caso de uso: tutorial passo a passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
