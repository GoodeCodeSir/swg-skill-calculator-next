'use client'

import {translateName} from "@/utils/translateName";

export function PanelProfessionList({professions, selectedProfession, handleProfessionClick}: {
    professions: { [parent: string]: string[] },
    selectedProfession: string,
    handleProfessionClick: (profession: string) => void;
}) {

    return (
        <div className={'swg-panel'}>
            <h2 className={'swg-panel-title'}>Professions</h2>
            <ul className={'swg-panel-inner max-h-[600px] overflow-y-auto'}>
                {Object.entries(professions).map(([parent, children]) => (
                    <li key={parent}>
                        {/* Parent */}
                        <div className="px-2 py-1 font-semibold">
                            {parent}
                        </div>

                        {/* Children */}
                        <ul className="pl-4">
                            {children.map((child) => (
                                <li
                                    key={child}
                                    onClick={() => handleProfessionClick(child)}
                                    className={`swg-profession ${selectedProfession === child ? 'swg-profession-selected' : ''}`}>
                                    {translateName(child)}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )

}

