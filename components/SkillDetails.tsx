export function SkillDetails() {

    return (
        <div className="flex flex-row gap-2 items-stretch">
            {/* Skill Mods */}
            <div className="flex flex-col flex-1">
                <h2 className="swg-panel-title">Skill Mods</h2>

                <div className="swg-panel-inner border-1 flex-1 max-h-[400px] overflow-y-auto swg-border-light">
                    <table className="w-full">
                        <tbody>
                        <tr>
                            <td>jedi_force_power_max</td>
                            <td>+250</td>
                        </tr>
                        <tr>
                            <td>jedi_force_power_regen</td>
                            <td>+8</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Commands & Abilities */}
            <div className="flex flex-col flex-1">
                <h2 className="text-right swg-panel-title">Commands & Abilities</h2>

                <ul className="swg-panel-inner border-1 flex-1 min-h-[200px] overflow-y-auto swg-border-light">
                    <li>saber2hHit3</li>
                    <li>saber2hFrenzy</li>
                    <li>saberThrow2</li>
                </ul>
            </div>
        </div>
    )
}