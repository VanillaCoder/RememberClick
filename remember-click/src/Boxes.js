import React from 'react'
import { Tiles } from "./Tile"

const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



export default class Boxes extends React.Component {

    // this is where my clicky tiles info will be stored
    state = {
        tiles: [
            {
                img: "https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg",
                clicked: false,
                name: "Goku"
            },
            {
                img: "https://data.whicdn.com/images/110120618/large.png",
                clicked: false,
                name: "Bulma"
            },
            {
                img: "https://www.nautiljon.com/images/perso/00/17/vegeta_1771.jpg",
                clicked: false,
                name: "Vegeta"
            },
            {
                img: "https://pbs.twimg.com/profile_images/3727683187/fa41c0c70d778f1f88cab60b0c2b80f5_400x400.jpeg",
                clicked: false,
                name: "Gohan"
            },
        ]
    }

    render() {


        return (
            <div>
                <div className="container">
                    <div className="row">
                        {/* this is now correctly shuffling my tiles array THANK FKN GOD */}
                        <button onClick={(event) => this.setState({tiles: shuffle(this.state.tiles)})}>mix it up</button>

                    <button onClick={(event) => console.log(this.state.tiles)}>print it</button>
                </div>
            </div>
            </div >
        )
    }
}