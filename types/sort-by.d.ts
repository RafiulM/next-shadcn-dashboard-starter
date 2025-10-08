declare module 'sort-by' {
  function sortBy<T>(arr: T[], ...keyPaths: string[]): T[];
  export = sortBy;
}