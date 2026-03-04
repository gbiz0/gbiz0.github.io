---
title: "Ogros são como cebolas: possuem camadas (e a arquitetura limpa também)"
date: "2026-03-04"
tags: ["clean architecture", "software architecture"]
headerImage: "/resources/ogro.jpg"
---

Nos últimos dias tenho me aprofundado nos estudos sobre Clean Architecture, um padrão de arquitetura de software criado por Robert C. Martin (aka Uncle Bob). Esse padrão define formas de estruturar o código da nossa aplicação e, o mais interessante é que ele não se limita a uma linguagem específica, ou seja, pode ser aplicado em qualquer tecnologia.

Para entender melhor a arquitetura limpa, é essencial ter dois conceitos bem claros:

### Inversão de Dependência
Relacionado à letra D do SOLID, traz a ideia de que os módulos da aplicação devem depender de abstrações e não de implementações. Ou seja, classes não devem ser acopladas diretamente a outras classes, mas sim trabalhar sobre interfaces ou classes abstratas.

### Desacoplamento
Garante que as camadas internas (regras de negócio) não dependam das camadas externas (frameworks, bancos, UI etc.). Isso traz autonomia ao código. Exemplo: se o RabbitMQ mudar algum detalhe técnico, sua aplicação não quebra — basta trocar a ferramenta sem grandes impactos na regra de negócio.

Foi aí que entrou uma analogia interessante que ouvi na live da Fernanda Kipper: as camadas da aplicação funcionam como as camadas de uma cebola. As partes mais internas não devem conhecer diretamente as externas.

Em uma aplicação real, as camadas seriam (de dentro para fora):
**Entities → Use Cases → Interface Adapters → External Interfaces**

Vamos aplicar isso para um sistema de delivery:

➡️ **Usuário/cliente acessa a camada mais externa (infra)**
Ex: Banco de dados, UI, serviços de mapa, pagamento, notificações

➡️ **Interface Adapters**
Adaptam a infra para interfaces que os casos de uso entendem (Casos de uso não conhecem implementações, apenas contratos).

➡️ **Use Cases**
Definem as regras de negócio e orquestram o fluxo entre entidades e infra.
Ex: verificar se o restaurante está aberto, calcular frete, processar pedido

➡️ **Entities**
Objetos centrais do negócio, mais estáveis.
Ex: Pedido (itens, preço, status), Restaurante (CNPJ, cardápio), Cliente (endereço, pagamento)

Portanto, à medida que avançamos das camadas externas para as internas, o software se torna mais abstrato, estável e independente de detalhes técnicos.
