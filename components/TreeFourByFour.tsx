import {SkillRow} from "@/types/skills";
import {translateName} from "@/utils/translateName";

export function TreeFourByFour({noviceBox, masterBox, trees, handleSkillClick, activeSkillName}: {
    noviceBox: SkillRow,
    masterBox: SkillRow,
    trees: SkillRow[][],
    handleSkillClick: (skill: SkillRow) => void;
    activeSkillName: string|null|undefined
}) {

    if (trees.length < 4) return (
        <div className={'skill-tree-container'}>
            <p>Missing Tree data</p>
        </div>
    );

    return (
        <div className='skill-tree-container'>
            <div className={'masterNextSkillTrees'}>
                <p>Next class</p>
                <p>Next class</p>
                <p>Next class</p>
                <p>Next class</p>
            </div>

            <div className='master-box'>
                <div className={`skill-box ${activeSkillName === masterBox.NAME && 'selected'}`} onClick={() => handleSkillClick(masterBox)}>
                    {translateName(masterBox.NAME)}
                </div>
            </div>

            <div className='skill-grid'>
                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>Next class</p>
                    </div>
                    {trees[0].toReversed().map((tree: SkillRow) => (
                        <div
                            key={tree.NAME}
                            className={`skill-box ${activeSkillName === tree.NAME && 'selected'}`}
                            onClick={() => handleSkillClick(tree)}
                        >
                            {translateName(tree.NAME)}
                        </div>
                    ))}
                </div>

                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>Next class 1</p>
                    </div>
                    {trees[1].toReversed().map((skill: SkillRow) => (
                        <div key={skill.NAME}
                             className={`skill-box ${activeSkillName === skill.NAME && 'selected'}`}
                             onClick={() => handleSkillClick(skill)}>
                            {translateName(skill.NAME)}
                        </div>
                    ))}
                </div>

                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>To: Next class</p>
                    </div>
                    {trees[2].toReversed().map((skill: SkillRow) => (
                        <div
                            key={skill.NAME}
                            className={`skill-box ${activeSkillName === skill.NAME && 'selected'}`}
                            onClick={() => handleSkillClick(skill)}
                        >
                            {translateName(skill.NAME)}
                        </div>
                    ))}

                </div>
                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>Next class</p>
                    </div>

                    {trees[3].toReversed().map((skill: SkillRow) => (
                        <div
                            key={skill.NAME}
                            className={`skill-box ${activeSkillName === skill.NAME && 'selected'}`}
                            onClick={() => handleSkillClick(skill)}
                        >
                            {translateName(skill.NAME)}
                        </div>
                    ))}
                </div>
            </div>
            <div className=' novice-box'>
                <div className={`skill-box ${activeSkillName === noviceBox.NAME && 'selected'}`} onClick={() => handleSkillClick(noviceBox)}>
                    {translateName(noviceBox.NAME)}
                </div>
            </div>
            <div className='previousSkillTrees'>
                <p>last class</p>
                <p>last class</p>
            </div>
        </div>
    )
}

