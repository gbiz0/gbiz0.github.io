---
title: "Java🤝AWS"
date: "2026-03-04"
tags: ["java", "aws", "s3", "sqs"]
headerImage: "/resources/java-aws.jpg"
---

Recentemente, desenvolvi uma solução que integra Amazon S3, SQS e Java para automatizar o envio de imagens via WhatsApp, como QR Codes gerados dinamicamente. A aplicação armazena as imagens no S3, que por sua vez dispara um evento de criação de objeto configurado para publicar mensagens em uma fila SQS. A partir daí, um serviço escrito em Java consome essa fila, recupera o objeto armazenado e executa o envio da mensagem através da API do WhatsApp.
Essa arquitetura, baseada em eventos, proporcionou desacoplamento total entre a geração da imagem e o envio da mensagem, o que aumentou a resiliência do sistema, reduziu o acoplamento entre serviços e permitiu um controle mais granular de falhas e reprocessamentos, utilizando recursos como visibility timeout e dead-letter queues. Além disso, o uso de serviços gerenciados da AWS simplificou a escalabilidade e a manutenção da solução, reforçando na prática os benefícios da arquitetura orientada a eventos com mensageria assíncrona.
A experiência foi valiosa para consolidar o uso de boas práticas em integrações distribuídas, especialmente em fluxos sensíveis à disponibilidade e tempo de resposta, como no caso de notificações via WhatsApp.