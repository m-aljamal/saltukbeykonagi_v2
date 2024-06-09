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

const formFields = z.object({
  name: z.string().min(2).max(50),
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  rooms: z.number().int().positive(),
  adults: z.number().int().positive(),
  children: z.number().int().positive(),
});

type FormFields = z.infer<typeof formFields>;

export default function ReversationForm() {
  const form = useForm<FormFields>({
    resolver: zodResolver(formFields),
    defaultValues: {
      name: "",
      date: { from: new Date(), to: new Date() },
      rooms: 1,
      adults: 1,
      children: 0,
    },
  });

  const onSubmit = (data: FormFields) => {
    console.log(data);
  };

  const selectedRooms = form.watch("rooms");
  const selectedAdults = form.watch("adults");
  const selectedChildren = form.watch("children");
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-4 gap-8 items-start"
        >
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Tarihi</FormLabel>
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
              <FormItem>
                <FormLabel>Adı</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Adınızı giriniz" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Popover>
            <div className="space-y-2">
              <div>Misafir</div>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {selectedRooms ? `${selectedRooms} rooms` : "1 Room"},
                  {selectedAdults ? `${selectedAdults} adults` : "1 Adult"},
                  {selectedChildren
                    ? `${selectedChildren} children`
                    : "0 Children"}
                </Button>
              </PopoverTrigger>
            </div>
            <PopoverContent className="w-52">
              <div className="grid gap-4">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="rooms"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-5">
                        <FormLabel>Oda</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 text-center
                          focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0
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
                      <FormItem className="flex items-center gap-5">
                        <FormLabel>Yetişkin</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 text-center
                           focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0
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
                      <FormItem className="flex items-center gap-5">
                        <FormLabel>Çocuk</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 text-center
                           focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0
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

          <Button type="submit" size="sm" className="mt-8">
            Gönder
          </Button>
        </form>
      </Form>
    </div>
  );
}
