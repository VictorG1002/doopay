# Desafio -> Lista de Tarefas em React

O objetivo deste desafio é criar uma lista de tarefas com armazenamento persistente de dados. A lista de tarefas deve ser estilizada com [Tailwind CSS](https://tailwindcss.com/) e, também, suportar a adição/conclusão de tarefas.

Não existem regras ou limitações na UI/UX da aplicação, ela deve ser pensada para o usuário e conter uma separação visual clara dos componentes. O resultado final deve garantir uma interface: intuitiva, simples e funcional.

## Requisitos Funcionais

1. Adicionar uma nova tarefa e empilhar na lista: a mais recente ao topo;
2. As tarefas marcadas como "concluídas" devem cair para o final da lista e entre elas: a mais antiga ao topo;
3. No cabeçalho da aplicação, deve ser exibida a quantidade de tarefas adicionas, pendentes e concluídas com uma exibição em porcentagem;
   * Para pendentes, porcentagem >= 50% deve ser exibida em vermelho, caso contrário, em verde;
   * Para concluídas, porcentagem >= 50% deve ser exibida em verde, caso contrário, em vermelho.
4. O estado da lista de tarefas deve ser salvo/carregado automaticamente no armazenamento local;
5. Tornar possível migrar do modo claro para o modo escuro e vice-versa.

## Requisitos Não Funcionais

1. Utilizar NextJS e Tailwind;
2. Utilizar corretamente os React Hooks;
3. É **obrigatório** utilizar `useEffect`, `useState`, `useCallback` e `useMemo`;
4. Realizar a separação clara de componentes, organizando-os em pastas dentro de `/src/core`;
5. Utilizar Redux para gerenciar o estado da aplicação, utilizando TypeScript;
6. Modelo de dados e functional components **devem** utilizar TypeScript;
7. Apresentar uma boa interface de usuário.

## Limitações de Desenvolvimento

1. Todos os componentes, hooks, funções, modelos de dados e afins, devem ser criados dentro da pasta `src/core`;
2. Não é permitido adicionar libs de componentes do React ou similares.

## Consultas

* Somente a documentação oficial do [Tailwind CSS](https://tailwindcss.com/) pode ser consultada;
* Nenhuma consulta adicional é permitida durante a execução do desafio.
