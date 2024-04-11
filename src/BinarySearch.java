/**
 * The BinarySearch class provides a method for performing binary search on an array of integers.
 * Binary search is an efficient algorithm for finding a target value in a sorted array by repeatedly dividing the search interval in half.
 *
 * Usage:
 * int target = BinarySearch.function(numbers, 12);
 *
 * The target value to search for is specified as the second argument in the function call.
 *
 * If the target value is found in the array, the position of the target value is printed along with the number of steps taken to find it.
 * If the target value is not found, a message indicating that the value could not be found is printed and -1 is returned.
 *
 * Big O: logn
 */
public class BinarySearch {
    public static void main(String[] args) {
        int[] numbers = {9,
                12,
                15,
                18,
                19,
                20,
                22,
                25,
                26,
                26,
                33,
                37,
                38,
                41,
                47,
                47,
                50,
                55,
                57,
                60,
                68,
                80,
                87,
                90,
                98,
                100,
                103,
                108,
                109,
                109,
                116,
                120,
                120,
                124,
                127,
                128,
                131,
                135,
                135,
                139,
                143,
                145,
                151,
                155,
                156,
                158,
                163,
                164,
                165,
                169,
                169,
                173,
                174,
                176,
                177,
                178,
                181,
                182,
                182,
                183,
                184,
                189,
                192,
                195,
                200,
                201,
                203,
                204,
                207,
                213,
                217,
                222,
                222,
                222,
                227,
                228,
                233,
                235,
                237,
                239,
                239,
                243,
                248,
                251,
                252,
                257,
                260,
                260,
                263,
                268,
                270,
                271,
                271,
                276,
                281,
                284,
                285,
                295,
                297,
                298};
        int target = function(numbers, 12);
    }

    private static int function(int[] numbers, int target) {
        int min = 0;
        int max = numbers.length - 1;
        int step = 0;
        while (min <= max) {
            step++;
            int middle = (min + max) / 2;
            if (target > numbers[middle]) {
                min = middle + 1;
            } else if (target < numbers[middle]) {
                max = middle - 1;
            } else if (target == numbers[middle]) {
                System.out.println("Found number: " + target + " at position " + middle);
                System.out.println("Found it after " + step + " steps");
                return middle;
            }
        }
        System.out.println("Cannot find number " + target);
        return -1;

    }
}
