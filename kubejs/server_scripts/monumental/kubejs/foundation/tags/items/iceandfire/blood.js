events.listen('item.tags', (event) => {
    var items = ['iceandfire:fire_dragon_blood', 'iceandfire:ice_dragon_blood', 'iceandfire:lightning_dragon_blood'];
    event.get('forge:dragonblood').add(items);
});
