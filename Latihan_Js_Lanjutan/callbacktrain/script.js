// api cheapshark.com  https://www.cheapshark.com/api/1.0/deals?storeID=2&upperPrice=40&AAA=true&sortBy=recent
// api cheapshark.com  https://www.cheapshark.com/api/1.0/games?title=finalfantasy
// $('.search-button').on('click', function(){

//     $.ajax({
//         url: 'https://www.cheapshark.com/api/1.0/games?title='+$('.input-keyword').val()+'&limit=50',
//         success: results => {
            
//             const games = results
//             let cards = ''
//             games.forEach(res => {
//                 cards += `
//                 <div class="col-md-4 my-3">
//                     <div class="card" >
//                         <img src="${res.thumb}" class="card-img-top" alt="${res.external}">
//                         <div class="card-body">
//                           <h5 class="card-title">${res.external}</h5>
//                           <h6 class="card-subtitle mb-2 text-body-secondary">Price: ${res.cheapest}$</h6>
//                           <a href="#" class="btn btn-primary modalDetail" data-bs-toggle="modal" data-bs-target="#gamesDetail" data-gamesId="${res.gameID}">Show Details</a>
//                         </div>
//                       </div>
//                 </div>
//                 `
//             })
//             $('.games-container').html(cards)
    
    
//             // ketika tombol detail di klik
//             $('.modalDetail').on('click', function(){
//                 $.ajax({
//                     url: 'https://www.cheapshark.com/api/1.0/games?id='+ $(this).data('gamesid'),
//                     success: g => {
//                         const deals = g.deals[0]
//                         const gamesDetail = `
//                         <div class="container-fluid">
//                 <div class="row">
//                     <div class="col-md-3">
//                         <img src="${g.info.thumb}" alt="${g.info.title}" class="img-fluid">
//                     </div>
//                     <div class="col-md">
//                         <ul class="list-group">
//                             <li class="list-group-item"><h4>${g.info.title}</h4></li>
//                             <li class="list-group-item">Price: ${deals.price}</li>
//                             <li class="list-group-item">Lowest Price Ever: <strong>${g.cheapestPriceEver.price}$</strong> </li>
//                           </ul>
//                     </div>
//                 </div>
//               </div>
//                         `
//                         $('.modal-body').html(gamesDetail)
//                     }
//                 })
//             })
//         },
//         error: (e) =>{
//             console.log(e.responseText);
//         }
//     })
// })


// with petch

const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword')

    fetch('https://www.cheapshark.com/api/1.0/games?title='+inputKeyword.value+'&limit=50')
        .then(response => response.json())
        .then(response => {
            const games = response
            let cards = ''
            games.forEach(g => cards += `
            <div class="col-md-4 my-3">
                <div class="card" >
                    <img src="${g.thumb}" class="card-img-top" alt="${g.external}">
                    <div class="card-body">
                      <h5 class="card-title">${g.external}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">Price: ${g.cheapest}$</h6>
                      <a href="#" class="btn btn-primary modalDetail" data-bs-toggle="modal" data-bs-target="#gamesDetail" data-gamesId="${g.gameID}">Show Details</a>
                    </div>
                  </div>
            </div>
            `
        )
        const gameContainer = document.querySelector('.games-container')
        gameContainer.innerHTML = cards

        // ketika tombol detai ditekan

        const modalDetail = document.querySelectorAll('.modalDetail')
        modalDetail.forEach(btn => {
            btn.addEventListener('click', function(){
                const gamesid = this.dataset.gamesid
                fetch('https://www.cheapshark.com/api/1.0/games?id='+ $(this).data('gamesid'))
                    .then(response => response.json())
                    .then(g => {
                                                const deals = g.deals[0]
                                                const gamesDetail = `
                                                <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <img src="${g.info.thumb}" alt="${g.info.title}" class="img-fluid">
                                            </div>
                                            <div class="col-md">
                                                <ul class="list-group">
                                                    <li class="list-group-item"><h4>${g.info.title}</h4></li>
                                                    <li class="list-group-item">Price: ${deals.price}</li>
                                                    <li class="list-group-item">Lowest Price Ever: <strong>${g.cheapestPriceEver.price}$</strong> </li>
                                                  </ul>
                                            </div>
                                        </div>
                                      </div>
                                                `
                                                const modalBody = document.querySelector('.modal-body')
                                                modalBody.innerHTML = gamesDetail
                                            })
            })
        })

        })

})


