import hero_img from "./2.png"


export default function Hero () {
    const date = new Date()
    return (
        <div className="hero">
            <img src={hero_img}/>
            <h1>Online Experiences</h1>
            <p className="descri">Excitingly, the shimmering stars illuminate the tranquil night, casting a mesmerizing and serene ambiance over the landscape.</p>
        </div>
    )
}