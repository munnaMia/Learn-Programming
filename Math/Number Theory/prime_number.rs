// common way to find a prime number: O(n)
use std::io;
fn main() {
    let mut number = String::new();
    println!("Enter a number: ");
    io::stdin()
        .read_line(&mut number)
        .expect("Enter a Number please");
    let number: i32 = number.trim().parse().expect("Its not a number");
    println!("{}", prime_check(number));
}

fn prime_check(number: i32) -> bool {
    if number <= 1 {
        return false;
    }
    for i in 2..number {
        if number % i == 0 {
            return false;
        }
    }
    true
}



//Lets do some change and make it more faster:
//If will run over only odd numbers it will take half the time
fn prime_check(number: i32) -> bool {
    if number <= 1 {
        return false;
    }
    
    if number == 2 {
        return true;
    }

    for i in (3..number).step_by(2) {
        if number % i == 0 {
            return false;
        }
    }
    true
}



//now make it more fast: O(sqrt(n)) time complexity and space complexity is O(1)

fn prime_check(number: i32) -> bool {
    if number <= 1 {
        return false;
    }
    
    if number == 2 {
        return true;
    }

    let sqrt_num = ((number as f64).sqrt()) as i32;

    for i in (3..sqrt_num).step_by(2) {
        println!("{i}");
        if number % i == 0 {
            return false;
        }
    }
    true
}




// make it more faster with this algo
// Sieve of Eratosthenes 

fn prime_check(number: i32) {
    let mut array= vec![0; (number+1) as usize];  

    for i in 2..=number {
        if array[i as usize] == 0 {
            for j in (i * i..=number).step_by(j as usize) {
                array[j as usize] = 1;
            }
        }
    }

    for i in 2..=number {
        if array[i as usize] == 0 {
            println!("{} ", i);
        }
    }
}
