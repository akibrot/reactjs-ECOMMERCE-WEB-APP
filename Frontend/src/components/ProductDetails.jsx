import React from 'react'

function ProductDetails(props) {
    return (
        <div>
            <h1>product details</h1>
            {console.log(props.location.state)}
            
        </div>
    )
}

export default ProductDetails
