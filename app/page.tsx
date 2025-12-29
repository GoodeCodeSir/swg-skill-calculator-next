'use client'

import {useEffect, useState} from "react";
import {PanelProfessionList} from "@/components/PanelProfessionList";
import {PanelRequiredExperience} from "@/components/PanelRequiredExperience";
import {PanelSelectedProfession} from "@/components/PanelSelectedProfession";
import {PanelMySkillMods} from "@/components/PanelMySkillMods";
import {PanelMyAbilities} from "@/components/PanelMyAbilities";
import {PanelMyCertifications} from "@/components/PanelMyCertifications";
import {SkillPointsAvailable} from "@/components/SkillPointsAvailable";
import {SkillDetails} from "@/components/SkillDetails";
import Papa from "papaparse"

export default function Home() {

    const [rows, setRows] = useState([])

    // get example-skills.csv from /pubic
    useEffect(() => {


        fetch("/example-skills.csv")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load CSV");

                console.log(res);
                return res.text();
            })
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    worker: true,
                    complete: (results) => {
                        const data = results.data as any[];

                        // Drop SWG schema row if present
                        const cleaned =
                            data.length && data[0]?.NAME === "s"
                                ? data.slice(1)
                                : data;

                        console.log(cleaned);

                        setRows(cleaned);
                    },
                    error: (e) => {
                        console.log(e);
                    },
                });
            })
            .catch((err) => console.log(err.message));
    }, []);


    return (
        <div className={'py-2 px-4'}>
            <h1>SWG Skill Tree</h1>

            <div className={'flex flex-row gap-2'}>
                <aside className="min-w-[300px] flex flex-col gap-3">
                    <PanelProfessionList/>
                    <PanelRequiredExperience/>
                    <PanelMySkillMods/>
                    <PanelMyAbilities/>
                    <PanelMyCertifications/>
                </aside>

                <main className={'flex-grow-1 flex flex-col gap-3'}>
                    <PanelSelectedProfession/>
                    <SkillDetails />
                    <SkillPointsAvailable/>
                </main>

            </div>
        </div>
    );
}
