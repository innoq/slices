# slices

slices a list with help of generators in segments of length `n`.

```ts
  const list = [455, 233, "fubar", 0.7, true, false];

  for (const slice of slices(list, 3)) {
    console.log(slice)
  }

  // [455, 233, "fubar"]
  // [0.7, true, false]
```
