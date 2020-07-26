import React from 'react'

export default class EventsContainer extends React.Component {

    render(){
        console.log(this.props)
        return(
            <div style={{width: '100%'}}>
                <header>This is my Events Container</header>

                {/* <h2>map through events here</h2> */}
                {this.props.events.map(event => {
                    return(
                        <div style={{maxWidth: '50%', height: 'auto', margin: 'auto'}}>
                            <h2>{event.summary}</h2>
                    <h3>Organized by : {event.organizer.displayName}</h3>
                            <br/>
                    <p>{event.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}