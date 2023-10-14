import java.util.Scanner;
public class pangramstring
{
    static int size = 26;
    static boolean isLetter(char ch)
    {
        if (!Character.isLetter(ch))
            return false;
        return true;
    }
    static boolean check(String str, int len)
    {
        str = str.toLowerCase();
        boolean[] present = new boolean[size];
        for (int i = 0; i < len; i++)
        {
            if (isLetter(str.charAt(i)))
            {
                int letter = str.charAt(i) - 'a';
                present[letter] = true;
            }
        }
        for (int i = 0; i < size; i++)
        {
            if (!present[i])
                return false;
        }
        return true;
    }
    public static void main(String args[])
    {
        Scanner myObj = new Scanner(System.in);
        System.out.println("Enter the String");
        String str = myObj.nextLine();
        int len = str.length();
        if (check(str, len))
            System.out.println("The given string is a pangram.");
        else
            System.out.println("The given string is not a pangram.");
    }
}