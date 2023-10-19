//by default rust variables are immutable.

fn main(){
    let mut age = 23; // adding mut to make my variable mutable.
    println!("age is {age}");
    let name = "Md Munna Mia";
    age = 34;
    println!("age is {age}");
    println!("name is {name}");


    //constent variable
    const CLCK: u32 = 23*8;
    println!("{CLCK}");


    // block and scope 
    let x = 10;

    {
        let x = 20;
        println!("{x}");
    }
    println!("{x}")



    // in this code we can see we can mutate the type of variable
    // let mut string = "     ";
    // string = string.len();

    // println!("{string}");
}