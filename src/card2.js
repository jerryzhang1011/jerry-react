import data2 from "./data2"
import Person from "./person-info"
export default function Card2() {
    let cards = data2.map(item => {
        return <Person
                    img={item.img}
                    rate={item.rate}
                    review_count={item.review_count}
                    country={item.country}
                    des={item.des}
                    open={item.open}
                    price={item.price}
                    blue={true}/>
    })
    return (
        <div className="card2 remove_scr">
            {cards}
        </div>
    )
}