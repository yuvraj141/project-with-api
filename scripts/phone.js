const loadPhone =async () =>{
    const res =await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data=await res.json()
    const phones=data.data
    displayPhones(phones)
}

const displayPhones =phones =>{
    const phoneContainer=document.getElementById('phone-container')
    phones.forEach(phone => {
       console.log(phone) 
       //step 1..create a div
       const phoneCard=document.createElement('div')
       phoneCard.classList='card card-compact p-4 bg-base-100 shadow-xl';
       //step 2..create innerHtml
       phoneCard.innerHTML=`
       <figure><img src="${phone.image}" alt="Shoes" /></figure>
       <div class="card-body">
         <h2 class="card-title">${phone.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
           <button class="btn btn-primary">Buy Now</button>
       `
       //step 3..appendChild
     phoneContainer.appendChild(phoneCard)
    });
}
loadPhone()