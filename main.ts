input.onButtonPressed(Button.A, function () {
    radio.sendString("OK!")
    radio.sendString("by")
    radio.sendString("" + (NAME))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Come over here!")
    radio.sendString("by")
    radio.sendString("" + (NAME))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NO!")
    radio.sendString("by")
    radio.sendString("" + (NAME))
})
let NAME = 0
radio.setGroup(1)
