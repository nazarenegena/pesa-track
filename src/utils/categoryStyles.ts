import type { Component } from "svelte";
import type { StyleObj } from "./interfaces";
import { ShoppingCart, Bus, Home, Gamepad2, Heart, Tag } from "@lucide/svelte";

export const categoryStyles: Record<string, { icon: Component; bg: string; text: string }> = {
  food: { icon: ShoppingCart, bg: "bg-green/15", text: "text-green" },
  drinks: { icon: ShoppingCart, bg: "bg-green/15", text: "text-green" },
  groceries: { icon: ShoppingCart, bg: "bg-green/15", text: "text-green" },
  transport: { icon: Bus, bg: "bg-cyan/15", text: "text-cyan" },
  travel: { icon: Bus, bg: "bg-cyan/15", text: "text-cyan" },
  housing: { icon: Home, bg: "bg-violet/15", text: "text-violet" },
  rent: { icon: Home, bg: "bg-violet/15", text: "text-violet" },
  entertainment: { icon: Gamepad2, bg: "bg-coral/15", text: "text-coral" },
  health: { icon: Heart, bg: "bg-amber/15", text: "text-amber" }
};

const defaultStyle: StyleObj = { icon: Tag, bg: "bg-mint/15", text: "text-mint" };

export function getCategoryStyle(category: string | undefined | null): StyleObj {
  return categoryStyles[category?.toLowerCase() ?? ""] ?? defaultStyle;
}