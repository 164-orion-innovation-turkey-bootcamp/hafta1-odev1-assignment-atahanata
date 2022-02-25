

//icice iki dongu ile arrayin fakli indislerini gezdiriyorum ve iki indis eger bulmak istedigim sabite esit ise bu indisleri konsola yazdiriyorum.

function twoSum(arr, constant) {

  for (let i = 0; i < arr.length - 2; i++) {

    for (let j = i + 1; j < arr.length; j++) {

      if (arr[i] + arr[j] === constant) {

        console.log(i, j);
      }
    }
  }
}

twoSum([1, 2, 4], 5);

