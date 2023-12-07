/*
Number literals	Example
Decimal	98_222
Hex	0xff
Octal	0o77
Binary	0b1111_0000
Byte (u8 only)	b'A'
*/

fn main() {
    let guess: u32 = "42".parse().expect("Not a number!");
    println!("{}", guess);
    // addition
    let _sum = 5 + 10;
    // subtraction
    let _difference = 95.5 - 4.3;

    // multiplication
    let _product = 4 * 30;

    // division
    let _quotient = 56.7 / 32.2;
    let _truncated = -5 / 3; // Results in -1

    // remainder
    let _remainder = 43 % 5;
    let _t = true;

    let _f: bool = false; // with explicit type annotation

    let _x = 2.0; // f64

    let _y: f32 = 3.0; // f32

    let _c = 'z';
    let _z: char = 'ℤ'; // with explicit type annotation
    let _heart_eyed_cat = '😻';

    // The Tuple Type
    // A tuple is a general way of grouping together a number of values with a variety of types into one compound type. Tuples have a fixed length: once declared, they cannot grow or shrink in size.
    //
    // We create a tuple by writing a comma-separated list of values inside parentheses. Each position in the tuple has a type, and the types of the different values in the tuple don’t have to be the same. We’ve added optional type annotations in this example:

    let tup: (u32, f32, char) = (23, 435.34, 'A');
    let tup2 = (23, 435.34, 'A');
    let (x, _y, _z) = tup;
    println!("{}", x);
    println!("{}", tup2.1);

    let _a = [1, 2, 3, 4, 5];
    let _a: [i32; 5] = [1, 2, 3, 4, 5];
    let _a = [3; 5];
}
