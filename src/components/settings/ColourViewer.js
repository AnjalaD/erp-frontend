import React from 'react'

const ColourViewer = (props) => {

    return (
        <div md style={{ backgroundColor: props.colour, margin: 10, padding: 5 }}>selected colour</div>
    )
}

export default ColourViewer
