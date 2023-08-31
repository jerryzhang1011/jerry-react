import star from "./4.png"
export default function Person (prop) {
    let a
    if (prop.open === 0) {
        a = "SOLD OUT"
    } else {
        a = "ONLINE"
    }
    let b
    if (prop.blue === true) {
        b = "blue_border"
    } else {
        b = "pink_border"
    }
    return (
        <div className={`person ${b}`}>
            <div className="sold-out">{a}</div>
            <img className="people-img" src={prop.img}/>
            <div className="state">
                <img className="star-img" src={star}/>
                <span>{prop.rate}</span>
                <span className="gray">({prop.review_count}) • </span>
                <span className="gray">{prop.country}</span>         
            </div>
            <p className="gray">{prop.des}</p>
            <p>
                <span className="bold">From $</span>
                <span className="bold">{prop.price}</span>
                <span className="gray"> / person</span>
            </p>
        </div>
    )
}