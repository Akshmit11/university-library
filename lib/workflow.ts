import { Client as WorkFlowClient } from "@upstash/workflow"
import config from "./config"
import { Client as QStashClient, resend } from "@upstash/qstash";

export const workflowClient = new WorkFlowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
})

const qStashClient = new QStashClient({ token: config.env.upstash.qstashToken });

export const sendEmail = async ({ email, subject, message }: { email: string; subject: string; message: string }) => {
  await qStashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "Akshmit <hello.suggestsolutions.com>",
      to: [email],
      subject,
      html: message,
    },
  });
}
