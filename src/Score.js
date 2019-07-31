import React from 'react'

export default function Score(props) {
    console.log(props.score)
    if (props.score < 0) {
        return (
            <div>
                <h1>YOU LOSE</h1>
                <p>Game will restart if you continue clicking.</p>
            </div>
            
        )
    }
    if (props.score === 10) {
        return (
            <div>
                <h1>YOU WIN, CONGRATZ NERD</h1>
                <p>Game will restart if you continue clicking.</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Score: {props.score}</h1>
            </div>
        )
    }
}