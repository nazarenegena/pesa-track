import type { Component } from "svelte";

export default interface ExpenseObj{
  id: string;
  title: string;
  category: string;
  payment: string;
  amount: number;
  description: string;
  date: string;
}


export interface StyleObj {
  icon: any,
  bg: string,
  text: string
}
