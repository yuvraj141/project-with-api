const loadPhone =async (searchText) =>{
    const res =await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json()
    const phones=data.data
    displayPhones(phones)
}

const displayPhones =phones =>{
    const phoneContainer=document.getElementById('phone-container')
    //clear phone container cards before adding new cards
    phoneContainer.textContent=''
    //display show all btn if their are more than 10 phones
    const showAllContainer=document.getElementById('show-all-container')
    if(phones.length>12){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    //display only first 10 phones
    phones=phones.slice(0,10)
    
    phones.forEach(phone => {
    //    console.log(phone) 
       //step 1..create a div
       const phoneCard=document.createElement('div')


       phoneCard.classList='card card-compact p-4 bg-base-100 shadow-xl';
       //step 2..create innerHtml
       phoneCard.innerHTML=`
       <figure><img src="${phone.image}" alt="Shoes" /></figure>
       <div class="card-body">
         <h2 class="card-title">${phone.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-center">
        <button onclick="handleShowDetail('${phone.slug}');show_details_modal.showModal()" class="btn btn-primary">Show Details</button>
       `
       //step 3..appendChild
     phoneContainer.appendChild(phoneCard)
    });
    //hide loading spinner
    toggleLoadingSpinner(false)
}
//handleSearch btn
handleSearch =() =>{
    toggleLoadingSpinner(true)
const searchField=document.getElementById('search-field')
searchText=searchField.value ;
console.log(searchText)
loadPhone(searchText)
}
//Handle show details function
const handleShowDetail= async (id)=>{
    console.log('clicked Show details',id)
    //load single phone data
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone =data.data
    showPhoneDetails(phone)
    
}
//show the modal
const showPhoneDetails =(phone)=>{
    console.log(phone)
    const phoneName=document.getElementById('show-detail-phone-name')
    phoneName.innerText=phone.name;
    const showDetailContainer=document.getElementById('show-detail-container');
    showDetailContainer.innerHTML=`
    <img src="${phone.image}" />
    <p><span>Storage :</span>${phone.mainFeature.storage}</p>
    `
    show_details_modal.showModal()
}

//toggle function
const toggleLoadingSpinner =(isLoading)=>{
    const loadingSpinner=document.getElementById('loading-spinner')
   if(isLoading){
    loadingSpinner.classList.remove('hidden')
   }
   else{
    loadingSpinner.classList.add('hidden')
   }
}

// loadPhone()