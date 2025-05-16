
export async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}