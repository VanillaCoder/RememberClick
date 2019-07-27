import React from 'react'


const styles = {
    cardStyle: {
        width: "14rem"
    }
}
export function Tiles(props) {
    return (
        <div>
            <div className="card" style={styles.cardStyle}>
                <img 
                onChange={props.changeEvent}
                onClick={props.shuffleEvent}
                src={props.image} 
                data-clicked={props.data}
                className="card-img-top" alt="..."></img>

            </div>
        </div>
    )
}