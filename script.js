async function getListings() {
  let url = "https://sample-api.prolist.io/listings.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderListings() {
  let data = await getListings();
  console.log(data);
  let html = "";

  data.Items.forEach((listing) => {
    let htmlSegment = `<article class="listing">

        <div class="previews">
        <img class="image" src="${listing.Images[0].Preview.Url}" width="500" alt="Image not Found">
        </div>

        <div class="details">
        <h1>${listing.Address.MicroAddress}</h1>
        <h2>${listing.Price.Price}</h2>
        <dl>
          <dt>Bedrooms</dt>
            <dd>${listing.Features.Bedrooms}</dd>
          <dt>Bathrooms</dt>
            <dd>${listing.Features.Bathrooms}</dd>
          <dt>Car Ports</dt>
          <dd>${listing.Features.Parking.Total}</dd>
        </dl>
      </div>
  
  </article>`;

    html += htmlSegment;
  });

  console.log(html);

  const main = document.querySelector("main");
  const newSection = document.createElement("section");
  newSection.classList.add("listings");
  newSection.innerHTML = html;
  main.append(newSection);
}

renderListings();
