const loadvideos=async()=>{

    const res=await fetch(` https://openapi.programming-hero.com/api/videos/categories`)
    const data=await res.json()
    const newdata=data.data
    
    

    const tabcontainer=document.getElementById('tabs')
    newdata.forEach((category) => {
        const div=document.createElement('div')
        div.innerHTML=`      
        <a onclick="handleid(${category.category_id})" class="tab">${category.category}</a>`
        
        div.classList.add('bg-gray-300', 'rounded', 'hover:bg-[#FF1F3D]')
        
        tabcontainer.appendChild(div);
        


        
    })


}

 

const handleid=async(category_id)=>
{
  const res=await fetch(` https://openapi.programming-hero.com/api/videos/category/${category_id}`)
 const data=await res.json()
 console.log(data)

 const card=document.getElementById('card')
 card.innerHTML=''
 const notfound=document.getElementById('no_found');
  notfound.innerHTML=''
 if(data.status===true)
{
  
data.data.forEach((catagory)=>{

const div=document.createElement('div')
div.innerHTML=`<div class="card w-80 h-80 mt-10 lg:mx-auto ">

<figure><img class="relative" src="${catagory.thumbnail}" alt="videos" /><p class="   absolute bg-black text-white right-1 bottom-36" id="time" ><span>${time(catagory.others.posted_date)} </span><span>${minutes(catagory.others.posted_date)
}</span></p></figure>

<div class="card-body">
<div class="flex gap-2 ">
<img class="w-10 h-10 rounded-full" src="${catagory.authors.map((pp)=>pp.profile_picture)}" alt="">

  
  <div>
    <h2 class="card-title">${catagory.title}
    </h2>
    <p>${catagory.authors.map((pp)=>pp.profile_name)} <span>${catagory.authors.map((pp)=>pp?.verified)}
      <span></p>
    <p>${catagory.others.views}</p>
  </div>
  </div>
</div>
</div>`
card.appendChild(div)



  


})

}
 else{
  drawing('1005')
}
}


const drawing=async(id)=>
{
  
  const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
  const data=await res.json()
  console.log(data.status)
  
  

  const notfound=document.getElementById('no_found');
  notfound.innerHTML=''
  

  const div=document.createElement("div")
  
  div.innerHTML=`
    <img class="flex lg:mx-40" src="Icon.png" />
    <p class="mt-4">Oops!! Sorry, There is no</p>
    <p class="mt-4 ">content here</p>

  `
  notfound.appendChild(div)
  
  


}




const minutes=(num)=>
{
  
  if(num>=60)
  {
    const n=(((num%3600)-(num%60))/60)+'min ago'
    return n
    
  }
  else{
    const n=''
    return n

  }
 
}
const time=(num)=>
{
  
  if(num>=60)
  {
    const n=((num-(num%3600))/3600)+'hrs'
    return n
    
  }
  else{
    const n=''
    return n

  }
 
};

loadvideos();
handleid(1000);