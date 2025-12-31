import {SkillRow} from "@/types/skills";
import {ProfessionGroups} from "@/types/profession";

export function getProfessionList(skillData:SkillRow[]):ProfessionGroups {

    const professions = skillData.filter(r => r.IS_PROFESSION === 'true' && r.GOD_ONLY === 'false');

    const baseProfessions = skillData.filter(r => r.PARENT === '' && r.GOD_ONLY === 'true');

    // sort A-Z
    baseProfessions.sort((a, b) => a.NAME.localeCompare(b.NAME))

    // Init result structure
    const result:ProfessionGroups = {};
    for (const base of baseProfessions) {
        result[base.NAME] = [];
    }

    const byName = new Map(skillData.map(r => [r.NAME, r]));

    // Helper: find root/base profession
    function findBase(row:SkillRow):string|undefined {
        let cur:SkillRow|undefined= row;

        while (cur?.PARENT) {
            cur = byName.get(cur.PARENT);
        }

        return cur?.NAME;
    }

    // Assign professions to base
    for (const prof of professions) {
        const base = findBase(prof);
        if (base && result[base]) {
            result[base].push(prof.NAME);
        }
    }

    for (const key of Object.keys(result)) {
        // remove anything without professions
        if (result[key].length === 0) {
            delete result[key];
        }

        // remove jedi title
        if(key === 'force_title') delete result[key];
    }

    return result
}