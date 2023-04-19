console.log("variables-tutorial");

let answer = prompt("Having fun learning?", "yes!");
alert("the user says " + answer);
/* 

-----W3SCHOOLS LESSON-----

JavaScript Arithmetic Operators: 
perform arithmetic on numbers literals or variables. A literal in JavaScript is a fixed value that is explicitly specified in the code, such as a number, string, boolean, 
null, undefined, object, or array. Literals are the notation or symbol used to represent values of primitive data types directly in code. For example, 23 is a numeric 
literal, "hello" is a string literal, and true is a boolean literal.

Literals are used to represent data directly in the code, without the need to store them in a variable or compute them dynamically.

JavaScript Numbers are Always 64-bit Floating Point:
JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard. This format stores numbers in 64 bits, where 
the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.

Integer Precision:
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

Floating Precision:
The maximum number of decimals is 17.

Since floating point arithmetic is not always 100% accurate in JS it helps to multiply and divide:
Problem: 0.2 + 0.1 = 0.30000000000000004
Solution: 0.2 + 0.1 = 0.30000000000000004 and then 0.2 + 0.1 = 0.3

!! WARNING !!
JavaScript uses the + operator for both addition and concatenation. Numbers are added. Strings are concatenated.

NaN - Not a Number:
NaN is a JavaScript reserved word indicating that a number is not a legal number, but it is a special value of the number type in JavaScript. This means that the typeof NaN 
will return 'number' NaN is used to represent the result of an operation that cannot produce a normal numeric value. For example trying to do arithmetic with a non-numeric 
string, dividing zero by zero, or taking the square root of a negative number, will result in NaN (Not a Number). You can use the global JavaScript function isNaN() to find 
out if a value is a not a number. Example: let x = 100 / "Apple"; - Result: NaN

Infinity:
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. Division by 0 (zero) also generates Infinity. 
Lastly infinity is a number, typeof Infinity returns number.
EXAMPLE:
    <script>
    let myNumber = 2; 
    let txt = "";
    while (myNumber != Infinity) {
      myNumber = myNumber * myNumber;
      txt = txt + myNumber + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
    </script>
RESULTS:
    4
    16
    256
    65536
    4294967296
    18446744073709552000
    3.402823669209385e+38
    1.157920892373162e+77
    1.3407807929942597e+154
    Infinity

Hexadecimal:
JavaScript interprets numbers as hexadecimal if they are preceded by 0x. EXAMPLE: let x = 0xFF; -  By default, JavaScript displays numbers as base 10 decimals. But you can use 
the toString() method to output numbers from base 2 to base 36. Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
EXAMPLE:
    let myNumber = 32;
    myNumber.toString() will convert myNumber to a string in base 10.
    myNumber.toString(16) will convert myNumber to a string in base 16 (hexadecimal).
    myNumber.toString(2) will convert myNumber to a string in base 2 (binary).  
RESULTS:
    myNumber.toString(): "32"
    myNumber.toString(16): "20"
    myNumber.toString(2): "100000"

JavaScript Numbers as Objects:
Normally JavaScript numbers are primitive values created from literals. EXAMPLE: let x = 123; - But numbers can also be defined as objects with the keyword new. EXAMPLE: 
let y = new Number(123); - In the first case, let y = Number(23), a primitive value of the number 23 is created and assigned to the variable y. y is not an object, but a 
primitive value of the number data type. In the second case, let x = new Number(23), a Number object is created and assigned to the variable x. The object has a [[NumberData]] 
internal slot that contains the value 23. and this is what that new object looks like:
Number {
  [[NumberData]]: 23
} 
The difference is that x is an object with additional properties and methods that can be used, whereas y is simply a primitive value.

When comparing two Number objects using the strict equality operator (===) or the abstract equality operator (==), even if they have the same value, they will return false 
because they are different objects and not equal by reference. To compare their values, you can use the valueOf() method to extract the primitive value from the object and 
compare them. For primitives, JavaScript compares their values directly, while for objects, it checks whether they refer to the same object in memory. Therefore, == and === 
can have different results when comparing objects, even if they have the same properties and values. Comparing two JavaScript objects always returns false!
EXAMPLES:
    let x = new Number(500);
    let y = new Number(500);

    console.log(x == y); // false
    console.log(x === y); // false
    console.log(x.valueOf() === y.valueOf()); // true


Understanding Constructors and the 'New' Keyword in JavaScript: A Beginner-Friendly Explanation with Analogies:
To put it all together, a constructor function in JavaScript is like an instruction manual that specifies how to create an object with certain properties and behaviors. 
And the "new" keyword is like a magic wand that creates a new object based on those instructions. It's like using the instruction manual to make one toy car, but using 
the magic wand to create multiple toy cars quickly and easily. So, when you use "new" with a constructor function, it creates a new object based on the instructions in 
the constructor.


-----MDN WEB DOCS-----

Types of numbers:
A)  Integers are floating-point numbers without a fraction. They can either be positive or negative, e.g. 10, 400, or -5.
B)  Floating point numbers (floats) have decimal points and decimal places, for example 12.5, and 56.7786543.
C)  Doubles are a specific type of floating point number that have greater precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal places).

Types of number systems:
A)  Decimal - Decimal is base 10 (meaning it uses 0–9 in each column)
B)  Binary — The lowest level language of computers; 0s and 1s.
C)  Octal — Base 8, uses 0–7 in each column.
D)  Hexadecimal — Base 16, uses 0–9 and then a–f in each column. You may have encountered these numbers before when setting colors in CSS.

!!  Note: Actually, JavaScript has a second number type, BigInt, used for very, very large integers !!

!!  Note: You'll sometimes see numbers involved in arithmetic referred to as operands.  !!

!!  Note: You may sometimes see exponents expressed using the older Math.pow() method, which works in a very similar way. 
    For example, in Math.pow(7, 3), 7 is the base and 3 is the exponent, so the result of the expression is 343. Math.pow(7, 3) is equivalent to 7**3. !!

Increment and decrement operators:
For a start, note that you can't apply these directly to a number, which might seem strange, but we are assigning a variable a new updated value, not operating on the value itself.
Pre-incrementing is when you increase the value of a variable before using it in an expression. It is written with two plus signs before the variable name: ++variable. Post-incrementing 
is when you increase the value of a variable after using it in an expression. It is written with two plus signs after the variable name: variable++.
EXAMPLE:
    let num = 5;

    // pre-incrementing
    console.log(++num); // output: 6

    // post-incrementing
    console.log(num++); // output: 6
    console.log(num);   // output: 7


-----JAVASCRIPT.INFO-----

Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and the unary form. The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do 
anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
    
EXAMPLE:
    // No effect on numbers
    let x = 1;
    alert( +x ); // 1

    let y = -2;
    alert( +y ); // -2

    // Converts non-numbers
    alert( +true ); // 1
    alert( +"" );   // 0
    It actually does the same thing as Number(...), but is shorter.

EXAMPLE:
    If we want to treat them as numbers, we need to convert and then sum them:

    let apples = "2";
    let oranges = "3";

    // both values converted to numbers before the binary plus
    alert( +apples + +oranges ); // 5

    // the longer variant
    // alert( Number(apples) + Number(oranges) ); // 5

Comma:
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on. The comma 
operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
EXAMPLE:
    let a = (1 + 2, 3 + 4);

    alert( a ); // 7 (the result of 3 + 4)
Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above. Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the 
numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4. Why do we need an operator that throws away everything except 
the last expression? Sometimes, people use it in more complex constructs to put several actions in one line.
EXAMPLE:
// three operations in one line
  for (a = 1, b = 3, c = a * b; a < 10; a++) {
  ...
  }
Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.

*/
