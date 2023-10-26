
//insertion sorting algo:
fn insertion(array: [i32; 8]){
    let mut new_array: [i32; 8] = array;
    
    for i in 1..=new_array.len()-1 {
        let accumulator = new_array[i];

        let mut j = i-1;

        while j>=1 && new_array[j]>accumulator {
            new_array[j+1] = new_array[j];
            j -= 1;
        }
        new_array[j+1] = accumulator;

    }
    print!("{:?}", new_array);
}