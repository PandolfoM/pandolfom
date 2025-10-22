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
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import AppLink from "@/components/link";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Required"),
});

function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      form.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[172px] h-dvh">
      <Card className="lg:w-3/4 lg:m-auto">
        <CardHeader className="flex">
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent className="lg:flex-row lg:flex lg:gap-10">
          <form
            id="contact-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="lg:w-full"
          >
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
          <div>
            <Separator className="" orientation="vertical" />
          </div>
          <div className="hidden items-center gap-5 w-7 flex-col lg:flex">
            <AppLink href="mailto:matt@pandolfo.com" showArrow={false}>
              <MailIcon className="expand-target" height="28" width="28" />
            </AppLink>
            <AppLink
              className="text-white/50 text-sm"
              href="https://github.com/pandolfom"
              showArrow={false}
            >
              <Image
                src={Github}
                alt="github logo"
                width="28"
                className="invert expand-target"
              />
            </AppLink>
            <AppLink
              className="text-white/50 text-sm"
              href="https://www.linkedin.com/in/matthew-pandolfo/"
              showArrow={false}
            >
              <Image
                src={Linkedin}
                alt="linkedin logo"
                width="28"
                className="h-7 expand-target"
              />
            </AppLink>
          </div>
        </CardContent>
        <CardFooter>
          <Field className="gap-5">
            <Button
              type="submit"
              form="contact-form"
              className="!w-fit"
              disabled={loading}
            >
              {loading && <Spinner />}
              Send
            </Button>
            <Separator className="!w-2/3 m-auto lg:hidden" />
            <div className="flex items-center justify-center gap-5 h-7 lg:hidden">
              <AppLink href="mailto:matt@pandolfo.com" showArrow={false}>
                <MailIcon className="expand-target" height="28" width="28" />
              </AppLink>
              <AppLink
                className="text-white/50 text-sm"
                href="https://github.com/pandolfom"
                showArrow={false}
              >
                <Image
                  src={Github}
                  alt="github logo"
                  width="28"
                  className="invert expand-target"
                />
              </AppLink>
              <AppLink
                className="text-white/50 text-sm"
                href="https://www.linkedin.com/in/matthew-pandolfo/"
                showArrow={false}
              >
                <Image
                  src={Linkedin}
                  alt="linkedin logo"
                  width="28"
                  className="h-full expand-target"
                />
              </AppLink>
            </div>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Contact;
