import * as React from 'react';
import { Body, Container, Head, Heading, Hr, Html, Preview, Tailwind, Text } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  subject: String;
  email: String;
  message: String;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, subject, email, message }) => {
  const previewText = `${subject}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>{name}</strong> would like to contact you about something!
            </Heading>

            <Text className="text-black text-[14px] leading-[24px]">{email}</Text>

            <Text className="text-black text-[14px] leading-[24px]">{subject}</Text>

            <Text className="text-black text-[14px] leading-[24px]">{message}</Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">This message was sent by : {name}.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
