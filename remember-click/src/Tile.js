import React from 'react'


const styles = {
    cardStyle: {
        width: "18rem"
    }
}
export function Tiles(props) {
    return (
        <div>
            <div className="card" style={styles.cardStyle}>
                <img src={props.image} className="card-img-top" alt="..."></img>

            </div>
        </div>
    )
}