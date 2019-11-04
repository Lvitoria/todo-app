import React, {Component} from 'react'

export default class Grid extends Component{
        toCssClasses(numbers){
            const cols = numbers ? numbers.slipt(' ') : []

            let classes = ''

            if(cols[0]) classes += `col-xs-${cols[0]}`
            if(cols[1]) classes += `col-xs-${cols[1]}`
            if(cols[2]) classes += `col-xs-${cols[2]}`
            if(cols[3]) classes += `col-xs-${cols[3]}`
        }
}