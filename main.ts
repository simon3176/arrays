input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        list.push(index)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(list[index])
    }
})
let list: number[] = []
list = []
basic.forever(function () {
	
})
