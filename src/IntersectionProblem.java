import java.util.ArrayList;

/**
 * [Coding Practice]
 * The IntersectionProblem class provides a solution to find the intersection of two arrays.
 * It contains a main method which demonstrates the usage of the solution.
 *
 * Big O: O^2
 */
public class IntersectionProblem {


    public static void main(String[] args) {
        function(new int[]{1, 2, 3, 7, 9, 19, 25}, new int[]{19, 5, 16, 10, 3, 1});
    }

    private static void function(int[] arr1, int[] arr2) {
        ArrayList<Integer> result = new ArrayList<>();
        for (int k : arr1) {
            for (int i : arr2) {
                if (k == i) {
                    result.add(k);
                }
            }
        }
        System.out.println(result);
    }
}
