<<<<<<< HEAD
import React, { Component } from 'react';

interface Props {
  forecasts: any[];
}

export interface IState {
  forecasts: any[],
  loading: boolean
}

export class FetchData extends React.Component<Props, IState> {
  static displayName = FetchData.name;

  static defaultProps: Props = {
    forecasts: []
}

  state: Readonly<IState> = { 
    forecasts: new Array<any>(), 
    loading: true };

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts: any[]) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast:any) =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
=======
import React, { Component } from 'react';

interface Props {
  forecasts: any[];
}

export interface IState {
  forecasts: any[],
  loading: boolean
}

export class FetchData extends React.Component<Props, IState> {
  static displayName = FetchData.name;

  static defaultProps: Props = {
    forecasts: []
}

  state: Readonly<IState> = { 
    forecasts: new Array<any>(), 
    loading: true };

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts: any[]) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast:any) =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
>>>>>>> b8ef9e1bfc621577860a6cfbc89b75f90aa25004