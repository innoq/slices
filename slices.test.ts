import { assertEquals } from "https://deno.land/std@0.122.0/testing/asserts.ts";
import { slices } from "./slices.ts";

Deno.test("iterating over slices of length '3' of a list with no rest", () => {
  const list = [455, 233, "fubar", 0.7, true, false];
  const chunks: unknown[] = [];

  for (const slice of slices(list, 3)) {
    chunks.push(slice);
  }

  assertEquals(chunks, [[455, 233, "fubar"], [0.7, true, false]]);
});

Deno.test("iterating over slices of length '3' of a list with rest", () => {
  const list = [455, 233, "fubar", 0.7, true, false, "rest"];
  const chunks: unknown[] = [];

  for (const slice of slices(list, 3)) {
    chunks.push(slice);
  }

  assertEquals(chunks, [[455, 233, "fubar"], [0.7, true, false], ["rest"]]);
});

Deno.test("iterating over slices of length '2' of a list with no rest", () => {
  const list = [455, 233, "fubar", 0.7, true, false];
  const chunks: unknown[] = [];

  for (const slice of slices(list, 2)) {
    chunks.push(slice);
  }

  assertEquals(chunks, [[455, 233], ["fubar", 0.7], [true, false]]);
});

Deno.test("iterating over slices of length '1' of a list", () => {
  const list = [455, 233, "fubar", 0.7, true, false];
  const chunks: unknown[] = [];

  for (const slice of slices(list)) {
    chunks.push(slice);
  }

  assertEquals(chunks, [[455], [233], ["fubar"], [0.7], [true], [false]]);
});

Deno.test("iterating over slices of an empty list", () => {
  const list: [] = [];
  const chunks: unknown[] = [];

  for (const slice of slices(list, 3)) {
    chunks.push(slice);
  }

  assertEquals(chunks, []);
});

Deno.test("iterating over slices of null", () => {
  const list: [] = [];
  const chunks: unknown[] = [];

  for (const slice of slices(list, 3)) {
    chunks.push(slice);
  }

  assertEquals(chunks, []);
});
