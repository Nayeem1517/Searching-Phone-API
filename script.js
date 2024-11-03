const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    console.log(phones)
    displayPhones(phones);
}

const displayPhones = phones => {
    // console.log(phones);
    // step : 01 : Get the Container where we want to append the child or the modal 
    const phoneContainer = document.getElementById('phone-cointainer');
    phones.forEach(phone => {
        console.log(phone)
        // Step : 02 : Now Create the div where we want to keep the modal
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-xl `;
        // Step: 03 : Create the Inner html of Card
        phoneCard.innerHTML = ` 
            <figure class="px-10 pt-10">
            <img src="${phone.image}"  alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
`;
// Step : 04 : Append The child to the Container
phoneContainer.appendChild(phoneCard);

    })
}






loadPhone();