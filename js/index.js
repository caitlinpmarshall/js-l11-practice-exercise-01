const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults);
    console.log(userResults);
};

getData();

const displayUsers = function(userResults) {
    randomFolks.innerHTML = ""; //clears randomFolks element; don't quite understand this step

    for (const user of userResults){ //why const, and not let?
        const country = user.location.country;
        const name = user.name.first;
        const pic = user.picture.medium; //didn't like imageUrl for some reason (typo?)
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${pic} alt="user avatar" />
            `;
        randomFolks.append(userDiv);
    }
};