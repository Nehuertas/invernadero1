input.onButtonPressed(Button.A, function () {
    basic.showString("T")
    basic.pause(500)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("H")
    basic.pause(500)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
pins.setAudioPin(AnalogPin.P1)
pins.analogWritePin(AnalogPin.P0, 344)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    while (8 > input.temperature() || input.temperature() > 30) {
        basic.showIcon(IconNames.Sad)
        music.playTone(2500, music.beat(BeatFraction.Breve))
        basic.showNumber(input.temperature())
        break;
    }
    basic.pause(2000)
    while (200 >= pins.analogReadPin(AnalogPin.P0) || pins.analogReadPin(AnalogPin.P0) >= 600) {
        basic.showIcon(IconNames.Ghost)
        music.playMelody("E - E - E - E - ", 80)
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        break;
    }
})
