import React from "react";

function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}

export default ContactLayout;
