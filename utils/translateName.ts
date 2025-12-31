const labels: Record<string, string> = {
    // Basic
    crafting_artisan: "Artisan",

    combat_brawler: "Brawler",
    combat_brawler_unarmed_01: "Unarmed I",
    combat_brawler_unarmed_02: "Unarmed II",
    combat_brawler_unarmed_03: "Unarmed III",
    combat_brawler_unarmed_04: "Unarmed IV",
    combat_brawler_1handmelee_01: "One-Handed IV",
    combat_brawler_1handmelee_02: "One-Handed IV",
    combat_brawler_1handmelee_03: "One-Handed IV",
    combat_brawler_1handmelee_04: "One-Handed IV",
    combat_brawler_2handmelee_01: "Two-Handed I",
    combat_brawler_2handmelee_02: "Two-Handed II",
    combat_brawler_2handmelee_03: "Two-Handed III",
    combat_brawler_2handmelee_04: "Two-Handed IV",
    combat_brawler_polearm_01: "Polearm I",
    combat_brawler_polearm_02: "Polearm II",
    combat_brawler_polearm_03: "Polearm III",
    combat_brawler_polearm_04: "Polearm IV",

    social_entertainer: "Entertainer",
    combat_marksman: "Marksman",
    combat_marksman_novice: "Novice Marksman",
    combat_marksman_rifle_01: "Rifle I",
    combat_marksman_rifle_02: "Rifle II",
    combat_marksman_rifle_03: "Rifle III",
    combat_marksman_rifle_04: "Rifle IV",
    combat_marksman_pistol_01: "Pistol I",
    combat_marksman_pistol_02: "Pistol II",
    combat_marksman_pistol_03: "Pistol III",
    combat_marksman_pistol_04: "Pistol IV",
    combat_marksman_carbine_01: "Carbine I",
    combat_marksman_carbine_02: "Carbine II",
    combat_marksman_carbine_03: "Carbine III",
    combat_marksman_carbine_04: "Carbine IV",
    combat_marksman_support_01: "Support I",
    combat_marksman_support_02: "Support II",
    combat_marksman_support_03: "Support III",
    combat_marksman_support_04: "Support IV",
    combat_marksman_master: "Master Marksman",

    combat_rifleman: "Rifleman",
    combat_rifleman_novice: "Novice Rifleman",
    combat_rifleman_accuracy_01: "Accuracy I",
    combat_rifleman_accuracy_02: "Accuracy II",
    combat_rifleman_accuracy_03: "Accuracy III",
    combat_rifleman_accuracy_04: "Accuracy IV",
    combat_rifleman_speed_01: "Speed I",
    combat_rifleman_speed_02: "Speed II",
    combat_rifleman_speed_03: "Speed III",
    combat_rifleman_speed_04: "Speed IV",
    combat_rifleman_ability_01: "Ability I",
    combat_rifleman_ability_02: "Ability II",
    combat_rifleman_ability_03: "Ability III",
    combat_rifleman_ability_04: "Ability IV",
    combat_rifleman_support_01: "Support I",
    combat_rifleman_support_02: "Support II",
    combat_rifleman_support_03: "Support III",
    combat_rifleman_support_04: "Support IV",
    combat_rifleman_master: "Master Rifleman",

    science_medic: "Medic",
    outdoors_scout: "Scout",
    social_politician: "Politician",

    // Elite Combat
    combat_polearm: "Pikeman",
    combat_pistol: "Pistoleer",
    combat_carbine: "Carbineer",
    combat_commando: "Commando",
    combat_2hsword: "Swordsman",
    combat_1hsword: "Fencer",
    combat_unarmed: "Teras Kasi Artist",
    combat_smuggler: "Smuggler",
    combat_bountyhunter: "Bounty Hunter",

    // Brawler
    combat_brawler_master: "Master Brawler",
    combat_brawler_novice: "Novice Brawler",

    crafting_architect: "Architect",
    crafting_armorsmith: "Armorsmith",
    crafting_weaponsmith: "Weaponsmith",
    crafting_chef: "Chef",
    crafting_tailor: "Tailor",
    crafting_droidengineer: "Droid Engineer",
    crafting_merchant: "Merchant",
    crafting_shipwright: "Shipwright",

    science_doctor: "Doctor",
    science_combatmedic: "Combat Medic",

    social_musician: "Musician",
    social_dancer: "Dancer",
    social_imagedesigner: "Image Designer",

    outdoors_ranger: "Ranger",
    outdoors_creaturehandler: "Creature Handler",
    outdoors_bio_engineer: "Bio-Engineer",
    outdoors_squadleader: "Squad Leader",

    outdoors_squadleader_movement_01: "Mobility I\nTerrain Guidance"

    // XP Types

    // Skill Mods

    // Certifications
};


export function translateName(name: string): string {
    // return translated value or leave it, warn in console if not found
    return labels[name] || name;
}