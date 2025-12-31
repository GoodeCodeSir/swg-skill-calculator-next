'use client'

import {useEffect, useMemo, useState} from "react";
import {PanelProfessionList} from "@/components/PanelProfessionList";
import {PanelRequiredExperience} from "@/components/PanelRequiredExperience";
import {PanelSelectedProfession} from "@/components/PanelSelectedProfession";
import {PanelMySkillMods} from "@/components/PanelMySkillMods";
import {PanelMyAbilities} from "@/components/PanelMyAbilities";
import {PanelMyCertifications} from "@/components/PanelMyCertifications";
import {SkillPointsAvailable} from "@/components/SkillPointsAvailable";
import {SkillDetails} from "@/components/SkillDetails";
import Papa from "papaparse"
import {getProfessionList} from "@/utils/getProfessionList";
import {getProfessionDetails} from "@/utils/getProfessionDetails";
import {SkillRow} from "@/types/skills";
import {ProfessionGroups} from "@/types/profession";


export default function Home() {

    const [skillData, setSkillData] = useState<SkillRow[]>([])
    const [emulator, setEmulator] = useState('example');
    const [professions, setProfessions] = useState<ProfessionGroups>({});

    const [selectedProfession, setSelectedProfession] = useState('');
    const [selectedSkill, setSelectedSkill] = useState<SkillRow|null>(null);


    // derived value on change
    const selectedProfessionDetail = useMemo(() => {
        if (!selectedProfession) return null;
        return getProfessionDetails(selectedProfession, skillData);
    }, [selectedProfession, skillData]);

    // get example-skills.csv from /pubic
    useEffect(() => {
        fetch("/example-skills.csv")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load CSV");
                return res.text();
            })
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    worker: true,
                    complete: (results) => {
                        const data = results.data as SkillRow[];
                        setSkillData(data); // raw data that can be used later

                        const professions:ProfessionGroups = getProfessionList(data);
                        setProfessions(professions); // makes the list for the profession panel
                    },
                    error: (e: unknown) => {
                        console.log(e);
                    },
                });
            })
            .catch((err) => console.log(err.message));
    }, [emulator]);


    return (
        <div className={'py-2 px-4'}>
            <h1>SWG Skill Tree</h1>

            <div className={'flex flex-row gap-2'}>
                <aside className="min-w-[300px] flex flex-col gap-3">
                    <PanelProfessionList professions={professions} selectedProfession={selectedProfession} handleProfessionClick={setSelectedProfession}/>
                    <PanelRequiredExperience/>
                    <PanelMySkillMods/>
                    <PanelMyAbilities/>
                    <PanelMyCertifications/>
                </aside>

                <main className={'flex-grow-1 flex flex-col gap-3'}>
                    <PanelSelectedProfession selectedProfession={selectedProfessionDetail} handleSkillClick={setSelectedSkill} activeSkillName={selectedSkill?.NAME}/>
                    <SkillDetails selectedSkill={selectedSkill}/>
                    <SkillPointsAvailable/>
                </main>

            </div>
        </div>
    );
}
