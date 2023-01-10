//Array containing multiple arrays of possible locations
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//function expression
const chooseStations = function (stations) {
  const goodStations = []
  //for loop which runs through the stations array to check capacity and locations
  for (const station of stations) {
    const capacity = station[1] 
    //only if the capacity is 20 or more will the function continue to the next if statement
    if (capacity >= 20) {
      const building = station[2]
      //this if statement checks if the building is a school or community centre.
      if (building === 'school' || building === 'community centre') {
        //if both the capacity and building statements return true, the building name will be returned into a new array.
        goodStations.push(station[0])
      }
    }
  }
  console.log(goodStations);
  return goodStations;
};

chooseStations(stations);