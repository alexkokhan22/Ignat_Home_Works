// функция - конструктор
function DeleteUserAction (userId) {
    // this = {}
    this.type = 'DELETE_USER'
    this.payload = {
        userId: userId
    }
    // return this
}

//обязательно new
const deleteUser1 = new DeleteUserAction(1);


//тоже с помощью классов
class DeleteUserAction {
    constructor(userId) {
        this.type = 'DELETE_USER'
        this.payload = {
            userId: userId
        }
    }

}

//обязательно new
const deleteUser1 = new DeleteUserAction(1);


//фабричная функция
function DeleteUserAction (userId) {
    const action = {
        type:'DELETE_USER',
        payload: {
            userId: userId
        }
    }
    return action
}

const deleteUser1 = DeleteUserAction(1);


class User {
    constructor(name) {
        this.name = name
        this.age = 12
    }
    hello (){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const user1 = new User('Alex')
user1.hello()
