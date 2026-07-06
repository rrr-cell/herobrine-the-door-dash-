blocks.onBlockPlaced(DIRT, function () {
    gameplay.setWeather(THUNDER)
    gameplay.setDifficulty(HARD)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    music.playSound(Sound.Explode)
})
player.onChat("Herobrine", function () {
    blocks.place(NETHERRACK, pos(0, 0, 1))
    blocks.place(FIRE, pos(0, 0, 2))
})
player.onChat("Spawn 1212", function () {
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WARDEN), pos(0, 0, 0))
    mobs.spawn(mobs.monster(WITHER_MONSTER_MOB), pos(0, 0, 0))
})
player.onChat("Hi", function () {
	
})
