fn main() {
    //this is the main function.
    let x = return_fn(34);
    println!("{x}")


    // another_fn(12, 'm');
}

// fn another_fn(x: u16 , name: char){
//     println!("another function. {x} {name}");
// }


fn return_fn (x: i16) -> i32 {
    (x + 102).into() // it will return into is convert i16 __> i32
}