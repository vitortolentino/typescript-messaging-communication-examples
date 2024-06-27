import {
  SQSClient,
  SendMessageCommand,
  ReceiveMessageCommand,
} from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({
  region: "us-east-1",
  endpoint: "http://localhost:4566",
});

const queueUrl = "http://localhost:4566/000000000000/my-queue";

export async function sendMessage(message: string) {
  const params = {
    QueueUrl: queueUrl,
    MessageBody: message,
  };
  await sqsClient.send(new SendMessageCommand(params));
}

export async function receiveMessage(callback: (msg: string) => void) {
  const params = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 10,
    WaitTimeSeconds: 10,
  };

  const data = await sqsClient.send(new ReceiveMessageCommand(params));
  if (!data.Messages) {
    return;
  }

  data.Messages.forEach((message) => {
    if (!message.Body) {
      return;
    }

    callback(message.Body);
  });
}
