fn main() {
    //Integer types:
    // Length	Signed	Unsigned
    // 8-bit	i8	    u8
    // 16-bit	i16	    u16
    // 32-bit	i32	    u32
    // 64-bit	i64	    u64
    // 128-bit	i128	u128
    // arch	    isize	usize

    // Number  literals
    // Decimal	98_222
    // Hex	    0xff
    // Octal	0o77
    // Binary	0b1111_0000
    // Byte (  u8 only)	b'A'

    const AGE: i32 = 12;
    println!("{AGE}");

    let number: f32 = 10.23423;
    println!("{number}");
    println!("{}", 10 / 3);

    // let n : u32 = "Hello".parse().expect("Not a number");
    // println!("{n}");

    // some numeric oprations
    let _sum = 3 + 3;
    let _sub = 3 - 3;
    let _mul = 3 * 3;
    let _div = 3 / 3;
    let _rem = 4 % 4;

    // boolean
    let _t = true;
    let _f: bool = false;

    // charecter data type
    let _c: char = 'H';
    let _ch: char = 'k';

    // tupple
    let tup: (i32, i32, i32, i32) = (23, 45, 567, 234);

    let (x, y, z, w) = tup;
    println!("{x} {y} {z} {w}");
    // The variable tup binds to the entire tuple because a tuple is considered a single compound element. To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value, like this:

    println!("{}", tup.1);

    // array
    let array_one = [34, 34, 34, 34, 234, 234];
    println!("{}",array_one[2]);

    // Here, i32 is the type of each element. After the semicolon, the number 5 indicates the array contains five elements.
    let array_two: [i32; 5] = [1, 2, 3, 4, 5];
    println!("{}",array_two[3]);


    // You write an array’s type using square brackets with the type of each element, a semicolon, and then the number of elements in the array, like so:
    // let a = [3; 5];
    // println!("{}",a);


}
