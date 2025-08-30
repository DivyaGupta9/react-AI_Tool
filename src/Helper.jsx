export function checkHeanding(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}
export function replaceHeandingStarts(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}
