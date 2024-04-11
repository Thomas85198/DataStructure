import java.util.*;

/**
 * The Counter class provides a static method for counting the occurrences of integers in two lists and returning the integers that occur more than once.
 * Big O: n+m
 */
public class Counter {

    public static void main(String[] args) {
        function(new ArrayList<>(Arrays.asList(1, 2, 3, 7, 9, 19, 25)), new ArrayList<>(Arrays.asList(19, 5, 16, 10, 3, 1)));
    }

    public static void function (List<Integer> arr1, List<Integer> arr2) {
        List<Integer> result = new ArrayList<>();
        List<Integer> arr3 = new ArrayList<>();
        Map<Integer, Integer> counter = new HashMap<>();

        arr3.addAll(arr1);
        arr3.addAll(arr2);

        for (Integer i : arr3) {
            if (!counter.containsKey(i)) {
                counter.put(i, 1);
            } else {
                counter.put(i, counter.get(i)+1);
            }
        }


        Set<Map.Entry<Integer, Integer>> entries = counter.entrySet();

        for (Map.Entry<Integer, Integer> i: entries) {
            System.out.println(i.getKey() + ": " + i.getValue());

            if (i.getValue() >= 2) {
                result.add(i.getKey());
            }
        }

        System.out.println("Result is: " + result);

    }
}
