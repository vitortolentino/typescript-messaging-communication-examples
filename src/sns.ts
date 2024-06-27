import {
  SNSClient,
  PublishCommand,
  SubscribeCommand,
} from "@aws-sdk/client-sns";

const snsClient = new SNSClient({
  region: "us-east-1",
  endpoint: "http://localhost:4566",
});

export async function publishMessage(topicArn: string, message: string) {
  const params = {
    Message: message,
    TopicArn: topicArn,
  };
  await snsClient.send(new PublishCommand(params));
}

export async function subscribeQueue(topicArn: string, queueArn: string) {
  const params = {
    Protocol: "sqs",
    TopicArn: topicArn,
    Endpoint: queueArn,
  };
  await snsClient.send(new SubscribeCommand(params));
}
