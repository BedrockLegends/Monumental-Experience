events.listen('item.tags', (event) => {
    var items = ['routerreborn:itemwrench', 'refinedstorage:wrench'];
    var exceptions = [
        'cyclic:cable_wrench',
        'chiselsandbits:wrench_wood',
        'pneumaticcraft:pneumatic_wrench',
        'rftoolsbase:smartwrench',
        'rftoolsbase:smartwrench_select',
        'platforms:wrench',
        'blockcarpentry:texture_wrench',
        'create:wrench'
    ];

    var tags = ['forge:tools', 'forge:tools/wrench'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_wrench/)
            .remove(exceptions);
    });
});
