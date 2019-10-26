import React from 'react'
import { Tiles } from "./Tile"
import Score from "./Score"

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
            img: "https://pbs.twimg.com/profile_images/2880585720/3c8d9c08b5883565ae50767935ce72cb.jpeg",
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
        },
        {
            img: "https://pbs.twimg.com/profile_images/429191657729191936/mqK5hvRN.jpeg",
            clicked: false,
            name: "Master Roshi"
        },
        {
            img: "https://pbs.twimg.com/profile_images/2863940763/eca91c3d40fb1e488ce3981866a9fb46.jpeg",
            clicked: false,
            name: "Andriod 17"
        },
        {
            img: "http://images6.fanpop.com/image/polls/1469000/1469994_1428940880270_full.png?v=1428940921",
            clicked: false,
            name: "Andriod 18"
        },
        {
            img: "https://pbs.twimg.com/profile_images/3744522071/01e065ec24704c79c306f2a496312773.png",
            clicked: false,
            name: "Raditz"
        },
        {
            img: "https://pbs.twimg.com/profile_images/3478307819/4cc86b08ae2170b1da45be2ff40ffefd.jpeg",
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
                img: "https://pbs.twimg.com/profile_images/2880585720/3c8d9c08b5883565ae50767935ce72cb.jpeg",
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
            },
            {
                img: "https://pbs.twimg.com/profile_images/429191657729191936/mqK5hvRN.jpeg",
                clicked: false,
                name: "Master Roshi"
            },
            {
                img: "https://pbs.twimg.com/profile_images/2863940763/eca91c3d40fb1e488ce3981866a9fb46.jpeg",
                clicked: false,
                name: "Andriod 17"
            },
            {
                img: "http://images6.fanpop.com/image/polls/1469000/1469994_1428940880270_full.png?v=1428940921",
                clicked: false,
                name: "Andriod 18"
            },
            {
                img: "https://pbs.twimg.com/profile_images/3744522071/01e065ec24704c79c306f2a496312773.png",
                clicked: false,
                name: "Raditz"
            },
            {
                img: "https://pbs.twimg.com/profile_images/3478307819/4cc86b08ae2170b1da45be2ff40ffefd.jpeg",
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
        if (this.state.score === 9) {
            alert("You win!")
            window.location.reload()
        }
        else {
            this.setState({ score: (this.state.score + 1) })
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
                    tile.clicked = true
                    this.changeScore();
                }
                return tile;
            })
        })
    }


    render() {


        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Score score={this.state.score}></Score>

                    </div>
                    <div className="row">
                        {this.state.tiles.map(aTile => {
                            return (
                                <Tiles
                                    changeEvent={(event) => this.state}
                                    shuffleEvent={(event) => {
                                        this.score2(aTile.name)
                                        // let temp = (score(this.state, aTile))
                                        // this.setState({ tiles: temp.arr, score: temp.score, flag: temp.flag })
                                        this.setState({ tiles: shuffle(this.state.tiles) })
                                    }}
                                    image={aTile.img}
                                    data={aTile.clicked}
                                ></Tiles>
                            )
                        })}
                    </div>
                </div>
                //testing here
                <header>
                    <div class="container">
                        <h1>Direction-aware hover effect</h1>
                        <p>CSS &amp; bits of JS</p>
                    </div>
                </header>
                <div class="container">
                    <ul>
                        <li>
                            <a class="normal" href="#">
                                <svg viewBox="0 0 80 76" x="0px" y="0px">
                                    <g>
                                        <path d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"></path>
                                    </g>
                                </svg>
                            </a>
                            <div class="info">
                                <Tiles>
                                    image="https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg"
                                </Tiles>
                                <h3>Single-origin coffee whatever</h3>
                                <p>Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts.</p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div >
        )
    }
}