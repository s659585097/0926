input.onButtonPressed(Button.A, function () {
    good.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    bubu = game.createSprite(good.get(LedSpriteProperty.X), good.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bubu.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    bubu.delete()
})
input.onButtonPressed(Button.B, function () {
    good.change(LedSpriteProperty.X, 1)
})
let bubu: game.LedSprite = null
let good: game.LedSprite = null
let bad = game.createSprite(2, 0)
good = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    basic.pause(500)
    bad.change(LedSpriteProperty.X, 1)
    if (bad.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        bad.set(LedSpriteProperty.X, 0)
        bad.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (bubu) {
        if (bubu.isTouching(bad)) {
            game.addScore(1)
            bad.set(LedSpriteProperty.X, 2)
            bad.set(LedSpriteProperty.Y, 0)
        }
    }
    if (bad.isTouching(good)) {
        game.gameOver()
    }
})
