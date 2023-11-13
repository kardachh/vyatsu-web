const addEvents = () => {
    console.log(`addEvents()`)
    // toggle description to cards
    // document.querySelectorAll('.card')
    Array.from(document.querySelectorAll('.card')).forEach(el => {
        el.addEventListener('mouseover', () => {
            Array.from(el.querySelectorAll('.card_description')).forEach((elDesc) => {
                if (elDesc.classList.contains('hidden')) {
                    elDesc.classList.toggle('hidden', false)
                }
            })
        });
        el.addEventListener('mouseout', () => {
            Array.from(el.querySelectorAll('.card_description')).forEach((elDesc) => {
                elDesc.classList.toggle('hidden', true)
            })
        });
    })

    // tippy for "Стратегические проекты" links menu
    // nav__link-with-popup
    tippy('.nav__link-with-popup',{
        theme: 'custom-white',
        allowHTML: true,
        interactive: true,
        // offset:[0,40],
        content: `
                <div class="bg-white text-black normal-case text-center">
                    <ul class="space-y-5">
                        <li>
                            <a href="/vyatsu-web/vyatsu2030/projects/tehnologii-zdorovya">Технологии<br>здоровья</a>
                        </li>
                        <li>
                            <a href="/vyatsu-web/vyatsu2030/projects/sreda-obitania/">Среда<br>обитания</a>
                        </li>
                        <li>
                            <a href="../projects#">Гармоничная<br>личность</a>
                        </li>
                    </ul>
                </div>
            `
    })
    console.log(window.location.pathname)
    console.log(window.location.pathname.split('/'))
}



window.onload = addEvents
