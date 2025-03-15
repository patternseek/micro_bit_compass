input.calibrateCompass()
while (true) {
    if (input.compassHeading() < 45 || input.compassHeading() >= 314) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
    
    if (input.compassHeading() >= 45 && input.compassHeading() < 135) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # . . .
            # . . . .
            # # # # .
            `)
    }
    
    if (input.compassHeading() >= 135 && input.compassHeading() < 225) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
    }
    
    if (input.compassHeading() >= 225 && input.compassHeading() < 314) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
    }
    
}
