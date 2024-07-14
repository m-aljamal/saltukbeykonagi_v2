"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePickerWithRange } from "./date-range";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Users } from "lucide-react";
import { useTransition } from "react";
import { sendReversationEmail } from "@/actions/reversation";
import { toast } from "sonner";
import { formFields } from "@/lib/schema";

type FormFields = z.infer<typeof formFields>;

export default function ReversationForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormFields>({
    resolver: zodResolver(formFields),
    defaultValues: {
      name: "",
      date: { from: new Date(), to: new Date() },
      rooms: 1,
      adults: 1,
      children: 0,
      phone: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    startTransition(() => {
      const promise = sendReversationEmail(data).then(() => {
        form.reset();
      });
      toast.promise(promise, {
        loading: "Gönderiliyor...",
        success: "Gönderildi",
        error: "Hata oluştu",
      });
    });
  };

  const selectedRooms = form.watch("rooms");
  const selectedAdults = form.watch("adults");
  const selectedChildren = form.watch("children");

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex  flex-col sm:grid grid-cols-3 gap-4 items-start"
        >
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <DatePickerWithRange
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
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
              <FormItem className="w-full">
                <FormControl className="bg-zinc-200/30 ">
                  <Input {...field} placeholder="Telefon" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Popover>
            <div className="space-y-2 col-span-2 w-full">
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-zinc-200/30 hover:bg-zinc-200/30 space-x-4 w-full"
                >
                  <Users className="size-6 text-yellow-800" />
                  <p>{selectedRooms ? `${selectedRooms} Oda` : "1 Oda"}, </p>
                  <p>
                    {selectedAdults
                      ? `${selectedAdults} Yetişkin`
                      : "1 Yetişkin"}
                    ,
                  </p>
                  <p>
                    {selectedChildren ? `${selectedChildren} Çocuk` : "0 Çocuk"}
                  </p>
                </Button>
              </PopoverTrigger>
            </div>
            <PopoverContent className="w-64 bg-zinc-100">
              <div className="grid gap-4">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="rooms"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between gap-5">
                        <FormLabel>Oda</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 text-center
                          focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 w-28 bg-zinc-200/30
                           "
                            {...field}
                            placeholder="Adınızı giriniz"
                            type="number"
                            min={1}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="adults"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-5 justify-between">
                        <FormLabel>Yetişkin</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 text-center
                           focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 w-28 bg-zinc-200/30
                            "
                            {...field}
                            placeholder="Adınızı giriniz"
                            type="number"
                            min={1}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="children"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-5 justify-between">
                        <FormLabel>Çocuk</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 text-center
                           focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 w-28 bg-zinc-200/30
                            "
                            {...field}
                            placeholder="Adınızı giriniz"
                            type="number"
                            min={0}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button
            type="submit"
            size="sm"
            className="w-full"
            disabled={isPending}
          >
            Gönder
          </Button>
        </form>
      </Form>
    </div>
  );
}
