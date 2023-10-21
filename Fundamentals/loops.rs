fn main() {


    // a infinite loop 
    // loop{
    //     println!("ok")
    // }




    // let mut counter = 0;

    // let result = loop {
    //     counter += 1;

    //     if counter == 10 {
    //         break;
    //     }
    // };

    // println!("The result is {result}");





    // // Loop Labels to Disambiguate Between Multiple Loops
    // let mut count = 0;
    // 'counting_up: loop {
    //     println!("count = {count}");
    //     let mut remaining = 10;

    //     loop {
    //         println!("remaining = {remaining}");
    //         if remaining == 9 {
    //             break;
    //         }
    //         if count == 2 {
    //             break 'counting_up;
    //         }
    //         remaining -= 1;
    //     }

    //     count += 1;
    // }
    // println!("End count = {count}");




    // let mut number = 3;

    // while number != 0 {
    //     println!("{number}!");

    //     number -= 1;
    // }

    // println!("LIFTOFF!!!");





    // let array = [1, 2, 3, 4, 5];

    // // while index < 5 {
    // //     println!("array index is {index} and value is {}", array[index]);
    // //     index += 1;
    // // }

    // for element in array {
    //     println!("element is {element}");
    // }




    for i in (1..10).rev(){
        println!("{i}")
    }





}