export function* slices(list: unknown[] = [], sliceSize = 1): Generator {
  for (let i = 0; i < list.length; i = i + sliceSize) {
    const next = i + sliceSize;
    const batch = list.slice(i, next < list.length ? next : list.length);
    yield batch;
  }
}
