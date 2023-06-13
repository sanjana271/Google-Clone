#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main()
{
    // declare string :
    // 1)
    string str;

    // 2)
    string str1(5, 'n'); // it will print n 5 times.

    // 3) can give value in double coate
    string str3 = "Apanikaksha"; // cant add space in bet

    // input string with spaces: like sentence:
    // use getline function
    getline(cin, str3); // cin and string name.

    // function of string:
    // 1)Append() two strings - adding

    string s1 = "fam";
    string s2 = "ily";

    cout << s1 + s2 << endl;
    // s1=s1+s2; cout<<s1;

    s1.append(s2); // ily will get attach to fam o/p= family
    s2.append(s1); // fam will get attach to ily o/p= ilyfam

    // access elements/characters from a string
    cout << s1[1]; // 2nd character as 0 is 1st index/

    // clear()=to delete a string
    s1.clear();

    // compare 2 strings
    s2.compare(s1); // it will comapare s2 with s1.
    // it will which 1 is greater and if both are them it will give 0.

    if (!s1.compare(s2))
        cout << "strings are eual"; // they are equal.

    // check if string is empty or not
    s1.empty();
    // not empty
    if (!s1.empty())
        cout << "not empty";

    // erase() u cn directly use erase function.
    s1.erase(1, 2);
    // argument- 1.from which index u want to delete. 2.how many characters.

    // find-part of string
    s1.find("ab");
    // it will return the 1st index where it was found.

    // insert()- insert new string/char
    s1.insert(2, "lol");
    // 1)at which position 2)what

    // lenght of string
    s1.size();
    cout<<s1.length();
    //lenght is imp for iterating the string

    //getting substring of a string
    string s= s1.substr(6,4);//from 6th index , 4 chars

    //for numaric string
    string num = "7896";
    //for converting it into integer
    //stoi - string to integer function
    int x= stoi(num);

    //from interger to string
    to_string(x);
    
    //to sort string
    //i.e. to sort in a-z manner
    //add header file #include<algorithm>
    sort(s1.begin(), s1.end());

    // To reverse a string :
    reverse(s1.begin(), s1.end());

    return 0;
}