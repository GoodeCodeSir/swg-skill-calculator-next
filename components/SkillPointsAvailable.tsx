

export function SkillPointsAvailable() {
    const maxSkillPoints = 250;
    const currentSkillPoints = 100;

    const totalBoxes = 100;

    // how many of the 100 boxes should be filled
    const filledBoxes = Math.round((currentSkillPoints / maxSkillPoints) * totalBoxes);

    return (
        <div className="w-full swg-panel-inner">
            <div className="swg-panel-title text-center">
                Skill Points Available: {currentSkillPoints}/{maxSkillPoints}
            </div>

            <div className="flex h-6 items-center gap-[1px] overflow-hidden rounded-full px-1">
                {Array.from({ length: totalBoxes }).map((_, i) => (
                    <div
                        key={i}
                        className={[
                            "h-4 flex-1 rounded-sm",
                            i < filledBoxes ? "bg-green-500" : "bg-white/40",
                        ].join(" ")}
                    />
                ))}
            </div>
        </div>
    );
}