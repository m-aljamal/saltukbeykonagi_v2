"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { tr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  value: DateRange | undefined;
  onChange: (value: DateRange | undefined) => void;
};

export function DatePickerWithRange({ value, onChange }: Props) {
  return (
    <div className={cn("grid gap-2 ")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              " justify-start text-left font-normal bg-zinc-200/30 hover:bg-zinc-200/30",
              !value && "text-muted-foreground"
            )}
          >
            {value?.from ? (
              value.to ? (
                <div className="grid grid-cols-2  gap-5 w-full   ">
                  <div className="bg-zinc-200/30 -ml-4 px-2 py-1 rounded-lg">
                    <p className="font-bold">Giriş</p>
                    <div className="flex gap-2 ">
                      <CalendarIcon className="size-4 text-yellow-800" />
                      <p className="text-muted-foreground">
                        {format(value.from, "dd.MM.yy")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-zinc-200/30 -mr-4 rounded-lg py-1 px-2">
                    <p className="font-bold">Çıkış</p>
                    <div className="flex gap-2">
                      <CalendarIcon className="size-4 text-yellow-800" />
                      <p className="text-muted-foreground">
                        {format(value.to, "dd.MM.yy")}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Giriş: {format(value.from, "dd.mm.yy")}</p>
              )
            ) : (
              <span>Bir tarih seçin</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            locale={tr}
            initialFocus
            mode="range"
            selected={value}
            onSelect={onChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
