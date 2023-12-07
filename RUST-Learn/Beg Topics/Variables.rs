fn main() {
    const CONST_VARIABLE: i32 = 34;
    println!("{CONST_VARIABLE}");
    let mut x = 3;
    println!("{}", x);
    x = 34;
    println!("{x}");

    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}
