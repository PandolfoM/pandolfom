"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import Github from "@/app/assets/github.svg";
import Linkedin from "@/app/assets/linkedin.png";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Required"),
});

function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="pt-[172px] h-dvh">
      <Card>
        <CardHeader className="flex">
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="John Doe"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="john.doe@example.com"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Message"
                      rows={8}
                      className="resize-none"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field className="gap-5">
            <Button type="submit" form="contact-form" className="!w-fit">
              Send
            </Button>
            <Separator className="!w-2/3 m-auto" />
            <div className="flex items-center justify-center gap-5 h-7">
              <MailIcon className="expand-target" height="28" width="28" />
              <Image
                src={Github}
                alt="github logo"
                width="28"
                className="invert expand-target"
              />
              <Image
                src={Linkedin}
                alt="linkedin logo"
                width="28"
                className="h-full expand-target"
              />
            </div>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Contact;
