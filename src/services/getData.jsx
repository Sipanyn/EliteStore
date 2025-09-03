// async function getData() {
//   let data = await fetch(`https://elitestrore-api.vercel.app/products`);
//   let res = await data.json();
//   return res;
// }
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const baseUrl =
    import.meta.env.MODE === "development"
      ? "/api"
      : "https://elitestrore-api.vercel.app";

  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export default getData;
