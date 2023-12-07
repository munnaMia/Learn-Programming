fn main() {
    let num = 9;

    if num < 10 {
        println!("9 is less then 10");
    } else {
        println!("9 is greater then 10");
    }

    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    let n = if true {9} else {0};
    println!("{}",n);
}
