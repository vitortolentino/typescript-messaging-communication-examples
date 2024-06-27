import { Kafka, Producer, Consumer } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

let producer: Producer;
let consumer: Consumer;

export async function connectKafka() {
  producer = kafka.producer();
  consumer = kafka.consumer({ groupId: "my-group" });

  await producer.connect();
  await consumer.connect();
}

export async function sendMessage(topic: string, message: string) {
  await producer.send({
    topic,
    messages: [{ value: message }],
  });
}

export async function receiveMessage(
  topic: string,
  callback: (msg: string) => void
) {
  await consumer.subscribe({ topic, fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }) => {
      if (message.value) {
        callback(message.value.toString());
      }
    },
  });
}
