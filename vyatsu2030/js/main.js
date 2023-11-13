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

    tippy('#nav-mobile', {
        theme: 'custom-white', allowHTML: true, interactive: true, hideOnClick: false, // offset:[0,40],
        content: `
                <div class="bg-white text-black normal-case text-center">
                    <ul class="space-y-5 uppercase text-[13px] font-bold tracking-[1.92px]">
                        <li>
                            <a href="/vyatsu-web/vyatsu2030/#" class="hover:text-red-600">
                                О программе
                            </a>
                        </li>
                        <li>
                            <a href="/vyatsu-web/vyatsu2030/#projects" class="hover:text-red-600">
                                Проекты и политики
                            </a>
                        </li>
                        <li>
                            <a href="/vyatsu-web/vyatsu2030/#news" class="hover:text-red-600">
                                Новости
                            </a>
                        </li>
                        <li>
                            <a href="/vyatsu-web/vyatsu2030/#directorate" class="hover:text-red-600">
                                Дирекция
                            </a>
                        </li>
                    </ul>
                </div>
            `
    })

    // tippy for "Стратегические проекты" links menu
    // nav__link-with-popup
    tippy('.nav__link-with-popup', {
        theme: 'custom-white', allowHTML: true, interactive: true, hideOnClick: false, // offset:[0,40],
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
                            <a href="/vyatsu-web/vyatsu2030/projects/garmonichnaya-lichnost/">Гармоничная<br>личность</a>
                        </li>
                    </ul>
                </div>
            `
    })
}


window.onload = addEvents
