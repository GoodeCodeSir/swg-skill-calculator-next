import {TreeFourByFour} from "@/components/TreeFourByFour";
import {TreePyramid} from "@/components/TreePyramid";
import {TreeOneByFour} from "@/components/TreeOneByFour";
import {translateName} from "@/utils/translateName";
import {SkillRow} from "@/types/skills";
import {ProfessionDetails} from "@/utils/getProfessionDetails";


export function PanelSelectedProfession({selectedProfession, handleSkillClick, activeSkillName}: {
    selectedProfession: ProfessionDetails | null;
    handleSkillClick: (skill: SkillRow) => void;
    activeSkillName: string|null|undefined
}) {

    const treeType = selectedProfession?.treeType;

    if (!selectedProfession) return (
        <div className={'swg-profession-panel'}>
            <h1 className={'swg-panel-title'}>No profession selected</h1>
            <div className={'swg-panel-inner swg-border-light border-1'}>
                <div className={'flex items-center justify-center min-h-[900px]'}>
                    <p className="text-center">Choose a profession</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={'swg-profession-panel'}>
            <h1 className={'swg-panel-title'}>{translateName(selectedProfession.name)}</h1>
            <div className={'swg-panel-inner swg-border-light border-1'}>

                {treeType === 'fourByFour' &&
                    <TreeFourByFour noviceBox={selectedProfession.novice} masterBox={selectedProfession.master} trees={selectedProfession.trees} handleSkillClick={handleSkillClick}
                                    activeSkillName={activeSkillName}/>}
                {treeType === 'pyramid' && <TreePyramid/>}
                {treeType === 'oneByFour' && <TreeOneByFour/>}

            </div>
        </div>
    )
}