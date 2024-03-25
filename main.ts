namespace SpriteKind {
    export const BlueDoor = SpriteKind.create()
    export const YellowDoor = SpriteKind.create()
    export const BrownDoor = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const Table = SpriteKind.create()
    export const Chair = SpriteKind.create()
    export const Notebook = SpriteKind.create()
    export const Exits = SpriteKind.create()
    export const Baldi = SpriteKind.create()
    export const Playtime = SpriteKind.create()
    export const Principal = SpriteKind.create()
    export const BSoda = SpriteKind.create()
    export const ZestyBar = SpriteKind.create()
    export const Quarter = SpriteKind.create()
    export const Scissors = SpriteKind.create()
    export const Lock = SpriteKind.create()
    export const Keys = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Notebook, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    NotebooksVar += 1
    Stamina.value = 100
    Thinkpad = true
})
function HUD2 () {
    Inventory2()
    HowMuchLeft = textsprite.create("0")
    HowMuchLeft.setOutline(1, 15)
    HowMuchLeft.setFlag(SpriteFlag.RelativeToCamera, true)
    HowMuchLeft.setPosition(9, 10)
    NeedRest = textsprite.create("NEED REST")
    NeedRest.setOutline(1, 15)
    NeedRest.setFlag(SpriteFlag.RelativeToCamera, true)
    NeedRest.setPosition(30, 102)
    Stamina = statusbars.create(50, 6, StatusBarKind.Energy)
    Stamina.max = 100
    Stamina.setBarBorder(1, 15)
    Stamina.value = 100
    Stamina.setPosition(30, 110)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile21`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(54, 26), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(54, 27), assets.tile`myTile`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    CurrentItem = Inv.get_items()[Inv.get_number(ToolbarNumberAttribute.SelectedIndex)]
    if (CurrentItem == Item_List_Inv[1]) {
        Inv.get_items().removeAt(Inv.get_number(ToolbarNumberAttribute.SelectedIndex))
        Stamina.value = 200
        Inv.update()
    } else if (CurrentItem == Item_List_Inv[0]) {
        Inv.get_items().removeAt(Inv.get_number(ToolbarNumberAttribute.SelectedIndex))
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f 8 . 8 . 8 . 8 f . . . . . . 
            . f . 8 . 8 . 8 . f . . . . . . 
            . f 8 . 8 . 8 . 8 f f f f f f f 
            . f f 8 . 8 . 8 . 8 . 8 . 8 . f 
            . . f . 8 . 8 . 8 . 8 . 8 . 8 f 
            . . f 8 . 8 . 8 . 8 . 8 . 8 f f 
            . f f . 8 . 8 . 8 . 8 . 8 . f . 
            f f . 8 . 8 . 8 . 8 . 8 f f . . 
            f . 8 . 8 . 8 . 8 . 8 . f . . . 
            f 8 . 8 . 8 f f . 8 . 8 f f . . 
            f . 8 . 8 f f f f . 8 . 8 f f . 
            f 8 . 8 f f . . f f . 8 . f f . 
            f f f f f . . . . f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 44, Render.getAttribute(Render.attribute.dirY) * 44)
        Inv.update()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BlueDoor, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        f f f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f 8 f . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        `)
    timer.after(3000, function () {
        otherSprite.setImage(img`
            f f f f f f f f f f f f f f f f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 f f f 8 8 f f f 8 8 8 f 
            f 8 8 8 f 8 f 8 8 f 8 f 8 8 8 f 
            f 8 8 8 f f f 8 8 f f f 8 8 8 f 
            f 8 8 8 8 8 f 8 8 f 8 f 8 8 8 f 
            f 8 8 8 f f f 8 8 f f f 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f f f f f f f f f f f f f f f f 
            `)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.YellowDoor, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    timer.after(3000, function () {
        otherSprite.setImage(img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile18`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
})
function ItemSpawn () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        BSoda = sprites.create(img`
            . . . . . f f f f f f . . . . . 
            . . . . f b b b b b b f . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 f f f 8 8 f . . . . 
            . . . . f 8 f 8 8 f 8 f . . . . 
            . . . . f 8 f f f 8 8 f . . . . 
            . . . . f 8 f 8 8 f 8 f . . . . 
            . . . . f 8 f f f 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . f 8 8 8 8 8 8 f . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.BSoda)
        tiles.placeOnTile(BSoda, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile14`)) {
        Zesty_Bar = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . f f . . . 
            . . . . . . . . . f f e f f . . 
            . . . . . . . . f f e f e f f . 
            . . . . . . . f f e f e f e e f 
            . . . . f f f e e f e f e f f . 
            . . . f c f f f f e f e f . . . 
            . . . . f c c c f f e f . . . . 
            . . . f c c c c f f f . . . . . 
            . f f c c c c c c f . . . . . . 
            f c c c c c c f f c f . . . . . 
            . f c c c c f . f f f . . . . . 
            . . f c f f . . . . . . . . . . 
            . . . f . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ZestyBar)
        tiles.placeOnTile(Zesty_Bar, value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ZestyBar, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Inv.get_items().push(Item_List_Inv[1])
    Inv.update()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Exits, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Exits += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BSoda, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Inv.get_items().push(Item_List_Inv[0])
    Inv.update()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile15`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
})
function Player_Creator () {
    Student = Render.getRenderSpriteInstance()
    Render.setAttribute(Render.attribute.wallZScale, 1.3)
    Render.setSpriteAttribute(Student, RCSpriteAttribute.ZOffset, 3)
    Render.moveWithController(2, 3, 0)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Inv.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Baldi, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile10`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
})
function Furniture () {
    for (let value of tiles.getTilesByType(assets.tile`tile9`)) {
        BlueDoor = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 f f f 8 8 f f f 8 8 8 f 
            f 8 8 8 f 8 f 8 8 f 8 f 8 8 8 f 
            f 8 8 8 f f f 8 8 f f f 8 8 8 f 
            f 8 8 8 8 8 f 8 8 f 8 f 8 8 8 f 
            f 8 8 8 f f f 8 8 f f f 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.BlueDoor)
        tiles.placeOnTile(BlueDoor, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile12`)) {
        YellowDoor = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f . . . . . . . . . . f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.YellowDoor)
        tiles.placeOnTile(YellowDoor, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile13`)) {
        BrownDoor = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e f e f 
            f e e e e e e e e e e e e f e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.BrownDoor)
        tiles.placeOnTile(BrownDoor, value)
    }
    timer.after(300, function () {
        for (let value2 of tiles.getTilesByType(assets.tile`tile7`)) {
            BrownDoor = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Table)
            tiles.placeOnTile(BrownDoor, value2)
            Notebooks_List = [
            sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f c c c c c c f 1 c f . . 
                . . . f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Notebook),
            sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f 1 1 1 1 1 1 f 1 1 f . . 
                . . . f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Notebook),
            sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f 4 4 4 4 4 4 f 1 e f . . 
                . . . f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Notebook),
            sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f 5 5 5 5 5 5 f 1 4 f . . 
                . . . f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Notebook),
            sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f 6 6 6 6 6 6 f 1 8 f . . 
                . . . f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Notebook),
            sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f 9 9 9 9 9 9 f 1 6 f . . 
                . . . f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Notebook),
            sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f 2 2 2 2 2 2 f 1 e f . . 
                . . . f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Notebook)
            ]
            tiles.placeOnTile(Notebooks_List[randint(1, 6)], value2)
        }
        for (let value of tiles.getTilesByType(assets.tile`tile4`)) {
            BrownDoor = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                f e e e e e e e e e e e e e e f 
                f f f f e f f f f f f e f f f f 
                . . . f e f . . . . f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f f f . . . . f f f . . . 
                `, SpriteKind.Table)
            tiles.placeOnTile(BrownDoor, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`tile3`)) {
            BrownDoor = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f e e e e e e f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f e e e e e e e e f . . . 
                . . . f e f f f f f f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f e f . . . . f e f . . . 
                . . . f f f . . . . f f f . . . 
                `, SpriteKind.Chair)
            tiles.placeOnTile(BrownDoor, value)
        }
    })
}
function Inventory2 () {
    HoldingItemName = textsprite.create("")
    HoldingItemName.setOutline(1, 15)
    HoldingItemName.setPosition(92, 26)
    HoldingItemName.setFlag(SpriteFlag.RelativeToCamera, true)
    Inv = Inventory.create_toolbar([], 3)
    Inv.set_color(ToolbarColorAttribute.BoxOutline, 6)
    Inv.set_color(ToolbarColorAttribute.BoxBackground, 7)
    Inv.set_color(ToolbarColorAttribute.BoxSelectedOutline, 1)
    Inv.setPosition(124, 11)
    Inv.setFlag(SpriteFlag.RelativeToCamera, true)
    Item_List_Inv = [
    Inventory.create_item("B-Soda", img`
        . . . . . f f f f f f . . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 f f f 8 8 f . . . . 
        . . . . f 8 f 8 8 f 8 f . . . . 
        . . . . f 8 f f f 8 8 f . . . . 
        . . . . f 8 f 8 8 f 8 f . . . . 
        . . . . f 8 f f f 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . . f f f f f f . . . . . 
        `),
    Inventory.create_item("Zesty Bar", img`
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . f f e f f . . 
        . . . . . . . . f f e f e f f . 
        . . . . . . . f f e f e f e e . 
        . . . . f f f e e f e f e f f . 
        . . . f c f f f f e f e f . . . 
        . . . . f c c c f f e f . . . . 
        . . . . f c c c f f e f . . . . 
        . . . f c c c c f f f . . . . . 
        . f f c c c c c c f . . . . . . 
        f c c c c c c f f c f . . . . . 
        . f c c c c f . f f f . . . . . 
        . . f c f f . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Quarter", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f b b b b f f . . . . 
        . . . f b b b b b b b b f . . . 
        . . f b b b b b b b b b b f . . 
        . . f b f f f b b f f f b f . . 
        . f b b b b f b b f b b b c f . 
        . f b b f f f b b f f f b c f . 
        . f b b f b b b b b b f b c f . 
        . f b b f f f b b f f f b c f . 
        . . f b b b b b b b b b c f . . 
        . . f b b b b b b b b b c f . . 
        . . . f c c b b b b c c f . . . 
        . . . . f f c c c c f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Scissors", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f . . . . . . . . f f . . 
        . . f b f . . . . . . f b f . . 
        . . . f b f . . . . f b f . . . 
        . . . . f b f . . f b f . . . . 
        . . . . . f b f f b f . . . . . 
        . . . . . . f b b f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f a a a f f a a a f . . . 
        . . f a f f a f f a f f a f . . 
        . . f a f f a f f a f f a f . . 
        . . . f a a f . . f a a f . . . 
        . . . . f f . . . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Yellow Doorlock", img`
        . . . . . f f f f f f . . . . . 
        . . . . f b b b b b b f . . . . 
        . . . f b b f f f f b b f . . . 
        . . . f b f . . . . f b f . . . 
        . . . f b f . . . . f b f . . . 
        . . . f b f . . . . f b f . . . 
        . . . f b f f f f f f b f . . . 
        . . . f f b b b b b b f f . . . 
        . . . f b b b b b b b b f . . . 
        . . . f b b f f f f b b f . . . 
        . . . f b b f f f f b b f . . . 
        . . . f b b b f f b b b f . . . 
        . . . f b b b f f b b b f . . . 
        . . . f b b b b b b b b f . . . 
        . . . . f b b b b b b f . . . . 
        . . . . . f f f f f f . . . . . 
        `),
    Inventory.create_item("Principal Keys", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . f b b b b f f . . 
        . . . . . . . f b f f b f f . . 
        . . . . . . . f b f f b f f . . 
        . . . . . . . f b b b b f f . . 
        . . . . . . . f b f f f f . . . 
        . . . . . . f b f f b f . . . . 
        . . . . . f b b f f b f . . . . 
        . . . . f b b f . f b b f . . . 
        . . . . f b f . . f b f . . . . 
        . . . f b b b f . f b f . . . . 
        . . . f b f f . . f b b f . . . 
        . . . . f . . . . f b f . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ]
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BrownDoor, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        f f f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        `)
    timer.after(3000, function () {
        otherSprite.setImage(img`
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e f e f 
            f e e e e e e e e e e e e f e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
    })
})
function Variables () {
    WrongQuestions = false
    CurrentQuestion = 1
    Number_1 = 0
    Number_2 = 0
    Answer = 0
    Stoplagwithexits = false
    Thinkpad = false
    NotebooksVar = 0
    Exits = 0
}
let CurrentItemName: Inventory.Item = null
let Exit_Sign: Sprite = null
let BaldisSpeed = 0
let item: tiles.Location[] = []
let BaldiEnemy: Sprite = null
let Baldihasspawned = false
let Question2 = 0
let Question = 0
let Moving = false
let Stoplagwithexits = false
let Answer = 0
let Number_2 = 0
let Number_1 = 0
let CurrentQuestion = 0
let WrongQuestions = false
let HoldingItemName: TextSprite = null
let Notebooks_List: Sprite[] = []
let BrownDoor: Sprite = null
let YellowDoor: Sprite = null
let BlueDoor: Sprite = null
let Exits = 0
let Zesty_Bar: Sprite = null
let BSoda: Sprite = null
let projectile: Sprite = null
let Item_List_Inv: Inventory.Item[] = []
let Inv: Inventory.Toolbar = null
let CurrentItem: Inventory.Item = null
let NeedRest: TextSprite = null
let HowMuchLeft: TextSprite = null
let Thinkpad = false
let Stamina: StatusBarSprite = null
let NotebooksVar = 0
let Student: Sprite = null
Player_Creator()
Variables()
HUD2()
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setCurrentTilemap(tilemap`level5`)
Furniture()
ItemSpawn()
tiles.placeOnRandomTile(Student, assets.tile`tile17`)
game.onUpdate(function () {
    if (Exits == 4) {
        game.gameOver(true)
    }
    if (Stamina.value <= 5) {
        NeedRest.setFlag(SpriteFlag.Invisible, false)
    } else {
        NeedRest.setFlag(SpriteFlag.Invisible, true)
    }
    if (!(Thinkpad)) {
        if (controller.A.isPressed()) {
            if (Stamina.value > 0) {
                if (Moving) {
                    Stamina.value += -0.5
                    Render.moveWithController(3, 3, 0)
                }
            }
        } else {
            if (!(Moving)) {
                if (Stamina.value <= 100) {
                    Stamina.value += 0.15
                    Render.moveWithController(2, 3, 0)
                }
            }
        }
    } else {
        Render.moveWithController(0, 3, 0)
        Number_1 = randint(0, 10)
        Number_2 = randint(0, 10)
        Question = Number_1 + Number_2
        Question2 = Number_1 - Number_2
        Answer = game.askForNumber("" + Number_1 + "+" + Number_2 + "=" + "?", 2)
        if (Answer == Question) {
            if (CurrentQuestion == 3) {
                CurrentQuestion = 1
                Thinkpad = false
            } else {
                CurrentQuestion += 1
            }
        } else {
            WrongQuestions = true
            if (CurrentQuestion == 3) {
                CurrentQuestion = 1
                Thinkpad = false
            } else {
                CurrentQuestion += 1
            }
        }
    }
})
game.onUpdate(function () {
    if (!(Thinkpad)) {
        if (controller.down.isPressed() || controller.up.isPressed()) {
            Moving = true
            if (controller.A.isPressed()) {
                if (Stamina.value > 0) {
                    Render.moveWithController(3, 3, 0)
                } else {
                    Render.moveWithController(2, 3, 0)
                }
            } else {
                Render.moveWithController(2, 3, 0)
            }
        } else {
            Moving = false
        }
    }
    if (WrongQuestions) {
        WrongQuestions = false
        Baldihasspawned = true
        for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
            BaldiEnemy = sprites.create(img`
                .......fff.......
                ....f.fdddf......
                ...fbfdfdfdf.....
                ...fbfdddddf.....
                ...fbfd222df.....
                ...fbffdddf......
                ...fbf.fff.......
                ...fbff777f......
                ...fbff777ff.....
                ...fb7f777f7f....
                ...fdff777ffdf...
                ...ff.f777f.ff...
                ......f888f......
                ......f8f8f......
                ......f8f8f......
                ......f8f8f......
                ......f8f8f......
                ......fffff......
                `, SpriteKind.Baldi)
            tiles.placeOnTile(BaldiEnemy, value)
            item = scene.aStar(BaldiEnemy.tilemapLocation(), Student.tilemapLocation())
            BaldisSpeed = 20
            scene.followPath(BaldiEnemy, item, 10)
        }
    }
})
game.onUpdate(function () {
    if (Baldihasspawned) {
        item = scene.aStar(BaldiEnemy.tilemapLocation(), Student.tilemapLocation())
        scene.followPath(BaldiEnemy, item, NotebooksVar - 1 * 10)
    }
})
game.onUpdate(function () {
    if (Inv.get_number(ToolbarNumberAttribute.SelectedIndex) == 3) {
        Inv.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    }
})
game.onUpdate(function () {
    if (NotebooksVar == 7) {
        HowMuchLeft.setText("" + Exits + "/" + "4 Exits")
        if (!(Stoplagwithexits)) {
            Stoplagwithexits = true
            for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
                Exit_Sign = sprites.create(img`
                    f 2 f f 2 f 2 f 2 f 2 f f f 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 f 2 f 2 f 2 2 f 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Exits)
                tiles.placeOnTile(Exit_Sign, value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
                Exit_Sign = sprites.create(img`
                    f 2 f f 2 f 2 f 2 f 2 f f f 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 f 2 f 2 f 2 2 f 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Exits)
                tiles.placeOnTile(Exit_Sign, value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
                Exit_Sign = sprites.create(img`
                    f 2 f f 2 f 2 f 2 f 2 f f f 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 f 2 f 2 f 2 2 f 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Exits)
                tiles.placeOnTile(Exit_Sign, value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
                Exit_Sign = sprites.create(img`
                    f 2 f f 2 f 2 f 2 f 2 f f f 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f 2 2 2 f 2 2 f 2 2 f 2 2 f 
                    f 2 f f 2 f 2 f 2 f 2 2 f 2 2 f 
                    f f f f f f f f f f f f f f f f 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Exits)
                tiles.placeOnTile(Exit_Sign, value)
            }
        }
    } else {
        HowMuchLeft.setText("" + NotebooksVar + "/" + "7 Notebooks")
    }
})
game.onUpdate(function () {
    if (Inv.get_items()[Inv.get_number(ToolbarNumberAttribute.SelectedIndex)]) {
        CurrentItemName = Inv.get_items()[Inv.get_number(ToolbarNumberAttribute.SelectedIndex)]
        HoldingItemName.setText(CurrentItemName.get_text(ItemTextAttribute.Name))
    } else {
        HoldingItemName.setText("")
    }
})
