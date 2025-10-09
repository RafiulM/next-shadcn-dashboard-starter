declare module 'sort-by' {
  function sortBy(criteria: string): (a: any, b: any) => number;
  export = sortBy;
}