//fetch = Function used for making HTTP requests  to fetch resources.
// (JSON style data, images, files)
//simplifies asynchronous data fetching in JavaScript and
//used for interacting with APIs to retrieve and send
// data asynchronously over the web.
// fetch(url,{method:"GET"})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/typhlosion"
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
