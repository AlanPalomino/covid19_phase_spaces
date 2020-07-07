import React, {Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';
import { Dropdown, Button } from 'semantic-ui-react';

class DropChart extends Component{

    constructor (props) {
        super(props)
        this.dropMenuData = Object.keys(this.props.data)
        this.db = this.props.data
        this.state = {
            choice: "Afghanistan",
            chartData: {}
            }
            this.state["chartData"] = {
                labels: this.db[this.state.choice].map(d => new Date(d["dateRep"])),
                datasets: [{
                    label: 'Casos',
                    data: this.db[this.state.choice].map(d => d["cases"]),
                    borderColor: "#3e95cd",
                    fill: false
                }]
            }
        }}