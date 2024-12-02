const Contacts = () => {
    return (  
        <main class="section">
            <div class="container">
                <h1 class="title-1">Контакты</h1>

                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">Местоположение</h2>
                        <p>Омск, Россия</p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (995) 845-86-82</a></p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">vintsent.dukhovskiy@mail.ru</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Contacts;