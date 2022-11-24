//rafce
const Saludo = ( {name, lastname, age, action} ) => {

    const title = {
        border: 'solid blue 2px',
        margin: '21px',
        padding: '21px'
    }

   
    // const {name, age} = props

    return (
        <div style={title}>
            
        <div>Saludos {name} {lastname}</div>
        <div>Tienes {age} años</div>
        <button onClick={action}> Click</button>
        </div>
    )
    }

    export default Saludo


    // const Saludo = (props) => {
    //     return (
    //         <>
    //         <div>Saludos{props.name}</div>
    //         <div>Tienes{props.age} años</div>
    //         </>
    //     )
    //     }
    
    //     export default Saludo