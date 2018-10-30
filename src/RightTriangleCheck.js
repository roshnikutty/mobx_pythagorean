import React, { Component } from 'react';
import { observable, computed, decorate } from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

class RightTriangleCheck extends Component {
    constructor() {
        super();

        this.sides = [3, 4, 5]
    }

    get sortSides() {
        let largestSide = Math.max(this.sides[0], this.sides[1], this.sides[2]);
        let otherTwoSidesSquared = this.sides.filter((side) => side !== largestSide).map((side) => side * side)
        
        return this.pythagoreanTheorem(largestSide, otherTwoSidesSquared)
    }
    
    pythagoreanTheorem(largest, otherTwoSquared) {
        let largestSideSq = largest * largest
        let sumOfSquares = otherTwoSquared.reduce((total, sideSq) => total + sideSq)

        if (largestSideSq === sumOfSquares) {
            console.log(`========================================`)
            console.log(`This IS a right triangle :)`)
        }
        else {
            console.log(`XXX==========XXX=========XXX=========XXX`)
            console.log(`This is NOT a right triangle :(`)
        }
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.sortSides} className="fancyButton">Check triangle</button>
                <Devtools />
            </React.Fragment>
        );
    }
}

decorate(RightTriangleCheck, {
    sides: observable,
    sortSides: computed
})

export default observer(RightTriangleCheck);
