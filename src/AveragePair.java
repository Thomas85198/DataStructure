import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * [Coding Practice]
 * The AveragePair class is used to find pairs of numbers in an array whose average is equal to a given value.
 * It provides a function that takes an array of integers and a target average and returns the pairs of numbers
 * whose average is equal to the target average.
 *
 * Big O: n^2
 */
public class AveragePair {

    public static void main(String[] args) {
        function(new int[]{-11, 0, 1, 2, 3, 9, 14, 17, 21}, 1.5);
    }

    private static void function (int[] arr, double avg) {
        List<int[]> result = new ArrayList<>();
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if ((double) (arr[i] + arr[j]) / 2 == avg) {
                    result.add(new int[]{arr[i], arr[j]});
                }
            }
        }
        for (int[] i : result) {
            System.out.println(Arrays.toString(i));
        }

    }
}
