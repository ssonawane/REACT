import React, {Component} from 'react';
import Person from './Person';

class NameList extends Component {
    
    render() {
        const names = [{
            id: '1',
            name: 'sachin',
            city: 'sillod'
        }, {
            id: '2',
            name: 'swapnali',
            city: 'shevgaon'
        }, {
            id: '3',
            name: 'shreeja',
            city: 'sillod'
        }]
        return (
            <div>
                {
                    names.map(data => <Person key={data.id} name={data.name} city={data.city}/>)
                }
            </div>
        )
    }
}

export default NameList