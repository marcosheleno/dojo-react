import React, { Component } from 'react'
import Container from './List/Container'
import data from '../data/my.moovies.list.json'

class MyCustomList extends Container{
    rows = {}

    constructor(props){
        super(props);
        this.rows = data
    }
}

export default MyCustomList