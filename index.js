
function superbowlWin(array){
    let found = array.find(value => value.result === "W")
    if (found){
        return found.year
    } else{
        return undefined
    }
}

