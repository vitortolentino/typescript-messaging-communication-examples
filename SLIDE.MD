---
presentation:
  width: 1500
  height: 800
  theme: night.css
---

<!-- slide -->

## Mensageria/Stream de dados


<!-- slide -->

#### O que é RabbitMQ?
- **RabbitMQ** é um broker de mensagens open-source que implementa o protocolo Advanced Message Queuing Protocol (AMQP). 
- Ele facilita a comunicação entre diferentes serviços, permitindo a troca de mensagens de forma assíncrona e confiável.

<!-- slide -->
#### RabbitMQ
- Padrões de Mensagens: Ideal para sistemas que exigem flexibilidade no roteamento de mensagens utilizando padrões como RPC (Remote Procedure Call), Pub/Sub (Publicação/Assinatura) e filas de trabalho.

<!-- slide -->

### Exemplo de Uso:
Um sistema de processamento de pedidos onde diferentes componentes (como verificação de pagamento, envio de notificações) precisam ser acionados de forma assíncrona e controlada.

<!-- slide -->

#### O que é Apache Kafka?
**Apache Kafka** é uma plataforma distribuída de streaming de eventos open-source. 
Originalmente desenvolvido pela LinkedIn, é usado para construir pipelines de dados em tempo real e aplicativos de streaming.


<!-- slide -->
### Apache Kafka
Streaming de Dados: Projetado para lidar com grandes volumes de dados em tempo real e construir pipelines de dados escaláveis.

<!-- slide -->
### Exemplo de Uso:
Uma plataforma de análise em tempo real que processa logs de servidores para monitoramento de desempenho e segurança em tempo real.

<!-- slide -->

### O que é AWS SQS/SNS?
- **Amazon SQS (Simple Queue Service)** é um serviço de enfileiramento de mensagens completamente gerenciado que permite o desacoplamento de componentes de um sistema distribuído.
- **Amazon SNS (Simple Notification Service)** é um serviço de notificação push totalmente gerenciado que coordena o envio de mensagens para endpoints ou clientes inscritos.

<!-- slide -->

### AWS SQS/SNS
Desacoplamento de Sistemas: Permite o desacoplamento de componentes de um sistema distribuído, facilitando a escalabilidade e a tolerância a falhas.

<!-- slide -->
### Exemplo de Uso:
Uma arquitetura de microsserviços onde diferentes serviços precisam trocar mensagens de forma assíncrona e garantir a entrega confiável.

<!-- slide -->

#### Diferenças Entre RabbitMQ, Apache Kafka e AWS SQS/SNS

- **RabbitMQ**:
  - Ideal para troca de mensagens complexas e roteamento avançado.
  - Suporte para múltiplos padrões de mensagens (ex: RPC, Pub/Sub).

- **Apache Kafka**:
  - Projetado para alta taxa de transferência e baixa latência em sistemas distribuídos.
  - Ideal para processamento de streams e pipelines de dados.

- **AWS SQS/SNS**:
  - SQS é uma solução de enfileiramento simples, gerenciada e escalável.
  - SNS é ótimo para sistemas que necessitam de uma notificação push para múltiplos serviços.

<!-- slide -->

#### Links Úteis

- [Meu LinkedIn](https://www.linkedin.com)
- [RabbitMQ](https://www.rabbitmq.com/documentation.html)
- [Apache Kafka](https://kafka.apache.org/documentation/)
- [AWS SQS](https://docs.aws.amazon.com/sqs/)
- [AWS SNS](https://docs.aws.amazon.com/sns/)