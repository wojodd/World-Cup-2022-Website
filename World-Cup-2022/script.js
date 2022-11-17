const token = "a89fb1287bc445a89c552182c0939862"
const baseUrl = "http://api.football-data.org/v4/competitions/2000"

function getStandings() {
    const url = `${baseUrl}/standings`
    axios.get(url, {
        headers:{
            "X-Auth-Token": token
        }
    })
    .then((response)=>{
        
        const standings = response.data.standings
        document.getElementById("standings").innerHTML =""

        for (const standing of standings) { //يمشي مجموعة مجموعة, one standing from all standing

            let tableContent = ""
            for (row of standing.table) {//كل مجموعة تحتوي عل مصفوفة الفرق one team or table from a standing
                tableContent += `
                <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-4 d-flex justify-content-center align-item-center" >
                        <span class="flag">
                            <img class="rounded-circle" width="40px"height="40px" src="${row.team.crest}" alt="">
                        </span>
                        <h5 style="margin: auto 5px"><b>${row.team.tla}</b>
                        </h5>
                    </div>
                    <div class="col-sm-2" >
                        ${row.won}
                    </div>
                    <div class="col-sm-2" >
                        ${row.lost}
                    </div>
                    <div class="col-sm-2" >
                        ${row.draw}
                    </div>
                    <div class="col-sm-2" >
                        ${row.points}
                    </div>
                </div>
            </li>
            <!--// TEAM //-->`
                
            }

            let content = `
            <div class="col-sm-6 mb-4">
            <div class="card shadow">
                <div class="card-header bg-primary" style="text-align: center;">
                    <b>${standing.group}</b>
                </div>

                <div class="row  bg-secondary m-0">
                    <div class="col-sm-4" >
                        Team
                    </div>
                    <div class="col-sm-2" >
                        Win
                    </div>
                    <div class="col-sm-2" >
                        Lost
                    </div>
                    <div class="col-sm-2" >
                        Draw
                    </div>
                    <div class="col-sm-2" >
                        Points
                    </div>
                </div>

                <!-- TEAMS -->
                <ul class="list-group list-group-flush">
                    <!-- TEAM -->
                    ${tableContent}
                </ul>
                <!--// TEAMS //-->
                </div> `
            document.getElementById("standings").innerHTML += content


            
        }
    })
    
}
getStandings()