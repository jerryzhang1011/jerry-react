import Person from "./person-info"
import data from "./data"


export default function Card(array_of_Person) {
    let a = data()
    const cards = a.map(item => {
        return (
            <Person
                    img={item.img}
                    rate={item.rate}
                    review_count={item.review_count}
                    country={item.country}
                    des={item.des}
                    open={item.open}
                    price={item.price}/>
        )
    })

    return (
        <div className="card remove_scr">
            {cards}
        </div>
    )
}