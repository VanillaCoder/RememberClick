import React from 'react'


const styles = {
    cardStyle: {
        width: "12.5rem",
        height: "12.5rem"
    }
}

//testing
export function Tiles(props) {
    return (
        <li
            onChange={props.changeEvent}
            onClick={props.shuffleEvent}
            data-clicked={props.data}
            >
            <a class="normal">
            </a>
            <div class="info">
                <div className="card" style={styles.cardStyle}>
                    <img
                        style={styles.cardStyle}
                        src={props.image}
                        className="card-img-top" alt="..."></img>

                </div>
            </div>
        </li>
    )
}


//working sample
// export function Tiles(props) {
//     return (
//         <div>
//             <div className="card" style={styles.cardStyle}>
//                 <img 
//                 style={styles.cardStyle}
//                 onChange={props.changeEvent}
//                 onClick={props.shuffleEvent}
//                 src={props.image} 
//                 data-clicked={props.data}
//                 className="card-img-top" alt="..."></img>

//             </div>
//         </div>
//     )
// }