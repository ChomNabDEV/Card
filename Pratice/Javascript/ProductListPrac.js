const data = document.querySelector("#Car_List");
      const Car_Detail = [
        {
          Brand: "BMW",
          Release_Date: "12-July_1998",
          Price: "2,500,000$",
          Img: "../../image.png",
        },
        {
          Brand: "Ferrari",
          Release_Date: "01-May_1978",
          Price: "10,900,000$",
          Img: "../../image copy.png",
        },
        {
          Brand: "Ros-Roy",
          Release_Date: "12-October_1981",
          Price: "22,00,000$",
          Img: "../../image copy 2.png",
        },
      ];
      Car_Detail.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const h3 = document.createElement("h3");
        h3.innerHTML =
          car.Brand + " - " + car.Price + "<br>" + car.Release_Date;
        
        const image = document.createElement("img");
        image.src = car.Img;
        image.alt = car.Brand;

        card.appendChild(h3);
        card.appendChild(image);
        data.appendChild(card);

        card.addEventListener("click", () => {
          card.classList.toggle("active");
        });
      });