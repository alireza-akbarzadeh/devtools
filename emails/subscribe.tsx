import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface SubscribeEmailProps {
  name?: string;
  email?: string;
}

export const SubscribeEmail = ({ name, email }: SubscribeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Subscription Confirmation</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={header}>Welcome to Our Newsletter, {name}!</Text>
            <Text style={text}>
              Thank you for subscribing to our newsletter. Your email ({email})
              has been successfully added to our mailing list.
            </Text>
            <Text style={text}>
              Our bi-weekly newsletter will keep you informed about all major
              announcements, special offers, and exciting updates. Don t worry,
              we won t spam your mailbox.
            </Text>
            <Text style={text}>
              If you have any questions or need assistance, feel free to contact
              us via our Help Center for support.
            </Text>
            <Text style={text}>Thank you for joining us! Happy Reading!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SubscribeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "8px",
  padding: "40px",
  maxWidth: "600px",
  margin: "0 auto",
};

const header = {
  fontSize: "24px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  color: "#007ee6",
  marginBottom: "20px",
};

const text = {
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  color: "#404040",
  lineHeight: "1.6",
  marginBottom: "15px",
};

const button = {
  backgroundColor: "#007ee6",
  color: "#ffffff",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 20px",
  borderRadius: "5px",
};

const anchor = {
  color: "#007ee6",
  textDecoration: "underline",
};
