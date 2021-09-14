const country = {
  //properties, key value pairs
  name: "United Kingdom",
  abbreviation: "UK",
  capital: "London",
  population: 67000000,
};

// TODO: use object destructuring
// const abbreviation = country.abbreviation;
// const capital = country.capital;
// const population = country.population;

const { abbreviation, capital, population } = country
//removes the need for country.prop or country.population 
//country is an object, we want to get the values out without acessing it via the object
// not always necessary but useful

// export so the values can be tested - but you can ignore this
export { abbreviation, capital, population };
