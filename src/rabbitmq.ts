import amqp, { Channel } from "amqplib";

let channel: Channel;

export async function connectRabbitMQ() {
  const connection = await amqp.connect("amqp://localhost:5672");
  channel = await connection.createChannel();
  await channel.assertQueue("main_queue", { durable: false });
}

export async function sendMessage(queue: string, message: string) {
  await channel.sendToQueue(queue, Buffer.from(message));
}

export async function receiveMessage(
  queue: string,
  callback: (msg: string) => void
) {
  await channel.consume(queue, (msg) => {
    if (msg !== null) {
      callback(msg.content.toString());
      channel.ack(msg);
    }
  });
}

receiveMessage('fila', (msg) => {
  /// enviar email
})
