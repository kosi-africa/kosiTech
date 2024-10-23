import * as React from "react";
import {
  Html,
  Img,
  // Link,
  Preview,
  Section,
  Text,
  Body,
  Container,
  Row,
  Head,
  Hr,
} from "@react-email/components";
import { EmailTemplateProps } from "@/types/emailTemplateProps";

export default function EmailTemplate(contactInforData: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Kosi Tech New Contact Reach Out</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://res.cloudinary.com/dp2gro06b/image/upload/v1726133285/kosi-tech/logos/kosiTech_nav_logo_ytqvv6.png`}
            width="250"
            height="100"
            alt="KosiTech Logo"
            sizes="100vw"
            className="object-cover"
          />

          <Text style={title}>
            There is a new reach out regarding the following.
            {/* <strong>@</strong>, a personal access was created on your account. */}
          </Text>

          <Section style={section}>
            <Text style={text}>Hi Barasa,</Text>
            <Text style={text}>
              Here are the details of the new contact and the services they want
            </Text>

            <Row style={rowList}>Name: {contactInforData.name}</Row>
            <Hr />
            <Row style={rowList}>Email: {contactInforData.email}</Row>
            <Hr />
            <Row style={rowList}>Project: {contactInforData.project}</Row>
            <Hr />
            <Row style={rowList}>Message: {contactInforData.message}</Row>
            <Hr />
          </Section>
          {/* <Text style={links}></Text> */}

          <Text style={footer}>@kosi tech</Text>
        </Container>
      </Body>
    </Html>
    // <Html lang='en'>
    //     <div>
    //         <p className="text-center p-2 max-w-lg mx-auto">Hello, {name}</p>
    //     </div>
    // </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

// const button = {
//   fontSize: "14px",
//   backgroundColor: "#28a745",
//   color: "#fff",
//   lineHeight: 1.5,
//   borderRadius: "0.5em",
//   padding: "12px 24px",
// };

// const links = {
//   textAlign: "center" as const,
// };

const rowList = {
  listStyle: "bullet",
};
// const link = {
//   color: "#0366d6",
//   fontSize: "12px",
// };

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
