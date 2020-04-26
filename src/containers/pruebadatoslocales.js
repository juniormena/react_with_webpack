import React from  'react';
import Card from '../components/card/card'

class List extends React.Component{
    
    async componentDidMount(){
        const res = await fetch('../../assets/data.json');
        const resJson = await res.json();
        console.log(resJson);
    }
    
    render(){
        return <h1>Lista aqui</h1>
    }
}

export default List;