const {User,db} = require("../lib/db");
const chai = require("chai");

let user = {
    username:"leemlwando@gmail.com",
    password:"1234"

}


describe("User Schema",function(){
    describe("create user", function(){
        it("should return user object", function(done){
            User.create(user)
                .then(newUser=>{
                    expect(!newUser).to.be.false;
                    done();
                }).catch(err=>done(err));
        })
    })
})