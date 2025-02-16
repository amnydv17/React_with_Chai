export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments",{
    method:"GET",
  });
  return await res.json();
};

export const getRandomUser = async ()=> {
  const resp = await fetch("https://randomuser.me/api/",{
    method:"GET",
  });
  return await resp.json();
}
