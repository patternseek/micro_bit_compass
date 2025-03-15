input.calibrate_compass()
while True:
    if input.compass_heading() < 45 or input.compass_heading() >= 314:
        basic.show_leds("""
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            """)
    if input.compass_heading() >= 45 and input.compass_heading() < 135:
        basic.show_leds("""
            # # # # .
            # . . . .
            # # . . .
            # . . . .
            # # # # .
            """)
    if input.compass_heading() >= 135 and input.compass_heading() < 225:
        basic.show_leds("""
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            """)
    if input.compass_heading() >= 225 and input.compass_heading() < 314:
        basic.show_leds("""
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            """)