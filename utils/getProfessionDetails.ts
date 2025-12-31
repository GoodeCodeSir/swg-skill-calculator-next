import {SkillRow} from "@/types/skills";


export function getProfessionDetails(profession: string, professionData: SkillRow[]):ProfessionDetails | null    {

    // get profession row
    const professionRow = professionData.find(row => row.NAME === profession);

    if (!professionRow) return null;

    // get novice box
    const noviceSkill = professionData.find(row => row.NAME === `${profession}_novice`);
    if (!noviceSkill) return null;

    // get master box
    const masterSkill = professionData.find(row => row.NAME === `${profession}_master`);
    if (!masterSkill) return null;

    const starters = professionData.filter(row => row.PARENT === profession && !row.NAME.endsWith('_novice') && !row.NAME.endsWith('_master') )

    const trees: SkillRow[][] = [];
    for (const starter of starters) {
        const column: SkillRow[] = [];
        let current: SkillRow | undefined = starter;

        while (current && column.length < 4) {
            column.push(current);
            const next = professionData.find(
                row => row.SKILLS_REQUIRED === current?.NAME
            );
            current = next;
        }
        trees.push(column);
    }


    return {
        name: professionRow.NAME,
        treeType: professionRow.GRAPH_TYPE,
        trees: trees,
        treeProgression:[
            ['social_imagedesigner'],
            ['social_musician'],
            ['social_dancer'],
            ['social_musician', 'social_dancer']
        ],
        novice: noviceSkill,
        master: masterSkill,
        requiredProfessions: ['social_musician', 'social_dancer'],
    }
}

export type ProfessionDetails = {
    name: string;
    treeType: 'fourByFour' | 'pyramid' | 'oneByFour';
    trees: SkillRow[][];
    treeProgression: string[][];
    novice: SkillRow;
    master: SkillRow;
    requiredProfessions: string[];
}