import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  pixelBasedPreset,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

function ContactEmail({ name, email, message }: EmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Contact Form Submission</title>
      </Head>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                background: "#090909",
                accent: "#d33b3d",
              },
            },
          },
        }}>
        <Body className="mx-auto my-auto px-2 font-sans bg-background">
          <Preview>Submission from {name}</Preview>
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-2xl border-2 border-white/50 p-5 border-solid bg-white/5 h-full">
            <Heading className="text-white" as="h2">
              Portfolio Form Submission
            </Heading>
            <Section>
              <Row>
                <Column>
                  <Text className="text-white">Name: {name}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-white">Email: {email}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-white">Message: {message}</Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactEmail;
