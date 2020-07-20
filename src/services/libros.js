const baseUrl = "https://www.googleapis.com";
export async function GetLibrosByVolumes() {
  const pageIndex = 0;
  const response = await fetch(
    `${baseUrl}/books/v1/volumes?q=harry+potter&pageindex=${pageIndex}&pageSize=10`
  );
  const responseJson = await response.json();
  return responseJson;
}

export async function getLibrosBySearch(q) {
  const response = await fetch(`${baseUrl}/books/v1/volumes?q=${q}`);
  const responseJson = await response.json();
  return responseJson;
}

export default {
  GetLibrosByVolumes,
  getLibrosBySearch,
};
