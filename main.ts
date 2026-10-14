namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playing)) {
        playing = true
        info.startCountdown(29)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playing)) {
        playing = true
        info.startCountdown(41)
    }
})
let sitting = 0
let moveX = 0
let playing = false
let ball: Image[] = []
let bouncer: number[] = []
let deadball = null
scene.setBackgroundColor(10)
ball.push(img`
    . . 9 9 9 9 . . 
    . 9 8 8 8 8 9 . 
    9 8 6 6 6 8 8 9 
    9 8 6 8 8 6 8 9 
    9 8 6 8 8 6 8 9 
    9 8 6 6 6 8 8 9 
    . 9 8 8 8 8 9 . 
    . . 9 9 9 9 . . 
    `)
ball.push(img`
    . . 2 5 5 7 . . 
    . f 8 8 8 8 f . 
    5 8 2 6 6 2 8 7 
    2 7 6 2 2 6 5 7 
    5 5 6 2 2 6 7 7 
    2 8 2 6 6 2 8 7 
    . f 8 8 8 8 f . 
    . . 9 7 7 7 . . 
    `)
ball.push(img`
    . . f 9 9 f . . 
    . f 7 8 8 7 f . 
    f 7 3 9 9 3 7 f 
    9 8 9 3 6 9 8 9 
    9 8 9 6 3 9 8 9 
    f 7 3 9 9 3 7 f 
    . f 7 8 8 7 f . 
    . . f 9 9 f . . 
    `)
let catcher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    5 . . . . . . . . . . . . . . 5 
    1 5 5 4 . . . . . . . . 4 5 5 1 
    f d e 5 4 . . . . . . 4 5 e d f 
    1 f d e 5 4 7 7 7 7 4 5 e d f 1 
    1 1 f d e e e e e e e e d f 1 1 
    . 1 e f d e e e e e e d f e 1 . 
    . 1 e f d e e e e e e d f e 1 . 
    . 1 e f d e e e e e e d f e 1 . 
    . 1 e f d e e e e e e d f e 1 . 
    . . 1 f d e e e e e e d f 1 . . 
    . . . 1 d e e e e e e d 1 . . . 
    . . . . 1 d d d d d d 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    `, 0)
catcher.bottom = scene.screenHeight() - 4
catcher.setStayInScreen(true)
info.setScore(0)
game.onUpdate(function () {
    moveX = controller.dx()
    if (moveX != 0) {
        sitting = 0
        catcher.x += moveX
    }
})
info.onCountdownEnd(function(){
    playing=false
    game.gameOver(false)
}

)