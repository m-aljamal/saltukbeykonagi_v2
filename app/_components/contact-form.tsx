"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const formFields = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  phone: z.string().min(8).max(15),
});
type FormFields = z.infer<typeof formFields>;

export default function ContactForm() {
  const form = useForm<FormFields>({
    resolver: zodResolver(formFields),
  });

  const onSubmit = (data: FormFields) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 items-start"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-zinc-200/30">
                <Input {...field} placeholder="Adınızı giriniz" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-zinc-200/30 ">
                <Input {...field} placeholder="Telefon" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-zinc-200/30 ">
                <Input {...field} placeholder="E-posta" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl className="bg-zinc-200/30 ">
                <Textarea {...field} placeholder="Mesajınız" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >Gönder</Button>
      </form>
    </Form>
  );
}
