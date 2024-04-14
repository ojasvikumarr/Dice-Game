function printhello(){
   console.log("Hello!!");
}

export default function Button(){
    return(
        <button onClick={printhello}>Click me!</button>
    )
}