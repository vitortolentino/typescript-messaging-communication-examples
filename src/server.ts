import fastify from "fastify";
import {
  connectRabbitMQ,
  sendMessage as sendRabbitMQMessage,
  receiveMessage as receiveRabbitMQMessage,
} from "./rabbitmq";
import {
  connectKafka,
  sendMessage as sendKafkaMessage,
  receiveMessage as receiveKafkaMessage,
} from "./kafka";
import {
  sendMessage as sendSQSMessage,
  receiveMessage as receiveSQSMessage,
} from "./sqs";
import { publishMessage as publishSNSMessage, subscribeQueue } from "./sns";

const app = fastify({ logger: true });

app.get("/send/rabbitmq", async (request, reply) => {
  await sendRabbitMQMessage("main_queue", "Hello RabbitMQ");
  reply.send({ status: "Message sent to RabbitMQ" });
});

app.get("/send/kafka", async (request, reply) => {
  await sendKafkaMessage("test-topic", "Hello Kafka");
  reply.send({ status: "Message sent to Kafka" });
});

app.get("/send/sqs", async (request, reply) => {
  await sendSQSMessage("Hello SQS");
  reply.send({ status: "Message sent to SQS" });
});

app.get("/send/sns", async (request, reply) => {
  await publishSNSMessage(
    "arn:aws:sns:us-east-1:000000000000:my-topic",
    "Hello SNS"
  );
  reply.send({ status: "Message sent to SNS" });
});

app.listen({ port: 3000 }, async (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  await connectRabbitMQ();
  await connectKafka();
  app.log.info(`Server listening at ${address}`);
});
