export function flushFlights(items) {
  return {
    type: 'FLUSH_FLIGHTS',
    items,
  };
}
