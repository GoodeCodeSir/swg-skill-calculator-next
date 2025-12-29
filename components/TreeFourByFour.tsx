export function TreeFourByFour() {

    return (
        <div className='skill-tree-container'>
            <div className={'masterNextSkillTrees'}>
                <p>Next class</p>
                <p>Next class</p>
                <p>Next class</p>
                <p>Next class</p>
            </div>

            <div className='master-box'>
                <div className='skill-box'>
                    Master
                </div>
            </div>

            <div className='skill-grid'>
                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>Next class</p>
                    </div>

                    <div className={'skill-box'}>box 4</div>
                    <div className={'skill-box '}>box 3</div>
                    <div className={'skill-box '}>box 2</div>
                    <div className={'skill-box '}>box 1</div>
                </div>

                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>Next class 1</p>
                    </div>
                    <div className={'skill-box '}>box 4</div>
                    <div className={'skill-box '}>box 3</div>
                    <div className={'skill-box '}>box 2</div>
                    <div className={'skill-box '}>box 1</div>
                </div>

                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>To: Next class</p>
                    </div>
                    <div className={'skill-box'}>box 4</div>
                    <div className={'skill-box'}>box 3</div>
                    <div className={'skill-box'}>box 2</div>
                    <div className={'skill-box'}>box 1</div>
                </div>
                <div className='skill-column'>
                    <div className='nextSkillTree'>
                        <p>Next class</p>
                        <p>Next class</p>
                    </div>

                    <div className={'skill-box '}>box 4</div>
                    <div className={'skill-box '}>box 3</div>
                    <div className={'skill-box '}>box 2</div>
                    <div className={'skill-box is-owned'}>box 1</div>
                </div>
            </div>
            <div className=' novice-box'>
                <div className='skill-box is-owned'>
                    Novice
                </div>
            </div>
            <div className='previousSkillTrees'>
                <p>last class</p>
                <p>last class</p>
            </div>
        </div>
    )
}

