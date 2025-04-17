export function Contact(){
    return(
        <>
        <header>
            <span>SECURE YOUR CAT'S STAY TODAY</span>
                <h2>Book Now</h2>
                <p>Ready to reserve your cat's spot at NekoInn? Our easy-to-use booking system makes it simple to schedule your cat's stay with us. Just select your desired dates, choose from our range of accommodations and services, and complete your reservation in a few easy steps.</p>
        </header>
        <form action="" method="post">
            <div>
                <label htmlFor="name">FULL NAME</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="email">EMAIL</label>
                <input type="email" />
            </div>
            <div>
                <label htmlFor="phone">PHONE NUMBER</label>
                <input type="tel" />
            </div>
            <div>
                <label htmlFor="catName">CAT NAME</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="date">PICK A DATE</label>
                <input type="date" />
            </div>
            <div>
                <label htmlFor="numberPets">HOW MANY PETS?</label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="numberPets">Purr Plan</label>
                <select name="opcoes" id="opcoes" required>
                    <option value="" disabled selected>Selecione</option>
                    <option value="opcao1">PURR DUCAL</option>
                    <option value="opcao2">PURR IMPERIAL</option>
                    <option value="opcao3">PURR ROYAL</option>
                </select>
            </div>
            <button>BOOK NOW</button>
           

        </form>
           
        </>
    )
}