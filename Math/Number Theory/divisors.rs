fn main(){
    let number: f64 = 20.0;


    for i in 1..number as i32 {
        if number as i32 %i == 0 {
            println!("{}",i);
        }
    }
}
