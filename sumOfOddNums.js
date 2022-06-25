// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
    let numbers_before_n_count = (n - 1) * n / 2;
    let first_number_in_nth_row = numbers_before_n_count * 2 + 1;
    let last_number_in_nth_row = first_number_in_nth_row + 2 * (n - 1);
    return n * (first_number_in_nth_row + last_number_in_nth_row) / 2;
  }