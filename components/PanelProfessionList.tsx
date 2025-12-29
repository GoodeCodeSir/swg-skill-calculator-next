'use client'

import {professions} from "@/data/professions";

export function PanelProfessionList() {



    return (
        <div className={'swg-panel'}>
            <h2 className={'swg-panel-title'}>Professions</h2>
            <ul className={'swg-panel-inner max-h-[600px] overflow-y-scroll'}>
                {professions.map((profession) =>
                    <li
                        key={profession.id}
                    >
                        {profession.label}
                    </li>
                )}
            </ul>
        </div>
    )

}

