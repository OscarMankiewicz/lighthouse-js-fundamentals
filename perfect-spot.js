
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


const finalPosition = (moves) => {
  //location starts at  0 0
  let location = [0 ,0]
    //for loop will add or remove a number from locatation based on moves
    for (let i of moves) {
      if (i === 'north') {
        location[1] ++;
      } else if (i === 'south') {
        location[1] --;
      } else if (i === 'east') {
        location[0] ++;
      } else if (i === 'west') {
        location[0] --;
      }
      
    }
    return location
  };
  console.log(finalPosition(moves)); 


