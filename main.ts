OLED.init(128, 64)
tinkercademy.crashSensorSetup(DigitalPin.P0)
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        OLED.writeStringNewLine("Bine ati venit!")
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(5000)
        OLED.clear()
        OLED.writeStringNewLine("La revedere!")
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(2000)
        OLED.clear()
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
