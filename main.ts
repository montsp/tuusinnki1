input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("warning")
    radio.sendString("by")
    radio.sendString("" + (NAME))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("OK!")
    radio.sendString("by")
    radio.sendString("" + (NAME))
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Reply!OK?")
    radio.sendString("by")
    radio.sendString("" + (NAME))
})
let NAME = 0
radio.setGroup(1)
NAME = 2
