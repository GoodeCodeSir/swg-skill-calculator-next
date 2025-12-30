

export function getProfessionList(csv) {

    console.log(csv)

    const professions = csv.filter( r => r.IS_PROFESSION === 'true' && r.GOD_ONLY === 'false');

    const baseProfessions = csv.filter( r => r.PARENT === '' && r.GOD_ONLY === 'true');
    console.log({baseProfessions})
    console.log({professions})

    return []
}