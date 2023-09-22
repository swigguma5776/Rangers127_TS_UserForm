import MyClass from './MyClass';



const loginform: HTMLElement | null = document.getElementById('loginForm')

loginform?.addEventListener("submit", (event) => {
    event.preventDefault()
    // window.location.reload()
    const user: HTMLInputElement | null = document.querySelector("#userInput")
    const age: HTMLInputElement | null = document.querySelector("#ageInput")
    console.log(user?.value, age?.value )
  
    const myUser: MyClass = new MyClass(user?.value, age?.value)
    console.log(myUser)

    const userInfo: HTMLDivElement | null = document.querySelector('#user-info')
    console.log(userInfo)

    
    // document.querySelector('#user-info')?.insertAdjacentHTML("beforeend", `<h2>Hello User: ${myUser.user}<h2>` )

    if (userInfo) {
        userInfo.innerHTML = `<h1>Hello New User: ${myUser.user}<h1>`
    }
})










// function doSomething(e: Event):void{
//     e.preventDefault()
//     let name: HTMLElement | null = document.querySelector('#user-name')
//     let age: HTMLElement| null = document.querySelector('#user-age')

//     console.log(name, age)
// }