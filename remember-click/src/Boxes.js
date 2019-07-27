import React from 'react'
import { Tiles } from "./Tile"


// does what it says
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


const score = (currentState, currentTile) => {
    let copy = currentState;
    let copyTiles = []
    copy.tiles.map(result => {
        if (result.name !== currentTile.name) {
            copyTiles.push({ img: result.img, clicked: result.clicked, name: result.name })
            console.log(copyTiles)
        }
        else if (result.name === currentTile.name && currentTile.clicked === false) {
            copyTiles.push({ img: result.img, clicked: true, name: result.name })

        }
        else {
            console.log("YOU LOSE LOSER")
        }
        return console.log("adding to score")
    })

    // for (let i = 0; i < copy.tiles.length; i++) {
    //     if (copy.tiles[i].name === currentTile.name && currentTile.clicked === false) {
    //         copy.tiles[i].clicked = true;
    //         copy.tiles = shuffle(copy.tiles)
    //         console.log(currentState.tiles)
    //         console.log(copy.tiles)
    //     }
    //     else {
    //         console.log("FUCK")
    //     }
    // }
    return copyTiles;
}

export default class Boxes extends React.Component {

    // this is where my clicky tiles info will be stored
    state = {
        tiles: [
            {
                img: "https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg",
                clicked: false,
                name: "Goku",
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
            {
                img: "https://pbs.twimg.com/profile_images/1264145307/cell1_400x400.jpg",
                clicked: false,
                name: "Cell"
            },
            {
                img: "https://static.giantbomb.com/uploads/original/16/160136/2897265-5269474136-qSCdi.jpg",
                clicked: false,
                name: "Krillin"
            },
            {
                img: "https://pbs.twimg.com/profile_images/2330752766/cwnh2ez5br7lokx45ilu_400x400.jpeg",
                clicked: false,
                name: "Piccolo"
            },
            {
                img: "https://pbs.twimg.com/profile_images/1095267592623710208/MM1C2fOF.jpg",
                clicked: false,
                name: "Frieza"
            },
            {
                img: "https://pm1.narvii.com/6686/53a0295bbf28c5df74387e58e64c9a88f14fb211_hq.jpg",
                clicked: false,
                name: "Buu"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWSLRoPcEMSHs5vKV75Caqen74qS-9NmPmJn_UZ2NhaSxFgrpgA",
                clicked: false,
                name: "Trunks"
            }
        ],
        score: 0
    }
    render() {


        return (
            <div>
                <div className="container">
                    <div className="row">
                        {/* this is now correctly shuffling my tiles array THANK FKN GOD */}

                        {this.state.tiles.map(aTile => {
                            return (
                                <Tiles
                                    changeEvent={(event) => this.state}
                                    shuffleEvent={(event) => {
                                        // this.setState({ tiles: shuffle(this.state.tiles) })
                                        this.setState({tiles: score(this.state, aTile)})
                                    }}
                                    image={aTile.img}
                                    data={aTile.clicked}
                                ></Tiles>
                            )
                        })}
                    </div>
                </div>
            </div >
        )
    }
}