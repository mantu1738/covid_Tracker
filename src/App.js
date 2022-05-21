import { render } from "@testing-library/react";
import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";

import styles from './App.module.css';

import { fetchData } from "./api/index.js";
class App extends React.Component {

    state = {
        data:{},
    }
    
   async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
    }

    render() {
        return(
            <div className={styles.container}> 
           <Cards data = {this.state.data} />
           <CountryPicker />
            <Chart />
            <h1>Hello Everyone!</h1>
            </div>

        ) ;
    }
}

export default App;