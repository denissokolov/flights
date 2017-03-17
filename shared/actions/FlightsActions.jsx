export function flushFlights(items) {
  return {
    type: 'FLUSH_FLIGHTS',
    items,
  };
}

export function changeCarriersFilter(value) {
  return {
    type: 'CHANGE_CARRIERS_FILTER',
    value,
  };
}
