// async function getData() {
//   let data = await fetch(`https://elitestrore-api.vercel.app/products`);
//   let res = await data.json();
//   return res;
// }
async function getData() {
  const baseUrl =
    import.meta.env.MODE === "development"
      ? "/api"
      : "https://elitestrore-api.vercel.app/";

  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export default getData;
