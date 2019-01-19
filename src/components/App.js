import React from 'react';
import { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null,
        };
        this.fetchFilters = this.fetchFilters.bind(this);
        this.fetchFruit= this.fetchFruit.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState({ filters }));
    }

    fetchFruit() {
        fetch('/api/fruit')
            .then(res => res.json())
            .then(fruit => this.setState({ fruit }));
    }

    updateFilter = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    render() {
        return (
            <FruitBasket
                fruit={this.state.fruit}
                filters={this.state.filters}
                currentFilter={this.state.currentFilter}
                updateFilterCallback={this.updateFilter}
            />
        );
    }

}

