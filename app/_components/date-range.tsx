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
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              " justify-start text-left font-normal ",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value?.from ? (
              value.to ? (
                <div className="space-y-1">
                  <p>Giriş: {format(value.from, "dd.mm.yy")}</p>

                  <p>Çıkış: {format(value.to, "dd.mm.yy")}</p>
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
