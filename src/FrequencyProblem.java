import java.util.*;

/**
 *  [Coding Practice]
 * The FrequencyProblem class compares the frequencies of characters in two input strings.
 */
public class FrequencyProblem {

    public static void main(String[] args) {
        boolean function = function("aabb", "abab");
        System.out.println("SameFrequency: " + function);
    }

    private static boolean function (String str1, String str2) {

        if (str1.length() != str2.length()) {
            return false;
        }

        char[] strCharaterArr1 = str1.toCharArray();
        char[] strCharaterArr2 = str2.toCharArray();

        Map<Character, Integer> counter1 = new HashMap<>();
        Map<Character, Integer> counter2 = new HashMap<>();

        for (char c : strCharaterArr1) {
            if (!counter1.containsKey(c)) {
                counter1.put(c, 1);
            } else {
                counter1.put(c, counter1.get(c) + 1);
            }
        }

        for (char c : strCharaterArr2) {
            if (!counter2.containsKey(c)) {
                counter2.put(c, 1);
            } else {
                counter2.put(c, counter2.get(c) + 1);
            }
        }

        System.out.println(counter1);
        System.out.println(counter2);

        for (Map.Entry<Character, Integer> entry : counter1.entrySet()) {
            if (!counter2.containsKey(entry.getKey())) {
                return false;
            }
            return Objects.equals(counter2.get(entry.getKey()), entry.getValue());
        }

        return true;
    }
}



