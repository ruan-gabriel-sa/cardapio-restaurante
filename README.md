# Cardápio Digital para Restaurante

Este é um projeto desenvolvido para apresentar um cardápio digital interativo para um restaurante. A aplicação foi criada utilizando Next.js, com o objetivo de oferecer uma interface intuitiva para os usuários navegarem pelas opções do cardápio, filtrarem itens por categoria e realizarem buscas por pratos específicos.

## Funcionalidades

- **Visualização do cardápio**: Exibição dos pratos com informações como nome, descrição, categoria, preço e imagem.
- **Filtragem por categoria**: Botões com ícones que permitem filtrar os pratos por categorias como "Entradas", "Massas", "Carnes", "Sobremesas", "Bebidas" e "Saladas".
- **Campo de busca**: Campo responsivo para buscar pratos pelo nome, descrição ou categoria. Sugestões dinâmicas aparecem ao digitar pelo menos 3 caracteres.
- **Design responsivo**: Interface projetada para dispositivos desktop e mobile.
- **Sistema modular**: Componentes organizados para facilitar a manutenção e expansão do projeto.

## Estrutura de Arquivos

### Principais Componentes

- **page.js**  
  Responsável por estruturar a página principal do cardápio.  
  Importa e utiliza:
  - Categorias: Para filtrar produtos por tipo.
  - CampoDeBusca: Para buscar pratos pelo nome ou descrição.
  - Cards: Para exibir os produtos filtrados.  
  Gerencia estados como produtos filtrados e texto da busca utilizando hooks (`useState`).

- **Categorias/index.jsx**  
  Componente que exibe botões interativos para cada categoria do cardápio.  
  **Propriedades**:
  - `handleFiltrarProduto`: Função para filtrar os produtos pela categoria.
  - `botaoClicado`: Categoria atualmente selecionada.  
  Inclui ícones representativos para cada categoria (e.g., entrada, massas, carnes).

- **CampoDeBusca/index.jsx**  
  Componente que implementa o campo de busca dinâmica.  
  **Propriedades**:
  - `textoBusca`: O texto digitado no campo de busca.
  - `handleBuscarProduto`: Função chamada ao digitar no campo de busca.

- **Cards/index.jsx**  
  Componente que exibe os detalhes de um produto do cardápio.  
  **Propriedades**:
  - `produto`: Objeto que representa um prato, contendo:
    - `nome`: Nome do prato.
    - `categoria`: Categoria do prato.
    - `descricao`: Breve descrição do prato.
    - `preco`: Preço do prato formatado em reais (R$).
    - `imagem`: URL da imagem do prato.

- **servico/index.js**  
  Contém funções utilitárias para manipulação dos produtos.  
  **Funções Disponíveis**:
  - `retornarProdutos`: Retorna todos os produtos.
  - `buscarProduto`: Filtra produtos com base em texto digitado.
  - `filtrarProduto`: Filtra produtos por categoria.

- **data/data_produtos.js**  
  Base de dados com todos os produtos do cardápio, incluindo:
  - Nome, descrição, categoria, preço e imagem para cada produto.  
  **Categorias incluídas**:
  - Massas, Entradas, Carnes, Bebidas, Sobremesas e Saladas.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações modernas e performáticas.
- **CSS Modules**: Para estilização modular e isolada de componentes.
- **Imagens otimizadas**: Gerenciamento responsivo de imagens com o componente `Image` do Next.js.
- **JavaScript ES6**: Para criar um código limpo e moderno.

## Como Rodar o Projeto

1. **Clonar o repositório**:

   git clone (https://github.com/ruan-gabriel-sa/cardapio-restaurante)

2. Instalar as dependências:

    npx create-next-app

3. Iniciar o servidor de desenvolvimento:

    npm run dev

4. Acessar o projeto:

    Abra o navegador e acesse: http://localhost:3000.

## Melhorias Futuras

- **Adicionar sistema de login**: Permitir que administradores e usuários logados gerenciem os pratos diretamente na interface.
- **Sistema de favoritos**: Usuários podem marcar pratos como favoritos para facilitar a navegação e criar uma lista personalizada.
- **Animações**: Tornar a interface mais interativa com transições e animações suaves, como hover nos pratos e animações de carregamento.
- **Integração com backend**: Conectar a um banco de dados para armazenamento dinâmico dos pratos, permitindo a atualização em tempo real dos itens no cardápio.
  
## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
