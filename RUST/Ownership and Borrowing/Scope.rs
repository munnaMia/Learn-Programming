fn main(){
    // s is not valid here, it’s not yet declared
    {
        // this is a scope 
        let _s: &str = "this is a string";// s is valid from this point forward

        // do the stuff with s 
    }// this scope is now over, and s is no longer valid
}




    // In other words, there are two important points in time here:
        // 1. When s comes into scope, it is valid.
        // 2. It remains valid until it goes out of scope.