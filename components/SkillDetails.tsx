import {SkillRow} from "@/types/skills";

export function parseSkillMods(input: string): Record<string, number> {
    const result: Record<string, number> = {};
    if (!input) return result;

    for (const part of input.split(",")) {
        const [key, rawValue] = part.split("=");
        if (!key || key.startsWith("private_")) continue;

        const value = Number(rawValue);
        if (Number.isNaN(value)) continue;

        result[key] = value;
    }

    return result;
}

export function parseCommands(input: string|null): string[] {
    if (!input) return [];
    const commands =  input.split(",");
    return commands.filter(c => !c.startsWith("private_"));
}

export function SkillDetails({selectedSkill}: { selectedSkill: SkillRow|null|undefined}) {

    const skillMods = selectedSkill ? parseSkillMods(selectedSkill.SKILL_MODS) : {};
    const commands = selectedSkill ? parseCommands(selectedSkill.COMMANDS) : [];

    return (
        <div className="flex flex-row gap-2 items-stretch">
            {/* Skill Mods */}
            <div className="flex flex-col flex-1">
                <h2 className="swg-panel-title">Skill Mods</h2>

                <div className="swg-panel-inner border-1 flex-1 max-h-[400px] overflow-y-auto swg-border-light">
                    <table className="w-full">
                        <tbody>
                        {skillMods && Object.entries(skillMods).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>+{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Commands & Abilities */}
            <div className="flex flex-col flex-1">
                <h2 className="text-right swg-panel-title">Commands & Abilities</h2>

                <ul className="swg-panel-inner border-1 flex-1 min-h-[200px] overflow-y-auto swg-border-light">
                    {commands.map(c => <li key={c}>{c}</li>)}
                </ul>
            </div>
        </div>
    )
}