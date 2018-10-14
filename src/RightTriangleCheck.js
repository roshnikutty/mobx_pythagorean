import React, { Component } from 'react';
import { observable, computed, decorate } from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

class RightTriangleCheck extends Component {
    constructor() {
        super();
        
        this.sides = [3, 4, 5]
        
    }

    // pythagoreanTheorem = (largestSide, otherTwoSides) => {
    //     let largestSideSq = largestSide * largestSide
    //     let sumOfSquares = otherTwoSides.reduce((total, side) => total + side * side)

    //     largestSideSq === sumOfSquares ? console.log('This is a right triangle') :
    //         console.log('This is not a right triangle')
    // }

    get pythagoreanTheorem() {
        console.log('finding largest side of the triangle')
        let largestSide = Math.max(this.sides[0], this.sides[1], this.sides[2]);
        let otherTwoSides = this.sides.filter((side) => side !== largestSide)
        let largestSideSq = largestSide * largestSide
        let sumOfSquares = otherTwoSides.reduce((total, side) => total + side * side)

        if (largestSideSq === sumOfSquares) {
            console.log('This is a right triangle')
            return true
        }
        console.log('This is not a right triangle')
        return false
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={()=>this.pythagoreanTheorem()}>Check triangle</button>
                <Devtools />
            </React.Fragment>
        );
    }
}
decorate(RightTriangleCheck, {
    sides: observable,
    pythagoreanTheorem: computed
})

//observer makes sure that the RightTriangleCheck component reacts 
//when an observable value changes; same as @observer from mobx-react
export default observer(RightTriangleCheck);