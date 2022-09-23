export const noOrphans = (string) =>
  string?.replace(/\s([^\s<]+)\s*$/, '\u00A0$1');
