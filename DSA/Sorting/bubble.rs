fn selection(array: [i32; 8]){
    let mut new_array: [i32; 8] = array;

    for i in 0..=new_array.len()-2{
        for j in  i+1..=new_array.len()-1{
            if new_array[i] > new_array[j]{
                let temp = new_array[i];
                new_array[i] = new_array[j];
                new_array[j] = temp;
            }
        }
    }

    println!("{:?}", new_array);
}
