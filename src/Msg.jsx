import "./Product.css"

export default function Msg({userName , textColor}){
    return(
        <h3 className="Product" style = {{color : textColor}}>Hello , <b>{userName}</b></h3>
    )
}