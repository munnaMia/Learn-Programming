class Person {
    constructor (name, email){
        this.name = name
        this.email = email
    }

    changeName(name){
        this.name = name
    }

    changeEmail(email){
        this.email = email
    }

    sendEmail(msg){
        console.log("to: ", this.email)
        console.log("Sending massage: ", msg)
    }

    print(){
        console.log(this)
    }
}

const p1 = new Person("munna mia", "email.com");
p1.sendEmail('go of')
// console.log(p1);


//Now update the data using methods
p1.changeName("update name")
p1.changeEmail("email has been update")

// console.log(p1)

p1.print()


