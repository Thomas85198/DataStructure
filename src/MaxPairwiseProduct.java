import java.util.*;
import java.io.*;

public class MaxPairwiseProduct {
   static int MaxPairwiseProduct(int[] numbers) {
       int result = 0;
       int n = numbers.length;
       for (int i = 0; i < n; ++i) {
           for (int j = i; j < n; ++j) {
               if (numbers[i] * numbers[j] > result) {
                   result = numbers[i] * numbers[j];
               }
           }
       }
       return result;
   }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        // 1) 讀取要輸入幾個數字
        int n = s.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; ++i) {
            // 2) 接下去輸入的數字
            arr[i] = s.nextInt();
        }
        System.out.println(MaxPairwiseProduct(arr));
    }
}