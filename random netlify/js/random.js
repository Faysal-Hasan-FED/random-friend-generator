const getRandomUser = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => displayRandomUser(data.results));
}
getRandomUser();

const displayRandomUser = users =>{
    const userContainer = document.getElementById('user-container');
    const img = document.getElementById('image');
    users.forEach(user=> {
        img.src = `${user.picture.medium}`;
        const myName = document.getElementById('name');
        myName.innerHTML =`
            <h3>Hi my name is  </h3>
            <h2> ${user.name.title} ${user.name.first} ${user.name.last} </h2>
        `;

        const myEmail = document.getElementById('email');
        myEmail.innerHTML =`
        <h3>My email is</h3>
        <h2>${user.email}</h2>
        `;

        const myAge = document.getElementById('age');
        myAge.innerHTML = `
        <h3>My age is</h3>
        <h2>${user.dob.age}</h2>
        `;

        const myAddress = document.getElementById('address');
        myAddress.innerHTML = `
        <h3>My address is</h3>
        <h2> City: ${user.location.city} || Country: ${user.location.country} || Postcode:${user.location.postcode}</h2>
        `;
        const myNumber = document.getElementById('number');
        myNumber.innerHTML = `
        <h3>My conatct number is</h3>
        <h2> ${user.cell}</h2>
        `;
        const myPass = document.getElementById('password');
        myPass.innerHTML = `
        <h3>My password is</h3>
        <h2> ${user.login.password}</h2>
        `;

        

        
       
    });
}

document.getElementById('refresh').addEventListener('click',function(){
    location.reload();
})

document.getElementById('name').style.display = 'none';
document.getElementById('email').style.display = 'none';
document.getElementById('age').style.display = 'none';
document.getElementById('address').style.display = 'none';
document.getElementById('number').style.display = 'none';
document.getElementById('password').style.display = 'none';

document.getElementById('home-icon').addEventListener('mouseover',function(){
    document.getElementById('name').style.display = 'block';
document.getElementById('email').style.display = 'none';
document.getElementById('age').style.display = 'none';
document.getElementById('address').style.display = 'none';
document.getElementById('number').style.display = 'none';
document.getElementById('password').style.display = 'none';
})

document.getElementById('email-icon').addEventListener('mouseover',function(){
    document.getElementById('name').style.display = 'none';
document.getElementById('email').style.display = 'block';
document.getElementById('age').style.display = 'none';
document.getElementById('address').style.display = 'none';
document.getElementById('number').style.display = 'none';
document.getElementById('password').style.display = 'none';
})

document.getElementById('age-icon').addEventListener('mouseover',function(){
document.getElementById('name').style.display = 'none';
document.getElementById('email').style.display = 'none';
document.getElementById('age').style.display = 'block';
document.getElementById('address').style.display = 'none';
document.getElementById('number').style.display = 'none';
document.getElementById('password').style.display = 'none';
})

document.getElementById('address-icon').addEventListener('mouseover',function(){
document.getElementById('name').style.display = 'none';
document.getElementById('email').style.display = 'none';
document.getElementById('age').style.display = 'none';
document.getElementById('address').style.display = 'block';
document.getElementById('number').style.display = 'none';
document.getElementById('password').style.display = 'none';
})

document.getElementById('number-icon').addEventListener('mouseover',function(){
document.getElementById('name').style.display = 'none';
document.getElementById('email').style.display = 'none';
document.getElementById('age').style.display = 'none';
document.getElementById('address').style.display = 'none';
document.getElementById('number').style.display = 'block';
document.getElementById('password').style.display = 'none';
})

document.getElementById('lock-icon').addEventListener('mouseover',function(){
document.getElementById('name').style.display = 'none';
document.getElementById('email').style.display = 'none';
document.getElementById('age').style.display = 'none';
document.getElementById('address').style.display = 'none';
document.getElementById('number').style.display = 'none';
document.getElementById('password').style.display = 'block';
})


