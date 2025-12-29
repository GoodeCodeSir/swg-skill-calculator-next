import {useState} from "react";
import {TreeFourByFour} from "@/components/TreeFourByFour";
import {TreePyramid} from "@/components/TreePyramid";
import {TreeOneByFour} from "@/components/TreeOneByFour";


export function PanelSelectedProfession() {


    const [treeType, setTreeType] = useState('fourByFour')

    return (
        <div className={'swg-profession-panel'}>
            <h1 className={'swg-panel-title'}>Profession</h1>
            <div className={'swg-panel-inner swg-border-light border-1'}>

                {!treeType && (
                    <div className={'flex items-center justify-center min-h-[900px]'}>
                    <p className="text-center">Choose a profession</p>
                    </div>
                )}


                { treeType === 'fourByFour' && <TreeFourByFour />}
                { treeType === 'pyramid' && <TreePyramid />}
                { treeType === 'oneByFour' && <TreeOneByFour />}

            </div>
        </div>
    )
}