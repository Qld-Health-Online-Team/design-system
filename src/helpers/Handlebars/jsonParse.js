export default function (string) {
  try {
    return JSON.parse(string);
  } catch {
    return {};
  }
}
