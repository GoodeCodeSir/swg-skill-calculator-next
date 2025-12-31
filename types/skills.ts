export type BoolStr = "true" | "false";

export type GraphType = "fourByFour" | "pyramid" | "oneByFour";

export type JediState = "none" | "forceSensitive" | "forceRankedLight" | "forceRankedDark" | 'jedi' | string;

export type SkillRow = {
    NAME: string;
    PARENT: string; // "" if root

    GRAPH_TYPE: GraphType;

    GOD_ONLY: BoolStr;
    IS_TITLE: BoolStr;
    IS_PROFESSION: BoolStr;
    IS_HIDDEN: BoolStr;
    SEARCHABLE: BoolStr;

    MONEY_REQUIRED: string;
    POINTS_REQUIRED: string;

    SKILLS_REQUIRED_COUNT: string;
    SKILLS_REQUIRED: string;        // comma-separated or empty
    PRECLUSION_SKILLS: string;      // comma-separated or empty

    XP_TYPE: string;
    XP_COST: string;
    XP_CAP: string;

    MISSIONS_REQUIRED: string;
    APPRENTICESHIPS_REQUIRED: string;

    STATS_REQUIRED: string;
    SPECIES_REQUIRED: string;
    JEDI_STATE_REQUIRED: JediState;

    SKILL_ABILITY: string;
    COMMANDS: string;              // comma-separated
    SKILL_MODS: string;            // comma-separated key=val pairs

    SCHEMATICS_GRANTED: string;     // comma-separated
    SCHEMATICS_REVOKED: string;     // comma-separated

    ENDER: string;

    // allow future/unknown columns without breaking
    [key: string]: string;
};