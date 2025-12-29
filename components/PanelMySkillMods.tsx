export function PanelMySkillMods() {

    return (
        <div className={'swg-panel min-h-[125px]'}>
            <h2 className={'swg-panel-title'}>My Skill Mods</h2>
            <div className={'swg-panel-inner max-h-[300px] overflow-y-auto'}>
                <table>
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
    )
}