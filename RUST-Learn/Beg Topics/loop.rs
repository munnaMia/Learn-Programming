fn main() {
    let mut counter: u32 = 0;

    let result: u32 = loop {
        counter += 1;

        if counter == 100 {
            break 100;
        }
    };

    println!("{}", result);

    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");

    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {element}");
    }

    for number in (1..10).rev(){
        println!{"{number}"}
    }
}
