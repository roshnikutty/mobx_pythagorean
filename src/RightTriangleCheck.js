import React, { Component } from 'react';
import { observable, computed, decorate } from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

class RightTriangleCheck extends Component {
    constructor() {
        super();

        this.sides = [3, 4, 5]
    }

    get pythagoreanTheorem() {

        let largestSide = Math.max(this.sides[0], this.sides[1], this.sides[2]);
        let otherTwoSides = this.sides.filter((side) => side !== largestSide)
        let largestSideSq = largestSide * largestSide
        let sumOfSquares = otherTwoSides.reduce((total, side) => total + (side * side))
        // let sumOfSquares = otherTwoSides[0]*otherTwoSides[0] + otherTwoSides[1]*otherTwoSides[1]
        
console.log(sumOfSquares)
        if (largestSideSq === sumOfSquares) {
            console.log('This is a right triangle')
            return true
        }
        else {
            console.log('This is not a right triangle')
            return false
        }
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.pythagoreanTheorem} className="fancy">Check triangle</button>
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