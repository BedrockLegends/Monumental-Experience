/*=========================
Items
=========================*/
    var Gem = <item:contenttweaker:ultimate_gem>;

/*=========================
Required Items
=========================*/
    var ResonatingGem = <item:astralsorcery:resonating_gem>;
    var Rockcrystal = <item:astralsorcery:rock_crystal>;
    var Celestialcrystal = <item:astralsorcery:celestial_crystal>;
    var Insaniumgem = <item:mysticalagradditions:insanium_gemstone>;
    var Chimeritegem = <item:mana-and-artifice:chimerite_gem>;
    var Spiritattunedgem = <item:occultism:spirit_attuned_gem>;
    var Ambergem = <item:betterendforge:amber_gem>;
    var Pyropegemstone = <item:blue_skies:pyrope_gem>;
    var Arcanegem = <item:emendatusenigmatica:arcane_gem>;
    var Gobber2glob = <item:gobber2:gobber2_glob>;
    var Gobber2globend = <item:gobber2:gobber2_glob_end>;
    var Psigem = <item:psi:psigem>;
    var Dragonstone = <item:botania:dragonstone>;
    var Diamondheart = <item:quark:diamond_heart>;

/*=========================
Recipes
=========================*/
mods.extendedcrafting.TableCrafting.addShaped("ultimate_gem", 0, Gem, [
	[ResonatingGem, Insaniumgem, Rockcrystal, Celestialcrystal, Psigem, Celestialcrystal, Rockcrystal, Insaniumgem, ResonatingGem], 
	[Insaniumgem, Chimeritegem, Insaniumgem, Celestialcrystal, Spiritattunedgem, Celestialcrystal, Insaniumgem, Chimeritegem, Insaniumgem], 
	[Rockcrystal, Insaniumgem, Ambergem, Arcanegem, Gobber2glob, Arcanegem, Ambergem, Insaniumgem, Rockcrystal], 
	[Celestialcrystal, Celestialcrystal, Pyropegemstone, Dragonstone, Gobber2globend, Dragonstone, Pyropegemstone, Celestialcrystal, Celestialcrystal], 
	[Psigem, Spiritattunedgem, Gobber2glob, Gobber2globend, Diamondheart, Gobber2globend, Gobber2glob, Spiritattunedgem, Psigem], 
	[Celestialcrystal, Celestialcrystal, Pyropegemstone, Dragonstone, Gobber2globend, Dragonstone, Pyropegemstone, Celestialcrystal, Celestialcrystal], 
	[Rockcrystal, Insaniumgem, Ambergem, Arcanegem, Gobber2glob, Arcanegem, Ambergem, Insaniumgem, Rockcrystal], 
	[Insaniumgem, Chimeritegem, Insaniumgem, Celestialcrystal, Spiritattunedgem, Celestialcrystal, Insaniumgem, Chimeritegem, Insaniumgem], 
	[ResonatingGem, Insaniumgem, Rockcrystal, Celestialcrystal, Psigem, Celestialcrystal, Rockcrystal, Insaniumgem, ResonatingGem]]);