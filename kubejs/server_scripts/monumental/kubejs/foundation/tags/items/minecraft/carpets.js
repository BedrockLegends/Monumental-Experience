events.listen('item.tags', (event) => {
    var items = [];
    var exceptions = [
        'jellyfishing:white_carpeted_tiles',
        'jellyfishing:orange_carpeted_tiles',
        'jellyfishing:magenta_carpeted_tiles',
        'jellyfishing:light_blue_carpeted_tiles',
        'jellyfishing:yellow_carpeted_tiles',
        'jellyfishing:lime_carpeted_tiles',
        'jellyfishing:pink_carpeted_tiles',
        'jellyfishing:gray_carpeted_tiles',
        'jellyfishing:light_gray_carpeted_tiles',
        'jellyfishing:cyan_carpeted_tiles',
        'jellyfishing:purple_carpeted_tiles',
        'jellyfishing:blue_carpeted_tiles',
        'jellyfishing:brown_carpeted_tiles',
        'jellyfishing:green_carpeted_tiles',
        'jellyfishing:red_carpeted_tiles',
        'jellyfishing:black_carpeted_tiles'
    ];

    var tags = ['minecraft:carpets'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_carpet/)
            .remove(exceptions);
    });
});
