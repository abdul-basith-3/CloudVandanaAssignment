import java.util.*;
import java.io.*;
import java.lang.Math;
import java.util.Scanner;
public class romantointeger
{
    int value(char r)
    {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }
    int convertromantoint(String s)
    {
        int total = 0;
        for (int i=0; i<s.length(); i++)
        {
            int s1 = value(s.charAt(i));
            if (i+1 <s.length())
            {
                int s2 = value(s.charAt(i+1));
                if (s1 >= s2)
                {
                    total = total + s1;
                }
                else
                {
                    total = total - s1;
                }
            }
            else
            {
                total = total + s1;
            }
        }
        return total;
    }
    public static void main(String args[])
    {
        Scanner myObj = new Scanner(System.in);
        romantointeger ob = new romantointeger();
        System.out.println("Enter the Roman number");
        String Str = myObj.nextLine();
        System.out.println("The Integer value is: "+ob.convertromantoint(Str));
    }
}
