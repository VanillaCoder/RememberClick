import React from 'react'
import { Tiles } from "./Tile"
import andriod18 from './images/andriod18.png'
import andriod17 from './images/andriod17.jpeg'
import bulma from './images/bulma.jpg'
import buu from './images/buu.jpg'
import cell from './images/cell.jpg'
import frieza from './images/frieza.jpg'
import gohan from './images/gohan.jpeg'
import goku from './images/goku.png'
import krillin from './images/krillin.jpg'
import master from './images/master.jpeg'
import nappa from './images/nappa.jpeg'
import piccolo from './images/picolo.jpeg'
import raditz from './images/raditz.png'
import trunks from './images/trunks.jpg'
import vegeta from './images/vegeta.jpeg'
// import Score from "./Score"

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

const original = () => {
    let tiles = [
        {
            img: goku,
            clicked: false,
            name: "Goku",
        },
        {
            img: bulma,
            clicked: false,
            name: "Bulma"
        },
        {
            img: vegeta,
            clicked: false,
            name: "Vegeta"
        },
        {
            img: gohan,
            clicked: false,
            name: "Gohan"
        },
        {
            img: cell,
            clicked: false,
            name: "Cell"
        },
        {
            img: krillin,
            clicked: false,
            name: "Krillin"
        },
        {
            img: piccolo,
            clicked: false,
            name: "Piccolo"
        },
        {
            img: frieza,
            clicked: false,
            name: "Frieza"
        },
        {
            img: buu,
            clicked: false,
            name: "Buu"
        },
        {
            img: trunks,
            clicked: false,
            name: "Trunks"
        },
        {
            img: master,
            clicked: false,
            name: "Master Roshi"
        },
        {
            img: andriod17,
            clicked: false,
            name: "Andriod 17"
        },
        {
            img: andriod18,
            clicked: false,
            name: "Andriod 18"
        },
        {
            img: raditz,
            clicked: false,
            name: "Raditz"
        },
        {
            img: nappa,
            clicked: false,
            name: "Nappa"
        }

    ]
    return (tiles)
}

const score = (copy, currentTile) => {

    let copyTiles = {
        arr: [],
        score: copy.score,
        flag: copy.flag
    }
    if (copy.flag) {
        copyTiles.score = 0;
        console.log(copy)
        copyTiles = original();
        console.log(copy)
        copy.tiles.map(result => {
            if (result.name !== currentTile.name) {
                copyTiles.arr.push({ img: result.img, clicked: result.clicked, name: result.name })
            }
            else if (result.name === currentTile.name && currentTile.clicked === false) {
                copyTiles.arr.push({ img: result.img, clicked: true, name: result.name })
                copyTiles.score = copyTiles.score + 1
            }
            else {
                copyTiles.arr.push({ img: result.img, clicked: result.clicked, name: result.name })
                copyTiles.score = -1;
                console.log("YOU LOSE LOSER")
            }
        })
        return copyTiles
    }
    else {
        console.log(copy)
        copy.tiles.map(result => {
            if (result.name !== currentTile.name) {
                copyTiles.arr.push({ img: result.img, clicked: result.clicked, name: result.name })
            }
            else if (result.name === currentTile.name && currentTile.clicked === false) {
                copyTiles.arr.push({ img: result.img, clicked: true, name: result.name })
                if (copyTiles.score + 1 === 11) {
                    copyTiles.score = + 1;
                    copyTiles.flag = true;
                }
                else {
                    copyTiles.score = copyTiles.score + 1
                }
            }
            else {
                copyTiles.arr.push({ img: result.img, clicked: result.clicked, name: result.name })
                copyTiles.score = -1;
                console.log("YOU LOSE LOSER")
            }
        })
        return copyTiles
    }
}

export default class Boxes extends React.Component {

    // this is where my clicky tiles info will be stored
    state = {
        tiles: [
            {
            img: goku,
            clicked: false,
            name: "Goku",
        },
        {
            img: bulma,
            clicked: false,
            name: "Bulma"
        },
        {
            img: vegeta,
            clicked: false,
            name: "Vegeta"
        },
        {
            img: gohan,
            clicked: false,
            name: "Gohan"
        },
        {
            img: cell,
            clicked: false,
            name: "Cell"
        },
        {
            img: krillin,
            clicked: false,
            name: "Krillin"
        },
        {
            img: piccolo,
            clicked: false,
            name: "Piccolo"
        },
        {
            img: frieza,
            clicked: false,
            name: "Frieza"
        },
        {
            img: buu,
            clicked: false,
            name: "Buu"
        },
        {
            img: trunks,
            clicked: false,
            name: "Trunks"
        },
        {
            img: master,
            clicked: false,
            name: "Master Roshi"
        },
        {
            img: andriod17,
            clicked: false,
            name: "Andriod 17"
        },
        {
            img: andriod18,
            clicked: false,
            name: "Andriod 18"
        },
        {
            img: raditz,
            clicked: false,
            name: "Raditz"
        },
        {
            img: nappa,
            clicked: false,
            name: "Nappa"
        }

        ],
        score: 0,
        flag: false
    }

    componentDidMount() {
        const nodes = [].slice.call(document.querySelectorAll('li'), 0);
        const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
        const classNames = ['in', 'out'].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

        const getDirectionKey = (ev, node) => {
            const { width, height, top, left } = node.getBoundingClientRect();
            const l = ev.pageX - (left + window.pageXOffset);
            const t = ev.pageY - (top + window.pageYOffset);
            const x = (l - (width / 2) * (width > height ? (height / width) : 1));
            const y = (t - (height / 2) * (height > width ? (width / height) : 1));
            return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        }

        class Item {
            constructor(element) {
                this.element = element;
                this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
                this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
            }

            update(ev, prefix) {
                this.element.classList.remove(...classNames);
                this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
            }
        }

        nodes.forEach(node => new Item(node));
    }


    changeScore() {
        if (this.state.score > 14) {
            setTimeout(function(){ if(!alert('You win!')){window.location.reload();}; }, 50);
        }
    }


    score2(name) {

        this.setState({
            tiles: this.state.tiles.map(tile => {
                if (tile.name === name) {
                    if (tile.clicked === true) {
                        alert('You lose!')
                        window.location.reload();
                    }
                    else {
                        tile.clicked = true
                        this.setState({ score: (this.state.score + 1) }, () => {this.changeScore()})
                    }
                }
                return tile;
            })
        })
    }


    render() {


        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Score: {this.state.score}</h1>
                    </div>
                </div>
                <div className="row">
                    <ul>

                        {this.state.tiles.map(aTile => {
                            return (
                                <Tiles
                                    changeEvent={(event) => this.state}
                                    shuffleEvent={(event) => {
                                        this.score2(aTile.name)
                                        this.setState({ tiles: shuffle(this.state.tiles) })
                                    }}
                                    image={aTile.img}
                                    data={aTile.clicked}
                                ></Tiles>
                            )
                        })}
                    </ul>
                </div>
            </div>
            // </div>

        )
    }
}